import React from "react";

const CameraGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="bg-gray-200 p-6 rounded-lg shadow-md h-48 flex items-center justify-center"
          >
            Camera {id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraGrid;
