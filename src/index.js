import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import App from "./App";
import "leaflet/dist/leaflet.css";
import "./styles/Main.css";

function MainWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user_id")
  );

  return (
    <Router>
      <Main
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}

function Main({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      {/* Trang login */}
      <Route
        path="/login"
        element={<LoginForm setIsAuthenticated={setIsAuthenticated} />}
      />

      {/* Route bảo vệ App */}
      <Route
        path="/*"
        element={isAuthenticated ? <App /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainWrapper />
  </React.StrictMode>
);
