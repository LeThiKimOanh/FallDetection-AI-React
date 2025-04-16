import axios from "axios";

const BASE_URL = "http://localhost:5000/api/areas";

export const getAllAreas = () => axios.get(BASE_URL);

export const addArea = (areaData) => axios.post(BASE_URL, areaData);

export const getAreaById = (id) => axios.get(`${BASE_URL}/${id}`);

export const updateArea = (id, areaData) =>
  axios.put(`${BASE_URL}/${id}`, areaData);

export const deleteArea = (id) => axios.delete(`${BASE_URL}/${id}`);
