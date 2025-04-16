import React from "react";
import { useNavigate } from "react-router-dom"; // Dùng hook useNavigate để chuyển hướng
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function LogoutButton() {
  const navigate = useNavigate(); // Khởi tạo useNavigate hook

  const handleLogout = () => {
    // Xóa token khỏi localStorage khi đăng xuất
    localStorage.removeItem("token");

    // Chuyển hướng người dùng về trang login sau khi đăng xuất
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{ display: "flex", alignItems: "center" }}
    >
      <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
      Đăng xuất
    </button>
  );
}

export default LogoutButton;
