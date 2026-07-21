import apiClient from './axiosConfig';

// TODO (Member 4): use these functions inside the Events page.
const eventApi = {
  getAll: () => apiClient.get('/events'),
  getById: (id) => apiClient.get(`/events/${id}`),
  create: (data) => apiClient.post('/events', data),
  update: (id, data) => apiClient.put(`/events/${id}`, data),
  remove: (id) => apiClient.delete(`/events/${id}`),
};

export default eventApi;
