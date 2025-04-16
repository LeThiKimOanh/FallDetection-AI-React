import { useState } from "react";

const AddArea = () => {
  const [areaName, setAreaName] = useState("");
  const [selectedCamera, setSelectedCamera] = useState("");
  const [description, setDescription] = useState("");

  const cameras = ["Camera 1", "Camera 2", "Camera 3", "Camera 4"];

  return (
    <div className="flex items-center  full-screen bg-blue-50 p-4 ml-64 w-full-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-8xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Thêm khu vực giám sát
        </h2>

        <form className="grid grid-cols-2 gap-6">
          {/* Cột 1 */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Tên khu vực giám sát
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tên khu vực"
              value={areaName}
              onChange={(e) => setAreaName(e.target.value)}
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Camera phụ trách
            </label>
            <select
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
            >
              <option value="">Chọn camera</option>
              {cameras.map((camera, index) => (
                <option key={index} value={camera}>
                  {camera}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">Mô tả</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mô tả về khu vực"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Khu vực tải lên hình ảnh */}

          {/* Khu vực gắn bản đồ */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Gắn bản đồ
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập liên kết bản đồ"
            />
          </div>

          {/* Nút điều hướng */}
          <div className="col-span-2 flex justify-between">
            <button className="bg-gray-500 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition">
              Quay lại
            </button>
            <button className="bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Thêm khu vực
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArea;
