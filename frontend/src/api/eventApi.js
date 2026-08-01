import apiClient from './axiosConfig';

const eventApi = {
  getAll: () => apiClient.get('/events'),
  // clubs for the event form's picker - temporary, until /api/clubs works
  getClubOptions: () => apiClient.get('/events/club-options'),
  getById: (id) => apiClient.get(`/events/${id}`),
  create: (data) => apiClient.post('/events', data),
  update: (id, data) => apiClient.put(`/events/${id}`, data),
  remove: (id) => apiClient.delete(`/events/${id}`),
};

export default eventApi;
