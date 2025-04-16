import { useNavigate } from "react-router-dom";

const CameraDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="ml-64 flex flex-col h-screen p-6 bg-gray-100">
      {/* Tiêu đề + Nút */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Camera 1</h1>
        <div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
            onClick={() => navigate("/camera/camera:id/update-camera")} // Điều hướng khi nhấn nút
          >
            Cập nhật
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Xóa
          </button>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex flex-1 gap-6">
        {/* Hình ảnh Camera */}
        <div className="flex-1">
          <img
            src="https://tamanhhospital.vn/wp-content/uploads/2021/10/so-cuu-te-nga-thumb.jpg"
            alt="Camera View"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Cảnh báo */}
        <div className="w-80 bg-blue-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Cảnh báo</h2>

          {/* Ngày 29/03/2025 */}
          <div className="bg-gray-300 p-2 rounded-lg mb-3">
            <p className="font-bold">29/03/2025</p>
            <div className="bg-white p-3 rounded-lg shadow mb-2">
              <p className="text-sm">12:20 Phát hiện người</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <p className="text-sm">12:30 Phát hiện người bị ngã</p>
            </div>
          </div>

          {/* Ngày 30/03/2025 */}
          <div className="bg-gray-300 p-2 rounded-lg">
            <p className="font-bold">30/03/2025</p>
            <div className="bg-white p-3 rounded-lg shadow mb-2">
              <p className="text-sm">08:15 Phát hiện người</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
              <p className="text-sm">09:45 Phát hiện vật thể lạ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thông tin Camera */}
      <div className="bg-slate-50 p-4 rounded-lg shadow-md mt-6">
        <p className="text-lg font-semibold">Camera 1</p>
        <p>Khu vực: Hành Lang Khu A</p>
        <p>Địa chỉ IP: 1022578022</p>
      </div>
    </div>
  );
};

export default CameraDetail;
