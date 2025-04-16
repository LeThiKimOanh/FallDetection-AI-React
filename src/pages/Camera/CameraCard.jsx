import { useNavigate } from "react-router-dom";
import { FolderPlus } from "lucide-react";

const CameraCard = ({ camera }) => {
  const navigate = useNavigate();

  return (
    <div className="w-90 h-auto border rounded-lg p-2 pb-4 flex flex-col items-center shadow-md bg-gray-100">
      {camera ? (
        <>
          <video
            src={camera.video_stream_url}
            controls
            autoPlay
            muted
            className="w-full h-[200px] object-cover rounded-md"
          />

          <div className="flex justify-between items-center w-full mt-4 px-6">
            <p className="font-medium text-gray-800">{camera.name}</p>
            <button
              className="bg-green-600 text-white px-4 py-1 rounded transition duration-300 hover:bg-green-700"
              onClick={() => navigate(`/camera/${camera.id}`)}
            >
              Xem
            </button>
          </div>
        </>
      ) : (
        <div className="w-full h-[200px] flex flex-col items-center justify-center bg-gray-300 rounded-md">
          <button
            onClick={() => navigate("/camera/add-camera")}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
          >
            <FolderPlus size={16} /> Thêm
          </button>
        </div>
      )}
    </div>
  );
};
export default CameraCard;
