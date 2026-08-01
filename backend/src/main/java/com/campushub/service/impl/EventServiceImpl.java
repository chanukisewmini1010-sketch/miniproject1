package com.campushub.service.impl;

import com.campushub.dto.EventDto;
import com.campushub.entity.Event;
import com.campushub.exception.ResourceNotFoundException;
import com.campushub.repository.EventRepository;
import com.campushub.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Implementation of EventService.
 * TODO (Member 4): createEvent / updateEvent / deleteEvent are still
 * placeholders - see steps 4-6 of the build plan.
 */
@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    @Transactional(readOnly = true)
    public List<EventDto> getAllEvents() {
        return eventRepository.findAll()
                .stream()
                .map(this::toDto)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public EventDto getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));

        return toDto(event);
    }

    @Override
    public EventDto createEvent(EventDto eventDto) {
        // TODO: map EventDto to entity, save, and return saved EventDto
        return null;
    }

    @Override
    public EventDto updateEvent(Long id, EventDto eventDto) {
        // TODO: fetch existing event, update fields, save, and return updated EventDto
        return null;
    }

    @Override
    public void deleteEvent(Long id) {
        // TODO: delete event by id
    }

    /**
     * Maps an Event entity to its DTO.
     *
     * Only the identifiers of club/createdBy are read. Hibernate keeps the id on
     * the lazy proxy, so this does not trigger an extra query per event and is
     * safe outside an initialized session.
     */
    private EventDto toDto(Event event) {
        EventDto dto = new EventDto();
        dto.setId(event.getId());
        dto.setTitle(event.getTitle());
        dto.setDescription(event.getDescription());
        dto.setEventDate(event.getEventDate());
        dto.setLocation(event.getLocation());
        dto.setClubId(event.getClub() != null ? event.getClub().getId() : null);
        dto.setCreatedById(event.getCreatedBy() != null ? event.getCreatedBy().getId() : null);
        return dto;
    }
}
