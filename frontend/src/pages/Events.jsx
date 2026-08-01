import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import eventApi from '../api/eventApi';
import '../styles/modal.css';
import '../styles/ui.css';

const columns = [
  { key: 'title', label: 'Event Title' },
  { key: 'club', label: 'Club' },
  { key: 'eventDate', label: 'Date' },
  { key: 'location', label: 'Location' },
  { key: 'actions', label: 'Actions' },
];

const EMPTY_FORM = {
  title: '',
  clubId: '',
  description: '',
  eventDate: '',
  location: '',
};

function formatEventDate(value) {
  if (!value) {
    return '-';
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function toInputDate(value) {
  return value ? value.slice(0, 16) : '';
}

function matchesSearch(event, clubName, term) {
  if (!term) {
    return true;
  }

  const needle = term.trim().toLowerCase();
  if (!needle) {
    return true;
  }

  const haystack = [event.title, clubName, event.location]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(needle);
}

function buildPayload(form) {
  const payload = {
    title: form.title.trim(),
    clubId: Number(form.clubId),
  };

  if (form.description.trim()) {
    payload.description = form.description.trim();
  }

  if (form.eventDate) {
    payload.eventDate = form.eventDate;
  }

  if (form.location.trim()) {
    payload.location = form.location.trim();
  }

  return payload;
}

function Events() {
  const [events, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState(null);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  function loadEvents() {
    return eventApi
      .getAll()
      .then((response) => {
        setEvents(Array.isArray(response.data) ? response.data : []);
        setError(null);
      })
      .catch(() => {
        setError('Could not load events. Is the backend running on port 8080?');
      });
  }

  useEffect(() => {
    let ignore = false;

    eventApi
      .getAll()
      .then((response) => {
        if (!ignore) {
          setEvents(Array.isArray(response.data) ? response.data : []);
        }
      })
      .catch(() => {
        if (!ignore) {
          setError('Could not load events. Is the backend running on port 8080?');
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    eventApi
      .getClubOptions()
      .then((response) => {
        if (!ignore) {
          setClubs(Array.isArray(response.data) ? response.data : []);
        }
      })
      .catch(() => {
        /* falls back to a plain club id input */
      });

    return () => {
      ignore = true;
    };
  }, []);

  function closeForm() {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFormError(null);
  }

  function closeDeleteConfirm() {
    setDeleteTarget(null);
    setDeleteError(null);
  }

  useEffect(() => {
    const dialogOpen = showForm || deleteTarget !== null;
    if (!dialogOpen) {
      return undefined;
    }

    function handleKeyDown(e) {
      if (e.key !== 'Escape' || saving || deleting) {
        return;
      }

      if (showForm) {
        closeForm();
      } else {
        closeDeleteConfirm();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showForm, deleteTarget, saving, deleting]);

  useEffect(() => {
    if (!showForm && deleteTarget === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showForm, deleteTarget]);

  function openCreate() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFormError(null);
    setShowForm(true);
  }

  function openEdit(event) {
    setEditingId(event.id);
    setForm({
      title: event.title || '',
      clubId: event.clubId != null ? String(event.clubId) : '',
      description: event.description || '',
      eventDate: toInputDate(event.eventDate),
      location: event.location || '',
    });
    setFormError(null);
    setShowForm(true);
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      setFormError('Title is required.');
      return;
    }

    if (!form.clubId) {
      setFormError('Club is required - every event belongs to a club.');
      return;
    }

    setSaving(true);
    setFormError(null);

    const payload = buildPayload(form);
    const request = editingId
      ? eventApi.update(editingId, payload)
      : eventApi.create(payload);

    request
      .then(() => loadEvents())
      .then(() => closeForm())
      .catch((err) => {
        setFormError(err.response?.data?.message || 'Could not save the event.');
      })
      .finally(() => setSaving(false));
  }

  function handleDelete() {
    if (!deleteTarget) {
      return;
    }

    setDeleting(true);
    setDeleteError(null);

    eventApi
      .remove(deleteTarget.id)
      .then(() => loadEvents())
      .then(() => closeDeleteConfirm())
      .catch((err) => {
        setDeleteError(err.response?.data?.message || 'Could not delete the event.');
      })
      .finally(() => setDeleting(false));
  }

  const clubNamesById = new Map(clubs.map((club) => [club.id, club.name]));

  function clubNameFor(event) {
    if (event.clubId == null) {
      return '-';
    }

    return clubNamesById.get(event.clubId) || `Club ${event.clubId}`;
  }

  const filtered = events
    .map((event) => ({ event, clubName: clubNameFor(event) }))
    .filter(({ event, clubName }) => matchesSearch(event, clubName, search));

  const rows = filtered.map(({ event, clubName }) => ({
    id: event.id,
    title: event.title,
    club: clubName,
    eventDate: formatEventDate(event.eventDate),
    location: event.location || '-',
    actions: (
      <span className="row-actions">
        <button
          type="button"
          className="btn btn-warning btn-sm"
          onClick={() => openEdit(event)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => setDeleteTarget(event)}
        >
          Delete
        </button>
      </span>
    ),
  }));

  const searching = search.trim().length > 0;

  return (
    <div className="page">
      <h1>Events</h1>

      {loading && <p>Loading events...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <p>
            <button type="button" className="btn btn-success" onClick={openCreate}>
              Add Event
            </button>
          </p>

          <div className="form">
            <label>
              Search events
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter by title, club or location"
              />
            </label>
          </div>

          <p>
            {searching
              ? `Showing ${rows.length} of ${events.length} events.`
              : `${events.length} ${events.length === 1 ? 'event' : 'events'} found.`}
          </p>

          {searching && rows.length === 0 ? (
            <p className="table-empty">No events match &quot;{search.trim()}&quot;.</p>
          ) : (
            <div className="events-table">
              <Table columns={columns} data={rows} />
            </div>
          )}
        </>
      )}

      {deleteTarget && (
        <div
          className="modal-overlay"
          role="presentation"
          onMouseDown={() => {
            if (!deleting) {
              closeDeleteConfirm();
            }
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-confirm-heading"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h2 id="delete-confirm-heading">Delete event?</h2>

            <p>
              <strong>{deleteTarget.title}</strong> will be permanently deleted.
            </p>
            <p className="error">
              Any registrations and feedback for this event will be deleted as well.
              This cannot be undone.
            </p>

            {deleteError && <p className="error">{deleteError}</p>}

            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeDeleteConfirm}
                disabled={deleting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div
          className="modal-overlay"
          role="presentation"
          onMouseDown={() => {
            if (!saving) {
              closeForm();
            }
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-form-heading"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h2 id="event-form-heading">{editingId ? 'Edit Event' : 'Add Event'}</h2>

            <form className="form" onSubmit={handleSubmit}>
              <label>
                Title *
                <input
                  type="text"
                  value={form.title}
                  maxLength={150}
                  autoFocus
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="Intro to Web Development Workshop"
                />
              </label>

              <label>
                Club *
                {clubs.length > 0 ? (
                  <select
                    value={form.clubId}
                    onChange={(e) => updateField('clubId', e.target.value)}
                  >
                    <option value="">Select a club</option>
                    {clubs.map((club) => (
                      <option key={club.id} value={club.id}>
                        {club.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    min="1"
                    value={form.clubId}
                    onChange={(e) => updateField('clubId', e.target.value)}
                    placeholder="Club id, e.g. 4"
                  />
                )}
              </label>

              <label>
                Date and time
                <input
                  type="datetime-local"
                  value={form.eventDate}
                  onChange={(e) => updateField('eventDate', e.target.value)}
                />
              </label>

              <label>
                Location
                <input
                  type="text"
                  value={form.location}
                  maxLength={200}
                  onChange={(e) => updateField('location', e.target.value)}
                  placeholder="Room 204, Engineering Block"
                />
              </label>

              <label>
                Description
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="What is this event about?"
                />
              </label>

              {formError && <p className="error">{formError}</p>}

              <div className="modal-actions">
                <button type="submit" className="btn btn-success" disabled={saving}>
                  {saving ? 'Saving...' : 'Save'}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeForm}
                  disabled={saving}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
