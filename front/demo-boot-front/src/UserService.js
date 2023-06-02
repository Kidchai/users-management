import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/users";

class UserService {
    get(id) {
        return axios.get(API_BASE_URL + "/" + id);
    }

    getAll() {
        return axios.get(API_BASE_URL);
    }

    create(user) {
        return axios.post(API_BASE_URL, user);
    }

    update(id, user) {
        return axios.put(API_BASE_URL + "/" + id, user);
    }

    delete(id) {
        return axios.delete(API_BASE_URL + "/" + id);
    }
}

export const getAllUsers = () => {
    return axios.get(API_BASE_URL);
  };