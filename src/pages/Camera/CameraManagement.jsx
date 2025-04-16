import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CameraList from "../Camera/CameraList";
import axios from "axios";

const CameraManagement = () => {
  const [cameras, setCameras] = useState([]);
  const location = useLocation();

  const fetchCameras = async () => {
    try {
      const response = await axios.get("http://localhost:5000/camera/list");
      setCameras(response.data.cameras);
    } catch (error) {
      console.error("Lỗi khi tải danh sách camera:", error);
    }
  };

  useEffect(() => {
    fetchCameras(); // lần đầu tiên load
  }, []);

  useEffect(() => {
    if (location.state?.shouldReload) {
      fetchCameras(); // reload khi có flag
    }
  }, [location]);

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Quản lý Camera</h1>
      <CameraList cameras={cameras} setCameras={setCameras} />
    </div>
  );
};

export default CameraManagement;
