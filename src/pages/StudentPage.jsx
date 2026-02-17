import React, { useState } from 'react'
import { useLMS } from '../context/LMSContext'
import CodeValidator from '../services/CodeValidator'
import '../styles/pages.css'

export default function StudentPage() {
  const { createStudentSession, sessions, courses } = useLMS()
  const [accessCode, setAccessCode] = useState('')
  const [studentName, setStudentName] = useState('')
  const [currentSession, setCurrentSession] = useState(null)
  const [error, setError] = useState('')

  const handleAccessCode = (e) => {
    e.preventDefault()
    setError('')

    if (!accessCode || !studentName) {
      setError('Please enter both name and access code')
      return
    }

    const result = createStudentSession(accessCode, studentName)

    if (!result.valid) {
      setError(result.message)
      return
    }

    setCurrentSession(result.session)
    setAccessCode('')
    setStudentName('')
  }

  if (currentSession) {
    const course = courses.find(c => c.id === currentSession.course_id)
    return (
      <div className="page-container">
        {/* Welcome Header Section */}
        <div className="student-welcome-header">
          <div className="student-welcome-left">
            <div className="student-avatar">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Profile" />
            </div>
            <div>
              <div className="student-welcome-greeting">Good Evening, Sowmiya <span role="img" aria-label="wave">👋</span></div>
              <div className="student-welcome-date">{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div className="student-welcome-motivation">Keep learning, you're doing great!</div>
            </div>
          </div>
          <div className="student-welcome-right">
            <span className="student-bell" title="Notifications">🔔</span>
          </div>
        </div>

        {/* Dashboard Stats Cards */}
        <div className="student-stats-grid">
          <div className="student-stat-card stat-courses">
            <div className="stat-icon">📚</div>
            <div className="stat-value">3</div>
            <div className="stat-label">Enrolled Courses</div>
          </div>
          <div className="student-stat-card stat-assignments">
            <div className="stat-icon">📝</div>
            <div className="stat-value">2</div>
            <div className="stat-label">Pending Assignments</div>
          </div>
          <div className="student-stat-card stat-progress">
            <div className="stat-icon">📊</div>
            <div className="stat-value">75%</div>
            <div className="stat-label">Progress</div>
          </div>
          <div className="student-stat-card stat-certificates">
            <div className="stat-icon">🏆</div>
            <div className="stat-value">1</div>
            <div className="stat-label">Certificates Earned</div>
          </div>
        </div>

        {/* My Courses Section */}
        <div className="student-courses-section">
          <h2 className="student-section-title">My Courses</h2>
          <div className="student-courses-grid">
            {[{
              image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
              title: 'React Basics',
              tutor: 'John Doe',
              progress: 75
            }, {
              image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
              title: 'Web Development',
              tutor: 'Jane Smith',
              progress: 40
            }, {
              image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
              title: 'Data Science',
              tutor: 'Emily Clark',
              progress: 90
            }].map((course, idx) => (
              <div className="student-course-card" key={idx}>
                <img src={course.image} alt={course.title} className="student-course-img" />
                <div className="student-course-info">
                  <h3>{course.title}</h3>
                  <p className="student-course-tutor">By {course.tutor}</p>
                  <div className="student-course-progress-bar">
                    <div className="student-course-progress" style={{ width: `${course.progress}%` }} />
                  </div>
                  <div className="student-course-progress-label">{course.progress}% Complete</div>
                  <button className="student-course-continue">Continue</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Login card for students (when not logged in)
  return (
    <div className="student-login-card" style={{ boxShadow: '0 4px 32px 0 rgba(80,80,120,0.10)', background: '#fff', borderRadius: 18, maxWidth: 480, margin: '48px auto', padding: '2.5rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 36, marginBottom: 4 }}>🎓</span>
        <h1 style={{ fontWeight: 700, fontSize: '2rem', margin: 0, color: '#22223b' }}>Student Login</h1>
      </div>
      <div style={{ color: '#6c6f7a', fontSize: '1.08rem', marginBottom: 24, textAlign: 'center' }}>
        Enter your details and access code to join your course
      </div>
      <form className="student-login-form" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={handleAccessCode}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <label htmlFor="student-name" style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem', marginBottom: '0.1rem' }}>Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="Enter your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            style={{ padding: '0.85rem', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: '1rem', fontFamily: 'inherit', background: '#fafaff', boxShadow: '0 1px 4px 0 rgba(80,80,120,0.04)' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <label htmlFor="student-email" style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem', marginBottom: '0.1rem' }}>Email</label>
          <input
            id="student-email"
            type="email"
            placeholder="Enter your email"
            required
            style={{ padding: '0.85rem', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: '1rem', fontFamily: 'inherit', background: '#fafaff', boxShadow: '0 1px 4px 0 rgba(80,80,120,0.04)' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <label htmlFor="student-password" style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem', marginBottom: '0.1rem' }}>Password</label>
          <input
            id="student-password"
            type="password"
            placeholder="Enter your password"
            required
            style={{ padding: '0.85rem', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: '1rem', fontFamily: 'inherit', background: '#fafaff', boxShadow: '0 1px 4px 0 rgba(80,80,120,0.04)' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
          <label htmlFor="student-access-code" style={{ fontWeight: 600, color: '#22223b', fontSize: '1rem', marginBottom: '0.1rem' }}>Access Code</label>
          <input
            id="student-access-code"
            type="text"
            placeholder="Access Code (e.g., REACT101)"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
            required
            style={{ padding: '0.85rem', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: '1rem', fontFamily: 'inherit', background: '#fafaff', boxShadow: '0 1px 4px 0 rgba(80,80,120,0.04)' }}
          />
        </div>
        {error && <div className="error-message" style={{ color: '#dc2626', background: '#fee2e2', borderLeft: '4px solid #ef4444', borderRadius: 6, padding: '0.7rem 1rem', marginTop: '0.5rem', fontSize: '0.98rem' }}>{error}</div>}
        <button type="submit" style={{ marginTop: '0.5rem', marginBottom: '0.2rem', letterSpacing: '0.01em', boxShadow: '0 2px 8px 0 rgba(80,80,120,0.12)', padding: '1rem', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '1.18rem', cursor: 'pointer', transition: 'none' }}>Login & Access Course</button>
      </form>
      {sessions.length > 0 && (
        <div className="list-section" style={{ width: '100%', marginTop: '2rem' }}>
          <h2>Active Sessions</h2>
          <ul className="list">
            {sessions.map(session => {
              const course = courses.find(c => c.id === session.course_id)
              return (
                <li key={session.id} className="list-item">
                  <span className="name">{session.student_name}</span>
                  <span className="email text-sm">{course?.title}</span>
                  <span className="status active">Active</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
