import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedAdmin from "./pages/ProtectedAdmin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import Casino from './pages/Casino';
import Games from './pages/Games';
import Review from './pages/Reviews';
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from './pages/Popup';

function App() {
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedAdmin>
              <div className="flex h-screen">
                <Sidebar isAdminRoute={isAdminRoute} />
                <div className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/admin/blog/*" element={<Blog />} />
                    <Route path="/admin/casino/*" element={<Casino />} />
                    <Route path="/admin/games/*" element={<Games />} />
                    <Route path="/admin/reviews" element={<Review />} />
                    <Route path="/admin/popup/*" element={<Popup />} />
                  </Routes>
                </div>
              </div>
            </ProtectedAdmin>
          }
        />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;