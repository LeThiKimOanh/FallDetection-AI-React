import React, { useState, useEffect } from "react";
import axios from "axios";
import MapView from "../components/MapView";
import { Video, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const Home = () => {
  const [dashboardData, setDashboardData] = useState({
    total_cameras: 0,
    active_cameras: 0,
    recent_alerts: [],
    activity_chart: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/home/data");
        console.log("Dữ liệu từ server:", res.data.recent_alerts);
        console.log("Dữ liệu từ server:", res.data.activity_chart);
        const sortedChart = (res.data.activity_chart || [])
          .map((item) => ({
            ...item,
            formattedTime: dayjs(item.detected_time)
              .tz("Asia/Ho_Chi_Minh")
              .format("HH:mm DD/MM"),
          }))
          .sort(
            (a, b) => new Date(a.detected_time) - new Date(b.detected_time)
          );
        const formattedAlerts = (res.data.recent_alerts || []).map((alert) => ({
          ...alert,
          alertedtime: dayjs(alert.detected_time)
            .tz("Asia/Ho_Chi_Minh")
            .format("HH:mm DD/MM"),
          type: alert.alert_type,
          camera_name: alert.camera_name,
        }));
        setDashboardData({
          ...res.data,
          activity_chart: sortedChart,
          recent_alerts: formattedAlerts,
        });
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      }
    };

    fetchData();
  }, []);

  const cards = [
    {
      id: 1,
      color: "bg-teal-500",
      icon: <Video size={40} className="text-white opacity-50" />,
      value: dashboardData.total_cameras,
      label: "Tổng số camera hiện có",
      buttonText: "Xem chi tiết",
    },
    {
      id: 2,
      color: "bg-red-500",
      icon: <AlertTriangle size={40} className="text-white opacity-50" />,
      value: dashboardData.recent_alerts.length,
      label: "Các cảnh báo gần đây",
      buttonText: "More info",
    },
    {
      id: 3,
      color: "bg-green-500",
      icon: <CheckCircle size={40} className="text-white opacity-50" />,
      value: dashboardData.active_cameras,
      label: "Số camera đang hoạt động",
      buttonText: "More info",
    },
  ];

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

      {/* Thẻ thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.color} p-4 rounded-lg shadow-lg relative flex flex-col justify-between h-32`}
          >
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold text-white">{card.value}</div>
              {card.icon}
            </div>
            <p className="text-white opacity-80 mt-1">{card.label}</p>
            <button className="w-full bg-black bg-opacity-10 text-white py-1 mt-3 flex items-center justify-center rounded-b-md hover:bg-opacity-20 transition">
              {card.buttonText} <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Biểu đồ đường */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">
          Biểu đồ số các cảnh báo xuất hiện
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dashboardData.activity_chart}>
            <XAxis
              dataKey="formattedTime"
              stroke="#8884d8"
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip labelFormatter={(value) => `Thời gian: ${value}`} />
            <Line
              type="monotone"
              dataKey="cameras"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Lịch sử cảnh báo */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Lịch sử sự kiện</h3>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2">Thời gian</th>
              <th className="border border-gray-200 p-2">Loại cảnh báo</th>
              <th className="border border-gray-200 p-2">Camera</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.recent_alerts.map((log, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="p-2 text-center">{log.alertedtime}</td>
                <td className="p-2 text-center">{log.type}</td>
                <td className="p-2 text-center">{log.camera_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bản đồ (nếu có) */}
      <MapView />
    </div>
  );
};

export default Home;
