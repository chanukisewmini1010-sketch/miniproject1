import React,{useEffect,useState} from 'react';

import Table from '../components/Table';

import registrationApi from '../api/registrationApi';

/**
 * Registrations page - shows a student's event registrations.
 * TODO (Member 5): fetch real data from registrationApi and render it here.
 */
function Registrations() {
  const columns = [
    { key: 'eventTitle', label: 'Event' },
    { key: 'status', label: 'Status' },
    { key: 'registeredAt', label: 'Registered At' },
  ];
  const [error, setError] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        fetchRegistrations();
    }, []);

    const fetchRegistrations = async () => {
        try {
            const response = await registrationApi.getAllRegistrations();
            setRegistrations(response.data);
        } //Add error message handling
        catch (error) {
            setError("Failed to load registrations");
        }finally {
            setLoading(false);
        }
    };

  return (
    <div className="page">
      <h1>Registrations</h1>
        <Table columns={columns} data={registrations} />
    </div>
  );
}

export default Registrations;
