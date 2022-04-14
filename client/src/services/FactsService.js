import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getFacts() {
    return apiClient.get('/cats/catsfacts');
  },
  deleteFact(id) {
    return apiClient.put(`/cats/catsfacts?${id}`);
  },
  postFact(body) {
    return apiClient.post('/cats/catsfacts', body);
  },

};
