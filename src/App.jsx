import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Auth Page
import LoginPage from './pages/auth/loginPage'; 

// Student Pages
import Home from './pages/student/home';
import Chatbot from './pages/student/chatbot';
import GuidePage from './pages/student/guidePage';

// Admin Pages
import AdminAnalytics from './pages/admin/adminAnalytics';
import ContentManagement from './pages/admin/contentManagement';
import AdminChatbotConfig from './pages/admin/adminChatbotConfig';
import SystemSettings from './pages/admin/systemSettings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Student Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/guide" element={<GuidePage />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Navigate to="/admin/analytics" />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/config" element={<AdminChatbotConfig />} />
        <Route path="/admin/settings" element={<SystemSettings />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;