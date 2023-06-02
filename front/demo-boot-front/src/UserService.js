import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/users";

export const getUser = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

export const getAllUsers = () => {
  return axios.get(API_BASE_URL);
};

export const createUser = (user) => {
  return axios.post(API_BASE_URL, user);
};

export const updateUser = (id, user) => {
  return axios.put(`${API_BASE_URL}/${id}`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
}