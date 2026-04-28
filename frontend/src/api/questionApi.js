import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ─── REQUEST INTERCEPTOR: attach JWT if present ───────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// ─── RESPONSE INTERCEPTOR: auto-logout on 401 ─────────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid — clear local storage silently
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    }
    return Promise.reject(error);
  }
);

// ─── AUTH ─────────────────────────────────────────────────────
export const adminLogin = async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  return data;
};

// ─── GET ALL QUESTIONS ───────────────────────────────────────
export const getAllQuestions = async (type, category) => {
  const params = {};
  if (type) params.type = type;
  if (category) params.category = category;
  const { data } = await api.get('/questions', { params });
  return data;
};

// ─── GET SINGLE QUESTION ────────────────────────────────────
export const getQuestion = async (id) => {
  const { data } = await api.get(`/questions/${id}`);
  return data;
};

// ─── CREATE QUESTION ─────────────────────────────────────────
export const createQuestion = async (questionData) => {
  const { data } = await api.post('/questions', questionData);
  return data;
};

// ─── UPDATE QUESTION ─────────────────────────────────────────
export const updateQuestion = async (id, questionData) => {
  const { data } = await api.put(`/questions/${id}`, questionData);
  return data;
};

// ─── DELETE QUESTION ─────────────────────────────────────────
export const deleteQuestion = async (id) => {
  const { data } = await api.delete(`/questions/${id}`);
  return data;
};
