import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Auth Page
import LoginPage from './pages/auth/loginPage'; 

// Student Pages
import Home from './pages/student/home';
import Profile from './pages/student/profile';
import HandbookPreview from './pages/student/handbookPreview';
import Chatbot from './pages/student/chatbot';
import GuidePage from './pages/student/guidePage';
import LibraryInfoPage from './pages/student/libraryInfo';
import StudentServices from './pages/student/studentServices'; 
import RulesOnConduct from './pages/student/rulesOnConduct';
import CampusMap from './pages/student/campusMap';

// Admin Pages
import AdminAnalytics from './pages/admin/adminAnalytics';
import ContentManagement from './pages/admin/contentManagement';
import AdminChatbotConfig from './pages/admin/adminChatbotConfig';
import SystemSettings from './pages/admin/systemSettings';
import AdminTrainingLogs from './pages/admin/adminTrainingLogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Student Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/preview-handbook" element={<HandbookPreview />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/library-info" element={<LibraryInfoPage />} />
        
        {/* Newly added routes as per my trial to adapt the wireframe from figma */}
        <Route path="/services" element={<StudentServices />} />
        <Route path="/rules" element={<RulesOnConduct />} />
        <Route path="/map" element={<CampusMap />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Navigate to="/admin/analytics" />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/content" element={<ContentManagement />} />
        <Route path="/admin/config" element={<AdminChatbotConfig />} />
        <Route path="/admin/settings" element={<SystemSettings />} />

        {/* Newly added */}
        <Route path="/admin/logs" element={<AdminTrainingLogs />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;