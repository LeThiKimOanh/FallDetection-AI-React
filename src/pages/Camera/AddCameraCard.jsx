import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCamera = () => {
  const navigate = useNavigate();

  const [cameraName, setCameraName] = useState("");
  const [location, setLocation] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [description, setDescription] = useState("");
  const [areaId, setAreaId] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/area/list")
      .then((res) => setAreas(res.data))
      .catch((err) => console.error("Lỗi khi lấy danh sách khu vực:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !cameraName ||
      !ipAddress ||
      !areaId ||
      !videoFile ||
      !location ||
      !description
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const formData = new FormData();
    formData.append("camera_name", cameraName);
    formData.append("location", location);
    formData.append("description", description); // gửi sang field location
    formData.append("ip_address", ipAddress);
    formData.append("area_id", areaId); // gửi area_id đúng theo backend
    formData.append("video", videoFile);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/camera/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Thêm camera thành công!");
      console.log(response.data);

      // After successful addition, navigate to the camera list page and reload
      navigate("/camera", { state: { shouldReload: true } }); // Using replace to avoid going back to the form page
    } catch (error) {
      console.error("Lỗi khi thêm camera:", error);
      alert("Thêm thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center full-screen bg-blue-50 p-4 ml-64 w-full-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Thêm Camera
        </h1>
        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Tên camera */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Tên Camera
            </label>
            <input
              className="w-full p-3 border rounded-lg"
              placeholder="Nhập tên camera"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
              required
            />
          </div>

          {/* Khu vực lắp đặt */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Khu vực lắp đặt
            </label>
            <select
              className="w-full p-3 border rounded-lg"
              value={areaId}
              onChange={(e) => setAreaId(e.target.value)}
              required
            >
              <option value="">-- Chọn khu vực --</option>
              {areas.map((area) => (
                <option key={area.area_id} value={area.area_id}>
                  {area.area_name}
                </option>
              ))}
            </select>
          </div>

          {/* Vị trí lắp đặt */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Vị trí lắp đặt
            </label>
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="Nhập vị trí cụ thể trong khu vực"
              rows="3"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Mô tả */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">Mô tả</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="Nhập mô tả camera"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Địa chỉ IP */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Địa chỉ IP của Camera
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="VD: 192.168.1.100"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              required
            />
          </div>

          {/* Tải lên video */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Tải lên video mẫu
            </label>
            <input
              type="file"
              accept="video/*"
              className="w-full p-3 border rounded-lg"
              onChange={(e) => setVideoFile(e.target.files[0])}
              required
            />
          </div>

          {/* Nút điều hướng */}
          <div className="col-span-2 flex justify-between">
            <button
              type="button"
              className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600"
              onClick={() => navigate("/camera-list")}
            >
              Quay lại
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Đang thêm..." : "Thêm camera"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCamera;
