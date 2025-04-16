// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/users";

// export const getAllUsers = () => axios.get(BASE_URL);

// export const getUserById = (id) => axios.get(`${BASE_URL}/${id}`);

// export const addUser = (userData) => axios.post(BASE_URL, userData);

// export const updateUser = (id, userData) =>
//   axios.put(`${BASE_URL}/${id}`, userData);

// export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users"; // Giữ nguyên cho các API người dùng
const AUTH_URL = "http://localhost:5000/api/users"; // Đảm bảo URL đăng nhập trỏ đúng

// Các API khác (GET, POST, PUT, DELETE)
export const getAllUsers = () => axios.get(BASE_URL);

export const getUserById = (id) => axios.get(`${BASE_URL}/${id}`);

export const addUser = (userData) => axios.post(BASE_URL, userData);

export const updateUser = (id, userData) =>
  axios.put(`${BASE_URL}/${id}`, userData);

export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);

// API cho việc đăng nhập
export const loginUser = (email, password) =>
  axios.post(`${AUTH_URL}/login`, { email, password }); // Đảm bảo đúng URL đăng nhập
// Sửa đúng URL đăng nhập
