
import React, { useState } from 'react'
import { useLMS } from '../context/LMSContext'
import '../styles/pages.css'
import '../styles/tutor-login.css'

export default function TutorLoginPage({ onLoginSuccess }) {
  const { tutors, courses } = useLMS()
  const [selectedTutorId, setSelectedTutorId] = useState('')
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [error, setError] = useState('')

  // Get courses available for selected tutor
  const availableCourses = selectedTutorId
    ? courses.filter(c => c.tutor_id === parseInt(selectedTutorId))
    : []

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!selectedTutorId || !selectedCourseId) {
      setError('Please select both tutor account and course')
      return
    }

    const tutor = tutors.find(t => t.id === parseInt(selectedTutorId))
    const course = courses.find(c => c.id === parseInt(selectedCourseId))

    if (tutor && course) {
      onLoginSuccess({
        tutorId: parseInt(selectedTutorId),
        tutorName: tutor.name,
        tutorEmail: tutor.email,
        courseId: parseInt(selectedCourseId),
        courseName: course.title
      })
    }
  }

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-card">
          <h1>👨‍🏫 Tutor Login</h1>
          <p className="login-subtitle">Select your account and preferred course</p>

          <form onSubmit={handleLogin} className="login-form">
            {/* Tutor Selection */}
            <div className="form-group">
              <label htmlFor="tutor-select">Select Your Account</label>
              <select
                id="tutor-select"
                value={selectedTutorId}
                onChange={(e) => {
                  setSelectedTutorId(e.target.value)
                  setSelectedCourseId('') // Reset course selection
                  setError('')
                }}
                required
              >
                <option value="">-- Choose Your Account --</option>
                {tutors.map(tutor => (
                  <option key={tutor.id} value={tutor.id}>
                    {tutor.name} ({tutor.email})
                  </option>
                ))}
              </select>
            </div>
            {/* Email and Password fields */}
            <div className="form-group">
              <label htmlFor="tutor-email">Email</label>
              <input
                id="tutor-email"
                className="styled-input"
                type="email"
                placeholder="Enter your email"
                autoComplete="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutor-password">Password</label>
              <input
                id="tutor-password"
                className="styled-input"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            {/* Course Selection */}
            {selectedTutorId && (
              <div className="form-group">
                <label htmlFor="course-select">Select Course to Teach</label>
                {availableCourses.length > 0 ? (
                  <select
                    id="course-select"
                    value={selectedCourseId}
                    onChange={(e) => {
                      setSelectedCourseId(e.target.value)
                      setError('')
                    }}
                    required
                  >
                    <option value="">-- Choose Your Course --</option>
                    {availableCourses.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="no-courses-message">
                    <p>❌ No courses assigned to this tutor</p>
                  </div>
                )}
              </div>
            )}

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className="login-button"
              // Always enabled for visibility
            >
              Login & Start Teaching
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
