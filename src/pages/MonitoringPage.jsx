import React from 'react'
import { useLMS } from '../context/LMSContext'
import '../styles/pages.css'

export default function MonitoringPage() {
    console.log('MonitoringPage loaded:', { accessCodes, sessions, tutors, courses, stats });
  const { accessCodes, sessions, tutors, courses, getActivityStats } = useLMS()
  const stats = getActivityStats()

  const activeAccessCodes = accessCodes.filter(ac => ac.status === 'active')
  const expiredCodes = accessCodes.filter(ac => ac.status === 'expired')
  const revokedCodes = accessCodes.filter(ac => ac.status === 'revoked')

  return (
    <div className="page-container">
      <h1>📊 System Monitoring & Analytics</h1>

      {/* Overall Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.tutors_count}</h3>
          <p>Tutors</p>
        </div>
        <div className="stat-card">
          <h3>{stats.courses_count}</h3>
          <p>Courses</p>
        </div>
        <div className="stat-card">
          <h3>{stats.active_codes}</h3>
          <p>Active Codes</p>
        </div>
        <div className="stat-card">
          <h3>{stats.total_access}</h3>
          <p>Student Sessions</p>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="analytics-grid">
        {/* Access Code Status */}
        <div className="analytics-card">
          <h2>Access Code Status</h2>
          <div className="status-breakdown">
            <div className="status-item active">
              <span className="count">{activeAccessCodes.length}</span>
              <span className="label">Active</span>
            </div>
            <div className="status-item expired">
              <span className="count">{expiredCodes.length}</span>
              <span className="label">Expired</span>
            </div>
            <div className="status-item revoked">
              <span className="count">{revokedCodes.length}</span>
              <span className="label">Revoked</span>
            </div>
          </div>
        </div>

        {/* Activity by Tutor */}
        <div className="analytics-card">
          <h2>Tutor Activity</h2>
          <ul className="activity-list">
            {tutors.map(tutor => {
              const tutorCodes = accessCodes.filter(ac => ac.tutor_id === tutor.id)
              const tutorSessions = sessions.filter(s => {
                const course = courses.find(c => c.id === s.course_id)
                const courseOwner = courses.find(co => co.id === course?.id)?.tutor_id
                return courseOwner === tutor.id
              })
              return (
                <li key={tutor.id} className="activity-item">
                  <span className="name">{tutor.name}</span>
                  <span className="detail">{tutorCodes.length} codes • {tutorSessions.length} accesses</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Course Access Distribution */}
        <div className="analytics-card">
          <h2>Course Access Distribution</h2>
          <ul className="activity-list">
            {courses.map(course => {
              const courseAccess = sessions.filter(s => s.course_id === course.id)
              return (
                <li key={course.id} className="activity-item">
                  <span className="name">{course.title}</span>
                  <span className="detail">{courseAccess.length} student accesses</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* All Access Codes Overview */}
        <div className="analytics-card full-width">
          <h2>All Access Codes</h2>
          <table className="codes-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Course</th>
                <th>Validity</th>
                <th>Users Accessed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {accessCodes.map(code => {
                const course = courses.find(c => c.id === code.course_id)
                return (
                  <tr key={code.id}>
                    <td><code>{code.code}</code></td>
                    <td>{course?.title}</td>
                    <td>
                      {code.validity_type === 'time'
                        ? new Date(code.validity_value).toLocaleDateString()
                        : `${code.user_limit} users`}
                    </td>
                    <td>{code.users_accessed}</td>
                    <td><span className={`status-badge ${code.status}`}>{code.status}</span></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
