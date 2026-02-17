import React, { createContext, useState, useContext } from 'react'

const LMSContext = createContext()

export const LMSProvider = ({ children }) => {
  // Admin & Users
  const [admins, setAdmins] = useState([
    { id: 1, email: 'admin@lms.com', name: 'System Admin', role: 'admin' }
  ])

  const [tutors, setTutors] = useState([
    { id: 1, email: 'tutor@lms.com', name: 'John Doe', role: 'tutor' }
  ])

  // Courses
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'React Basics',
      tutor_id: 1,
      description: 'Learn React fundamentals',
      content: [
        { type: 'video', title: 'Introduction to React', url: '#' },
        { type: 'notes', title: 'React Concepts', url: '#' },
        { type: 'quiz', title: 'Module 1 Quiz', url: '#' }
      ]
    }
  ])

  // Access Codes
  const [accessCodes, setAccessCodes] = useState([
    {
      id: 1,
      code: 'REACT101',
      course_id: 1,
      tutor_id: 1,
      validity_type: 'time', // 'time' or 'user_count'
      validity_value: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      user_limit: null,
      users_accessed: 0,
      created_at: new Date(),
      status: 'active' // 'active' or 'expired' or 'revoked'
    }
  ])

  // Active Sessions (temporary student access)
  const [sessions, setSessions] = useState([])

  // Admin Methods
  const createTutorAccount = (email, name) => {
    const newTutor = {
      id: tutors.length + 1,
      email,
      name,
      role: 'tutor'
    }
    setTutors([...tutors, newTutor])
    return newTutor
  }

  const addCourse = (title, description, tutor_id, content = []) => {
    const newCourse = {
      id: courses.length + 1,
      title,
      tutor_id,
      description,
      content
    }
    setCourses([...courses, newCourse])
    return newCourse
  }

  // Tutor Methods
  const generateAccessCode = (course_id, tutor_id, validity_type, validity_value, user_limit = null) => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    const newCode = {
      id: accessCodes.length + 1,
      code,
      course_id,
      tutor_id,
      validity_type,
      validity_value: validity_type === 'time' ? new Date(validity_value) : validity_value,
      user_limit: validity_type === 'user_count' ? user_limit : null,
      users_accessed: 0,
      created_at: new Date(),
      status: 'active'
    }
    setAccessCodes([...accessCodes, newCode])
    return newCode
  }

  const uploadCourseContent = (course_id, content) => {
    setCourses(courses.map(course =>
      course.id === course_id ? { ...course, content: [...course.content, content] } : course
    ))
  }

  // Student Methods
  const validateAccessCode = (code) => {
    const accessCode = accessCodes.find(ac => ac.code === code)

    if (!accessCode) return { valid: false, message: 'Code not found' }
    if (accessCode.status === 'expired') return { valid: false, message: 'Code has expired' }
    if (accessCode.status === 'revoked') return { valid: false, message: 'Code has been revoked' }

    // Check time validity
    if (accessCode.validity_type === 'time' && new Date() > new Date(accessCode.validity_value)) {
      setAccessCodes(accessCodes.map(ac =>
        ac.id === accessCode.id ? { ...ac, status: 'expired' } : ac
      ))
      return { valid: false, message: 'Code has expired' }
    }

    // Check user count validity
    if (accessCode.validity_type === 'user_count' && accessCode.users_accessed >= accessCode.user_limit) {
      return { valid: false, message: 'Code usage limit reached' }
    }

    return { valid: true, accessCode }
  }

  const createStudentSession = (code, student_name) => {
    const validation = validateAccessCode(code)
    if (!validation.valid) return validation

    const accessCode = validation.accessCode
    const course = courses.find(c => c.id === accessCode.course_id)

    const session = {
      id: sessions.length + 1,
      student_name,
      code,
      course_id: accessCode.course_id,
      course_title: course?.title,
      access_time: new Date(),
      expires_at: accessCode.validity_type === 'time' ? new Date(accessCode.validity_value) : null,
      progress: []
    }

    // Update access code user count
    setAccessCodes(accessCodes.map(ac =>
      ac.id === accessCode.id ? { ...ac, users_accessed: ac.users_accessed + 1 } : ac
    ))

    setSessions([...sessions, session])
    return { valid: true, session }
  }

  // Course Learning
  const trackProgress = (session_id, content_id, progress_data) => {
    setSessions(sessions.map(session =>
      session.id === session_id
        ? { ...session, progress: [...session.progress, { content_id, ...progress_data }] }
        : session
    ))
  }

  // Management Methods
  const revokeAccessCode = (code_id) => {
    setAccessCodes(accessCodes.map(ac =>
      ac.id === code_id ? { ...ac, status: 'revoked' } : ac
    ))
  }

  const regenerateAccessCode = (code_id, validity_type, validity_value) => {
    const oldCode = accessCodes.find(ac => ac.id === code_id)
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase()

    setAccessCodes(accessCodes.map(ac =>
      ac.id === code_id
        ? {
          ...ac,
          code: newCode,
          validity_type,
          validity_value: validity_type === 'time' ? new Date(validity_value) : validity_value,
          user_limit: validity_type === 'user_count' ? validity_value : null,
          status: 'active'
        }
        : ac
    ))

    return newCode
  }

  const getActivityStats = () => {
    return {
      total_codes: accessCodes.length,
      active_codes: accessCodes.filter(ac => ac.status === 'active').length,
      total_access: sessions.length,
      tutors_count: tutors.length,
      courses_count: courses.length
    }
  }

  const value = {
    // State
    admins,
    tutors,
    courses,
    accessCodes,
    sessions,
    // Admin Methods
    createTutorAccount,
    addCourse,
    // Tutor Methods
    generateAccessCode,
    uploadCourseContent,
    // Student Methods
    validateAccessCode,
    createStudentSession,
    // Learning Methods
    trackProgress,
    // Management Methods
    revokeAccessCode,
    regenerateAccessCode,
    getActivityStats
  }

  return <LMSContext.Provider value={value}>{children}</LMSContext.Provider>
}

export const useLMS = () => {
  const context = useContext(LMSContext)
  if (!context) {
    throw new Error('useLMS must be used within LMSProvider')
  }
  return context
}
