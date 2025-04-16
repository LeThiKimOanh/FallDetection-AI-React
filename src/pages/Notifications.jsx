import React, { useState } from "react";
import { Bell, Trash2 } from "lucide-react";

const initialAlerts = [
  {
    id: 1,
    camera: "Camera 1",
    time: "11:50 Ngày 30/03/2025",
    message: "phát hiện người bị ngã",
  },
  {
    id: 2,
    camera: "Camera 1",
    time: "12:50 Ngày 29/03/2025",
    message: "phát hiện người bị ngã",
  },
  {
    id: 3,
    camera: "Camera 2",
    time: "7:50 Ngày 29/03/2025",
    message: "phát hiện người bị ngã",
  },
  {
    id: 4,
    camera: "Camera 2",
    time: "9:10 Ngày 29/03/2025",
    message: "phát hiện người bị ngã",
  },
];

export default function Notifications() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleDelete = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Cảnh báo</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 w-12 text-center">Chọn</th>
              <th className="p-3 w-32 text-center">Camera</th>
              <th className="p-3 w-48 text-center">Thời gian</th>
              <th className="p-3 w-64 text-center">Thông báo</th>
              <th className="p-3 w-20 text-center">Hình ảnh</th>
              <th className="p-3 w-20 text-center">Cảnh báo</th>
              <th className="p-3 w-20 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr
                key={alert.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-3 text-center">
                  <input type="checkbox" className="w-5 h-5" />
                </td>
                <td className="p-3 font-medium text-center">{alert.camera}</td>
                <td className="p-3 text-red-500 text-center">{alert.time}</td>
                <td className="p-3 font-semibold text-center">
                  {alert.message}
                </td>
                <td className="p-3 text-center">
                  <img
                    src="https://tamanhhospital.vn/wp-content/uploads/2021/10/so-cuu-te-nga-thumb.jpg"
                    alt="Camera snapshot"
                    className="w-20 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="p-3 text-center">
                  <Bell className="text-red-500 mx-auto" />
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(alert.id)}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 flex items-center justify-center mx-auto"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Bell, Trash2 } from "lucide-react";

// export default function Notifications() {
//   const [alerts, setAlerts] = useState([]);

//   // Lấy dữ liệu từ API khi component mount
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/alerts")
//       .then((res) => setAlerts(res.data))
//       .catch((err) => console.error("Lỗi lấy thông báo:", err));
//   }, []); // Chạy một lần khi component mount

//   const handleDelete = (id) => {
//     setAlerts(alerts.filter((alert) => alert.id !== id));
//   };

//   return (
//     <div className="ml-64 p-6 bg-gray-100 rounded-lg shadow">
//       <h2 className="text-2xl font-bold mb-4">Cảnh báo</h2>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse table-fixed">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="p-3 w-12 text-center">Chọn</th>
//               <th className="p-3 w-32 text-center">Camera</th>
//               <th className="p-3 w-48 text-center">Thời gian</th>
//               <th className="p-3 w-64 text-center">Thông báo</th>
//               <th className="p-3 w-20 text-center">Hình ảnh</th>
//               <th className="p-3 w-20 text-center">Cảnh báo</th>
//               <th className="p-3 w-20 text-center">Hành động</th>
//             </tr>
//           </thead>
//           <tbody>
//             {alerts.map((alert, index) => (
//               <tr
//                 key={alert.id}
//                 className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
//               >
//                 <td className="p-3 text-center">
//                   <input type="checkbox" className="w-5 h-5" />
//                 </td>
//                 <td className="p-3 font-medium text-center">{alert.camera}</td>
//                 <td className="p-3 text-red-500 text-center">{alert.time}</td>
//                 <td className="p-3 font-semibold text-center">
//                   {alert.message}
//                 </td>
//                 <td className="p-3 text-center">
//                   <img
//                     src={
//                       alert.image ||
//                       "https://tamanhhospital.vn/wp-content/uploads/2021/10/so-cuu-te-nga-thumb.jpg"
//                     } // Điều chỉnh để sử dụng hình ảnh từ API
//                     alt="Camera snapshot"
//                     className="w-20 h-12 object-cover rounded-md"
//                   />
//                 </td>
//                 <td className="p-3 text-center">
//                   <Bell className="text-red-500 mx-auto" />
//                 </td>
//                 <td className="p-3 text-center">
//                   <button
//                     onClick={() => handleDelete(alert.id)}
//                     className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 flex items-center justify-center mx-auto"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
