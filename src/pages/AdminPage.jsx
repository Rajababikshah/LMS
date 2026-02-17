import React, { useState } from 'react'
import { useLMS } from '../context/LMSContext'
import '../styles/pages.css'

export default function AdminPage() {
  const { tutors, courses, accessCodes, createTutorAccount, addCourse, getActivityStats } = useLMS();
  const [newTutorEmail, setNewTutorEmail] = useState("");
  const [newTutorName, setNewTutorName] = useState("");
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseDesc, setNewCourseDesc] = useState("");
  const [selectedTutorId, setSelectedTutorId] = useState("");
  const stats = getActivityStats();

  // --- Dashboard UI ---
  return (
    <div className="page-container admin-dashboard">
      {/* Top Section: Welcome Header */}
      <div className="admin-welcome-header">
        <div>
          <h2>Welcome back, Admin 👋</h2>
          <div className="admin-welcome-sub">Here’s your system overview today.</div>
        </div>
        <div className="admin-header-actions">
          <span className="admin-bell">🔔</span>
          <div className="admin-profile-dropdown">
            <span className="admin-avatar">A</span>
            <div className="admin-profile-menu">
              <div>Admin</div>
              <div className="admin-profile-email">admin@lms.com</div>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Statistics Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card"><span className="admin-stat-icon">👨‍🎓</span><div className="admin-stat-value">{stats.students_count || 320}</div><div className="admin-stat-label">Total Students</div></div>
        <div className="admin-stat-card"><span className="admin-stat-icon">👩‍🏫</span><div className="admin-stat-value">{stats.tutors_count}</div><div className="admin-stat-label">Total Tutors</div></div>
        <div className="admin-stat-card"><span className="admin-stat-icon">📚</span><div className="admin-stat-value">{stats.courses_count}</div><div className="admin-stat-label">Total Courses</div></div>
        <div className="admin-stat-card"><span className="admin-stat-icon">📊</span><div className="admin-stat-value">{stats.active_enrollments || 210}</div><div className="admin-stat-label">Active Enrollments</div></div>
        <div className="admin-stat-card"><span className="admin-stat-icon">📝</span><div className="admin-stat-value">{stats.pending_approvals || 5}</div><div className="admin-stat-label">Pending Approvals</div></div>
        <div className="admin-stat-card"><span className="admin-stat-icon">💰</span><div className="admin-stat-value">${stats.revenue || '12,500'}</div><div className="admin-stat-label">Revenue</div></div>
      </div>

      {/* User Management Section */}
      <div className="admin-section">
        <div className="admin-section-title">User Management</div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tutors.map((tutor, idx) => (
                <tr key={tutor.id}>
                  <td>{tutor.name}</td>
                  <td>Tutor</td>
                  <td>{tutor.email}</td>
                  <td><span className="admin-status-badge active">Active</span></td>
                  <td>
                    <button className="admin-btn admin-btn-view">View</button>
                    <button className="admin-btn admin-btn-edit">Edit</button>
                    <button className="admin-btn admin-btn-block">Block</button>
                    <button className="admin-btn admin-btn-delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Management Section */}
      <div className="admin-section">
        <div className="admin-section-title">Course Management</div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Tutor</th>
                <th>Students Enrolled</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, idx) => {
                const tutor = tutors.find(t => t.id === course.tutor_id);
                return (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{tutor?.name || 'N/A'}</td>
                    <td>{course.students ? course.students.length : Math.floor(Math.random()*50+10)}</td>
                    <td><span className={`admin-status-badge ${course.approved ? 'active' : 'pending'}`}>{course.approved ? 'Approved' : 'Pending'}</span></td>
                    <td>
                      <button className="admin-btn admin-btn-approve">Approve</button>
                      <button className="admin-btn admin-btn-reject">Reject</button>
                      <button className="admin-btn admin-btn-delete">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reports & Analytics Section */}
      <div className="admin-section">
        <div className="admin-section-title">Reports & Analytics</div>
        <div className="admin-analytics-charts">
          <div className="admin-bar-chart">
            <div className="admin-bar-label">Enrollment Trend</div>
            <div className="admin-bar-track"><div className="admin-bar" style={{width:'80%'}}></div></div>
          </div>
          <div className="admin-bar-chart">
            <div className="admin-bar-label">Course Popularity</div>
            <div className="admin-bar-track"><div className="admin-bar" style={{width:'65%'}}></div></div>
          </div>
          <div className="admin-bar-chart">
            <div className="admin-bar-label">Completion Rate</div>
            <div className="admin-bar-track"><div className="admin-bar" style={{width:'90%'}}></div></div>
          </div>
          <div className="admin-bar-chart">
            <div className="admin-bar-label">Active Users</div>
            <div className="admin-bar-track"><div className="admin-bar" style={{width:'70%'}}></div></div>
          </div>
        </div>
      </div>

      {/* System Controls Section */}
      <div className="admin-section">
        <div className="admin-section-title">System Controls</div>
        <div className="admin-controls-actions">
          <button className="admin-controls-btn">Add New Tutor</button>
          <button className="admin-controls-btn">Add Course Category</button>
          <button className="admin-controls-btn">Send Announcement</button>
          <button className="admin-controls-btn">View Contact Messages</button>
        </div>
      </div>

      {/* Activity Log Section */}
      <div className="admin-section">
        <div className="admin-section-title">Activity Log</div>
        <ul className="admin-activity-list">
          <li>New user registered</li>
          <li>Course approved</li>
          <li>Course deleted</li>
          <li>Assignment uploaded</li>
        </ul>
      </div>
    </div>
  );
}
