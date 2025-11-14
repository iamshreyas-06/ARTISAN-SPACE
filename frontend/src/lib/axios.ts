import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
    ? `${import.meta.env.VITE_BACKEND_URL}/api/v1`
    : "/api/v1", /* Refactored */ // Backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, /* Refactored */ // This is crucial for sending cookies
});

export default api;
