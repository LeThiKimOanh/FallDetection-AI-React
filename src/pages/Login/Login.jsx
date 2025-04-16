import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Thêm thư viện axios để gọi API
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/LayoutCard";

export default function LoginForm({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.status === "success") {
        localStorage.setItem("user_id", response.data.user_id);
        setIsAuthenticated(true);
        alert("Login successful!");
        navigate("/"); // chuyển trang
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Lỗi đăng nhập.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <Card className="w-full max-w-md shadow-lg rounded-2xl bg-white p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-600">
            Welcome Back
          </CardTitle>
          <p className="text-gray-500">Login to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
