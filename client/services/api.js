import axios from 'axios';

// timeout for 10s
const api = axios.create({ baseURL: '/', timeout: 10000 });

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' && localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    if (error.response && error.response.data.message === 'jwt expired') {
      localStorage.clear();
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
