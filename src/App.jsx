import { useState } from 'react'
import { LMSProvider } from './context/LMSContext'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import AdminLoginPage from './pages/AdminLoginPage'
import TutorPage from './pages/TutorPage'
import StudentPage from './pages/StudentPage'
import MonitoringPage from './pages/MonitoringPage'
import CoursesPage from './pages/CoursesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'
import './styles/pages.css'
import './styles/navigation.css'
import './styles/landing.css'

import LoginPage from './pages/LoginPage'
import TutorLoginPage from './pages/TutorLoginPage'
import RegisterPage from './pages/RegisterPage'
import './styles/tutor-login.css'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'courses':
        return <CoursesPage />
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />
      case 'contact':
        return <ContactPage />
      case 'admin':
        return <AdminPage />
      case 'tutor':
        return <TutorPage />
      case 'student':
        return <StudentPage />
      case 'monitoring':
        return <MonitoringPage />
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />
      case 'student-login':
        return <StudentPage setCurrentPage={setCurrentPage} />
      case 'tutor-login':
        return <TutorLoginPage setCurrentPage={setCurrentPage} />
      case 'admin-login':
        return <AdminLoginPage setCurrentPage={setCurrentPage} />
      case 'register':
        return <RegisterPage setCurrentPage={setCurrentPage} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app-container">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="app-footer">
        <p>🔒 Secure Learning Management System with Temporary Access Codes</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LMSProvider>
      <AppContent />
    </LMSProvider>
  )
}

export default App
