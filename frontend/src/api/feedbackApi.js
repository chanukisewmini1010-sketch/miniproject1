import apiClient from './axiosConfig';

// TODO (Member 6): use these functions inside the Feedback page.
const feedbackApi = {
  getAll: () => apiClient.get('/feedback'),
  getById: (id) => apiClient.get(`/feedback/${id}`),
  create: (data) => apiClient.post('/feedback', data),
  update: (id, data) => apiClient.put(`/feedback/${id}`, data),
  remove: (id) => apiClient.delete(`/feedback/${id}`),
};

export default feedbackApi;
