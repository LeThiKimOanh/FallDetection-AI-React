import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import CameraManagement from "./pages/Camera/CameraManagement";
import Account from "./pages/User/Account";
import AddCamera from "./pages/Camera/AddCameraCard";
import CameraDetail from "./pages/Camera/CameraDetail";
import MonitoringArea from "./pages/Area/AreaManagement";
import AddArea from "./pages/Area/AddArea";
import UpdateCamera from "./pages/Camera/UpdateCamera";
function App() {
  return (
    <div className="flex">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Phần content chính */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<CameraManagement />} />
          <Route path="/area" element={<MonitoringArea />} />
          <Route path="/area/add-area" element={<AddArea />} />
          <Route path="/camera/add-camera" element={<AddCamera />} />
          <Route path="/camera/:id" element={<CameraDetail />} />
          <Route path="/camera/:id/update-camera" element={<UpdateCamera />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
