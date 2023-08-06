import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const AdminLayout = () => {
  return (
    <div className='d-flex gap-5'>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
