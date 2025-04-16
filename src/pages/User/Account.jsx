import { useState } from "react";
import { Camera, Pencil } from "lucide-react";

export default function UserProfile() {
  const [avatar, setAvatar] = useState("../../assets/avatar.JPG");
  const [name, setName] = useState("Nguyễn Văn A");
  const [email, setEmail] = useState("nguyenvana@example.com");
  const [phone, setPhone] = useState("0123 456 789");
  const [address, setAddress] = useState("Hà Nội, Việt Nam");
  const [dob, setDob] = useState("2000-01-01");
  const [gender, setGender] = useState("Nam");
  const [isEditing, setIsEditing] = useState(false);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  return (
    <div className="flex ml-64 items-center ">
      <div className=" bg-white rounded-lg shadow-lg p-8 w-full h-screen flex flex-col">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Thông Tin Tài Khoản
        </h2>
        <div className="flex items-center space-x-8 mb-6">
          <div className="relative">
            <img
              src={avatar}
              alt="Avatar"
              className="w-40 h-40 rounded-full object-cover border"
            />
            <label className="absolute bottom-2 right-2 bg-gray-700 p-3 rounded-full cursor-pointer">
              <Camera className="text-white w-7 h-7" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">{name}</h3>
            <p className="text-gray-600 text-lg">{email}</p>
            <button
              className="mt-3 flex items-center text-blue-500 hover:underline text-lg"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Pencil className="w-6 h-6 mr-2" /> Chỉnh sửa thông tin
            </button>
          </div>
        </div>
        {isEditing && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 font-medium">Họ và tên</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Số điện thoại</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Địa chỉ</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Ngày sinh</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="text-gray-600 font-medium">Giới tính</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border rounded-lg p-4 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div className="col-span-2 flex justify-center">
              <button
                className="w-1/2 bg-blue-500 text-white py-4 rounded-lg text-lg hover:bg-blue-600"
                onClick={() => setIsEditing(false)}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
