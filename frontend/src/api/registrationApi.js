import apiClient from './axiosConfig';

// TODO (Member 5): use these functions inside the Registrations page.
const registrationApi = {
  getAll: () => apiClient.get('/registrations'),
  getById: (id) => apiClient.get(`/registrations/${id}`),
  create: (data) => apiClient.post('/registrations', data),
  update: (id, data) => apiClient.put(`/registrations/${id}`, data),
  remove: (id) => apiClient.delete(`/registrations/${id}`),
};

export default registrationApi;
