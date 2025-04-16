import axios from "axios";

const BASE_URL = "http://localhost:5000/api/cameras";

export const getAllCameras = () => axios.get(BASE_URL);

export const getCameraById = (id) => axios.get(`${BASE_URL}/${id}`);

export const addCamera = (cameraData) => axios.post(BASE_URL, cameraData);

export const updateCamera = (id, cameraData) =>
  axios.put(`${BASE_URL}/${id}`, cameraData);

export const deleteCamera = (id) => axios.delete(`${BASE_URL}/${id}`);
