import React from 'react';
import AdminSidebar from '../components/layout/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-tup-bg">
      {/* Sidebar is fixed, so we just place it here */}
      <AdminSidebar />
      
      {/* Main Content Area - We add ml-64 to push content past the sidebar */}
      <main className="flex-1 ml-64 p-10 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;