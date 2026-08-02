import React, { useEffect, useState } from 'react';

import Table from '../components/Table';

import registrationApi from '../api/registrationApi';

/**
 * Registrations page - shows a student's event registrations.
 */
function Registrations() {

    const columns = [
        { key: 'eventTitle', label: 'Event' },
        { key: 'status', label: 'Status' },
        { key: 'registeredAt', label: 'Registered At' },
    ];

    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchRegistrations();
    }, []);


    const fetchRegistrations = async () => {
        try {
            const response = await registrationApi.getAllRegistrations();
            setRegistrations(response.data);

        } catch (error) {
            console.error("Error fetching registrations:", error);
            setError("Failed to load registrations.");

        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="page">

            <h1>Registrations</h1>


            {loading && (
                <p>Loading registrations...</p>
            )}


            {error && (
                <p>{error}</p>
            )}


            {!loading && !error && (
                <Table
                    columns={columns}
                    data={registrations}
                />
            )}

        </div>
    );
}

export default Registrations;