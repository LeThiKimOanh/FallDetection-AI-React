import { useState } from "react";
import CameraCard from "../Camera/CameraCard";
import { useNavigate } from "react-router-dom";
import { Search, FolderPlus } from "lucide-react";

const CameraList = ({ cameras, setCameras }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddCamera = () => {
    navigate("/camera/add-camera");
  };

  const filteredCameras = cameras.filter((camera) =>
    camera.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Tìm kiếm camera..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 pl-10 border rounded w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
        <button
          onClick={handleAddCamera}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
        >
          <FolderPlus size={16} /> Thêm camera mới
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredCameras.map((camera, index) => (
          <CameraCard key={index} camera={camera} onAdd={handleAddCamera} />
        ))}
        <CameraCard onAdd={handleAddCamera} /> {/* Ô thêm camera */}
      </div>
    </div>
  );
};

export default CameraList;
