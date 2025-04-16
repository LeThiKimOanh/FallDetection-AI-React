import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/Card";
import { Button } from "../../components/Button";
import { Pencil, Trash2, FolderPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MonitoringArea() {
  const [monitoringAreas, setMonitoringAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/area/list")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMonitoringAreas(data);
        } else {
          console.error("Expected array but got", typeof data);
          setMonitoringAreas([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching areas:", error);
        setMonitoringAreas([]);
      });
  }, []);

  return (
    <div className="p-4 ml-64">
      <h1 className="text-2xl font-bold mb-4">Danh mục Khu vực giám sát</h1>
      <Card>
        <CardContent className="p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2">STT</th>
                <th className="p-2 text-center">Tên khu vực</th>
                <th className="p-2">Camera phụ trách</th>
                <th className="p-2">Mô tả</th>
                <th className="p-2">Ngày tạo</th>
                <th className="p-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {monitoringAreas.length > 0 ? (
                monitoringAreas.map((area, index) => (
                  <tr
                    key={area.area_id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200`}
                  >
                    <td className="p-2 text-center">{index + 1}</td>
                    <td className="p-2 text-center">{area.area_name}</td>
                    <td className="p-2 text-center">{area.camera_name}</td>
                    <td className="p-2 text-center">{area.description}</td>
                    <td className="p-2 text-center">{area.created_at}</td>
                    <td className="p-2 text-center flex gap-2 justify-center">
                      <Button className="bg-green-500 text-white flex items-center gap-1 hover:bg-green-600">
                        <Pencil size={16} /> Sửa
                      </Button>
                      <Button className="bg-red-500 text-white flex items-center gap-1 hover:bg-red-600">
                        <Trash2 size={16} /> Xóa
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    Không có khu vực giám sát nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <div className="mt-4">
        <Button
          onClick={() => navigate("/area/add-area")}
          className="bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"
        >
          <FolderPlus size={18} /> Thêm khu vực giám sát
        </Button>
      </div>
    </div>
  );
}
