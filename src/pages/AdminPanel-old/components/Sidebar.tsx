import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar d-flex flex-column p-3">
      <h3>Admin Panel</h3>
      <NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink>
      <NavLink to="/admin/users" className="nav-link">Users</NavLink>
      <NavLink to="/admin/bookings" className="nav-link">Bookings</NavLink>
      <NavLink to="/admin/reports" className="nav-link">Reports</NavLink>
      <NavLink to="/admin/coupons" className="nav-link">Coupons</NavLink>
    </nav>
  );
};

export default Sidebar;
