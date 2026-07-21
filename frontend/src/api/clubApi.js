import apiClient from './axiosConfig';

// TODO (Member 3): use these functions inside the Clubs page.
const clubApi = {
  getAll: () => apiClient.get('/clubs'),
  getById: (id) => apiClient.get(`/clubs/${id}`),
  create: (data) => apiClient.post('/clubs', data),
  update: (id, data) => apiClient.put(`/clubs/${id}`, data),
  remove: (id) => apiClient.delete(`/clubs/${id}`),
};

export default clubApi;
