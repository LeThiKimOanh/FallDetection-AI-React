const UpdateCamera = () => {
  return (
    <div className="flex items-center  full-screen bg-blue-50 p-4 ml-64 w-full-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Chỉnh sửa thông tin
        </h1>
        <form className="grid grid-cols-2 gap-6">
          {/* Cột 1 */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Tên Camera
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tên camera"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Khu vực lắp đặt
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Chọn khu vực"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">Mô tả</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mô tả về camera"
              rows="4"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Địa chỉ IP của Camera
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="VD: 192.168.1.100"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">
              Tải lên video
            </label>
            <input
              type="file"
              accept="video/*"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Nút bấm full width */}
          {/* Nút điều hướng */}
          <div className="col-span-2 flex justify-between">
            <button className="bg-gray-500 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition">
              Quay lại
            </button>
            <button className="bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCamera;
