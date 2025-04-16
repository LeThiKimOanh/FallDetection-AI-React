import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import avatar from "../assets/avatar.JPG";
import {
  FaHome,
  FaCamera,
  FaBell,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { LogOut } from "lucide-react";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hàm kiểm tra xem tab có đang được chọn không
  const isActive = (path) =>
    location.pathname.startsWith(path) && location.pathname !== "/";
  const handleLogout = () => {
    // Xóa token khỏi localStorage khi đăng xuất
    localStorage.removeItem("token");

    // Chuyển hướng người dùng về trang login sau khi đăng xuất
    navigate("/login");
  };
  return (
    <div className="w-64 h-screen bg-gray-300 text-black fixed top-0 left-0 shadow-lg">
      <div className="p-4 text-2xl font-bold border-b border-blue-600 flex items-center gap-4">
        <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
        <span>Admin Panel</span>
      </div>

      <ul className="mt-4">
        <li
          className={`p-4 flex items-center cursor-pointer ${
            location.pathname === "/"
              ? "bg-sky-600 text-white"
              : "hover:bg-blue-100"
          }`}
          onClick={() => navigate("/")}
        >
          <FaHome className="mr-2" /> Home
        </li>
        <li
          className={`p-4 flex items-center cursor-pointer ${
            isActive("/camera") ? "bg-sky-600 text-white" : "hover:bg-blue-100"
          }`}
          onClick={() => navigate("/camera")}
        >
          <FaCamera className="mr-2" /> Quản lý Camera
        </li>
        <li
          className={`p-4 flex items-center cursor-pointer ${
            isActive("/area") ? "bg-sky-600 text-white" : "hover:bg-blue-100"
          }`}
          onClick={() => navigate("/area")}
        >
          <FaMapMarkerAlt className="mr-2" /> Khu vực giám sát
        </li>
        <li
          className={`p-4 flex items-center cursor-pointer ${
            isActive("/notifications")
              ? "bg-sky-600 text-white"
              : "hover:bg-blue-100"
          }`}
          onClick={() => navigate("/notifications")}
        >
          <FaBell className="mr-2" /> Lịch sử Thông báo
        </li>
        <li
          className={`p-4 flex items-center cursor-pointer ${
            isActive("/account") ? "bg-sky-600 text-white" : "hover:bg-blue-100"
          }`}
          onClick={() => navigate("/account")}
        >
          <FaUser className="mr-2" /> Tài khoản
        </li>
        <li
          className={`p-4 flex items-center cursor-pointer ${
            isActive("/logout") ? "bg-sky-600 text-white" : "hover:bg-blue-100"
          }`}
          onClick={handleLogout}
        >
          <LogOut className="mr-2" /> Đăng xuất
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
