import axios from 'axios';

const baseAxios = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  withCredentials: true,
});

const authAxios = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  withCredentials: true,
});

export { baseAxios, authAxios };
