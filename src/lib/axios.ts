import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
