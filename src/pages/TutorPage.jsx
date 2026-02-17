import React, { useState } from 'react'
import { useLMS } from '../context/LMSContext'
import CodeValidator from '../services/CodeValidator'
import TutorLoginPage from './TutorLoginPage'
import '../styles/pages.css'
import '../styles/tutor-login.css'

export default function TutorPage() {
    // Course Material Upload
    const [materialType, setMaterialType] = useState('notes');
    const [materialTitle, setMaterialTitle] = useState('');
    const [materialUrl, setMaterialUrl] = useState('');
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const handleUploadMaterial = (e) => {
      e.preventDefault();
      if (!selectedCourseId || !materialTitle || !materialUrl) return;
      uploadCourseContent(
        parseInt(selectedCourseId),
        {
          type: materialType,
          title: materialTitle,
          url: materialUrl
        }
      );
      setMaterialTitle('');
      setMaterialUrl('');
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    } 
  const { courses, accessCodes, generateAccessCode, uploadCourseContent, revokeAccessCode, regenerateAccessCode, addCourse } = useLMS()
  const [tutorSession, setTutorSession] = useState(null)
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [validityType, setValidityType] = useState('time')
  const [validityValue, setValidityValue] = useState('')
  const [userLimit, setUserLimit] = useState('')
  const [generatedCode, setGeneratedCode] = useState(null)
  const [newCourseName, setNewCourseName] = useState('')
  const [newCourseDesc, setNewCourseDesc] = useState('')
  const [courseCreatedSuccess, setCourseCreatedSuccess] = useState(false)

  const handleLoginSuccess = (sessionData) => {
    setTutorSession(sessionData)
    setSelectedCourseId(sessionData.courseId.toString())
  }

  const handleLogout = () => {
    setTutorSession(null)
    setGeneratedCode(null)
    setValidityValue('')
    setUserLimit('')
  }

  // Show login page if not logged in
  if (!tutorSession) {
    return <TutorLoginPage onLoginSuccess={handleLoginSuccess} />
  }

  // Dashboard data
  const tutorCourses = courses.filter(c => c.tutor_id === tutorSession.tutorId);
  const tutorCodes = accessCodes.filter(ac => ac.tutor_id === tutorSession.tutorId);
  const selectedCourse = courses.find(c => c.id === parseInt(selectedCourseId));
  const totalStudents = 120; // Placeholder, replace with real data if available
  const pendingEvaluations = 7; // Placeholder
  const avgRating = 4.7; // Placeholder

  // --- Dashboard UI ---
  return (
    <div className="page-container tutor-dashboard">
      {/* Top Section: Welcome Header */}
      <div className="tutor-welcome-header">
        <div>
          <h2>Welcome back, {tutorSession.tutorName} 👋</h2>
          <div className="tutor-welcome-sub">
            You have <b>{totalStudents}</b> active students
          </div>
        </div>
        <div className="tutor-header-actions">
          <span className="tutor-bell">🔔</span>
          <div className="tutor-profile-dropdown">
            <span className="tutor-avatar">{tutorSession.tutorName[0]}</span>
            <div className="tutor-profile-menu">
              <div>{tutorSession.tutorName}</div>
              <div className="tutor-profile-email">{tutorSession.tutorEmail}</div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Statistics Cards */}
      <div className="tutor-stats-grid">
        <div className="tutor-stat-card">
          <span className="tutor-stat-icon">📚</span>
          <div className="tutor-stat-value">{tutorCourses.length}</div>
          <div className="tutor-stat-label">Total Courses</div>
        </div>
        <div className="tutor-stat-card">
          <span className="tutor-stat-icon">👨‍🎓</span>
          <div className="tutor-stat-value">{totalStudents}</div>
          <div className="tutor-stat-label">Total Students</div>
        </div>
        <div className="tutor-stat-card">
          <span className="tutor-stat-icon">📝</span>
          <div className="tutor-stat-value">{pendingEvaluations}</div>
          <div className="tutor-stat-label">Pending Evaluations</div>
        </div>
        <div className="tutor-stat-card">
          <span className="tutor-stat-icon">⭐</span>
          <div className="tutor-stat-value">{avgRating}</div>
          <div className="tutor-stat-label">Avg. Course Rating</div>
        </div>
      </div>

      {/* My Courses Section */}
      <div className="tutor-courses-section">
        <div className="tutor-section-title">My Courses</div>
        <div className="tutor-courses-grid">
          {tutorCourses.length > 0 ? tutorCourses.map(course => (
            <div className="tutor-course-card" key={course.id}>
              <img className="tutor-course-img" src={course.image || 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80'} alt={course.title} />
              <div className="tutor-course-info">
                <h3>{course.title}</h3>
                <div className="tutor-course-students">{course.students ? course.students.length : Math.floor(Math.random()*50+10)} students</div>
                <div className="tutor-course-actions">
                  <button className="tutor-btn tutor-btn-view">View</button>
                  <button className="tutor-btn tutor-btn-edit">Edit</button>
                  <button className="tutor-btn tutor-btn-delete">Delete</button>
                </div>
              </div>
            </div>
          )) : <div className="tutor-no-courses">No courses created yet.</div>}
        </div>
      </div>

      {/* Upload Content Section */}
      <div className="tutor-upload-section">
        <div className="tutor-section-title">Quick Actions</div>
        <div className="tutor-upload-actions">
          <button className="tutor-upload-btn">Upload Video</button>
          <button className="tutor-upload-btn">Upload PDF</button>
          <button className="tutor-upload-btn">Add Assignment</button>
          <button className="tutor-upload-btn">Create Quiz</button>
          <button className="tutor-upload-btn">Add Announcement</button>
        </div>
      </div>

      {/* Student Management Section */}
      <div className="tutor-student-mgmt-section">
        <div className="tutor-section-title">Student Management</div>
        <div className="tutor-student-table-wrap">
          <table className="tutor-student-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5].map(i => (
                <tr key={i}>
                  <td>Student {i}</td>
                  <td>{tutorCourses[i%tutorCourses.length]?.title || 'Course'}</td>
                  <td>
                    <div className="tutor-progress-bar">
                      <div className="tutor-progress" style={{width: `${60+i*7}%`}}></div>
                    </div>
                  </td>
                  <td>{['A','B','C','A','B'][i%5]}</td>
                  <td>
                    <button className="tutor-btn tutor-btn-view">View</button>
                    <button className="tutor-btn tutor-btn-grade">Grade</button>
                    <button className="tutor-btn tutor-btn-feedback">Send Feedback</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Analytics Section */}
      <div className="tutor-analytics-section">
        <div className="tutor-section-title">Performance Analytics</div>
        <div className="tutor-analytics-charts">
          <div className="tutor-bar-chart">
            <div className="tutor-bar-label">Enrollments</div>
            <div className="tutor-bar-track"><div className="tutor-bar" style={{width:'80%'}}></div></div>
          </div>
          <div className="tutor-bar-chart">
            <div className="tutor-bar-label">Completion Rate</div>
            <div className="tutor-bar-track"><div className="tutor-bar" style={{width:'65%'}}></div></div>
          </div>
          <div className="tutor-bar-chart">
            <div className="tutor-bar-label">Assignment Submissions</div>
            <div className="tutor-bar-track"><div className="tutor-bar" style={{width:'90%'}}></div></div>
          </div>
        </div>
      </div>

      {/* Notifications / Recent Activity */}
      <div className="tutor-notifications-section">
        <div className="tutor-section-title">Notifications / Recent Activity</div>
        <ul className="tutor-notifications-list">
          <li>5 students enrolled today</li>
          <li>Assignment submitted</li>
          <li>Quiz completed</li>
        </ul>
      </div>
    </div>
  );
}
