
import React, { useState } from 'react';
import '../styles/navigation.css';


// role: null = public, 'student', 'tutor', 'admin'
export default function Navigation({ currentPage, setCurrentPage, userRole, onLogout }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Public Navbar
  if (!userRole) {
    return (
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>LMS Portal</h1>
          </div>
          <button className="nav-hamburger" onClick={() => setMobileOpen(v => !v)}>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
          </button>
          <ul className={`nav-links nav-center${mobileOpen ? ' nav-mobile-open' : ''}`}>
            <li><button className={`nav-link${currentPage === 'home' ? ' active' : ''}`} onClick={() => { setCurrentPage('home'); setMobileOpen(false); }}>Home</button></li>
            <li><button className={`nav-link${currentPage === 'about' ? ' active' : ''}`} onClick={() => { setCurrentPage('about'); setMobileOpen(false); }}>About</button></li>
            <li><button className={`nav-link${currentPage === 'courses' ? ' active' : ''}`} onClick={() => { setCurrentPage('courses'); setMobileOpen(false); }}>Courses</button></li>          
            <li><button className={`nav-link${currentPage === 'contact' ? ' active' : ''}`} onClick={() => { setCurrentPage('contact'); setMobileOpen(false); }}>Contact</button></li>
          </ul>
          <ul className={`nav-links nav-right${mobileOpen ? ' nav-mobile-open' : ''}`}>
            <li style={{ position: 'relative' }}>
              <button
                className="nav-link"
                onClick={() => setProfileOpen(v => !v)}
                aria-haspopup="true"
                aria-expanded={profileOpen}
              >
                Login ▾
              </button>
              {profileOpen && (
                <div className="login-dropdown" style={{ position: 'absolute', right: 0, top: '100%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', zIndex: 1000, minWidth: '160px', borderRadius: '4px', overflow: 'hidden' }}>
                  <button className="dropdown-item" style={{ width: '100%', padding: '0.75rem 1rem', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }} onClick={() => { setCurrentPage('student'); setProfileOpen(false); setMobileOpen(false); }}>Student Login</button>
                  <button className="dropdown-item" style={{ width: '100%', padding: '0.75rem 1rem', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }} onClick={() => { setCurrentPage('tutor'); setProfileOpen(false); setMobileOpen(false); }}>Tutor Login</button>
                  <button className="dropdown-item" style={{ width: '100%', padding: '0.75rem 1rem', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }} onClick={() => { setCurrentPage('admin-login'); setProfileOpen(false); setMobileOpen(false); }}>Admin Login</button>
                </div>
              )}
            </li>
            <li><button className="nav-link" onClick={() => { setCurrentPage('register'); setMobileOpen(false); }}>Register</button></li>
          </ul>
        </div>
        {mobileOpen && <div className="nav-mobile-overlay" onClick={() => setMobileOpen(false)}></div>}
      </nav>
    );
  }

  // Student Navbar
  if (userRole === 'student') {
    return (
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand"><h1>LMS Portal</h1></div>
          <button className="nav-hamburger" onClick={() => setMobileOpen(v => !v)}>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
          </button>
          <ul className={`nav-links nav-center${mobileOpen ? ' nav-mobile-open' : ''}`}>
            <li><button className={`nav-link${currentPage === 'home' ? ' active' : ''}`} onClick={() => { setCurrentPage('home'); setMobileOpen(false); }}>Home</button></li>
            <li><button className={`nav-link${currentPage === 'my-courses' ? ' active' : ''}`} onClick={() => { setCurrentPage('my-courses'); setMobileOpen(false); }}>My Courses</button></li>
            <li><button className={`nav-link${currentPage === 'assignments' ? ' active' : ''}`} onClick={() => { setCurrentPage('assignments'); setMobileOpen(false); }}>Assignments</button></li>
            <li><button className={`nav-link${currentPage === 'progress' ? ' active' : ''}`} onClick={() => { setCurrentPage('progress'); setMobileOpen(false); }}>Progress</button></li>
            <li><button className={`nav-link${currentPage === 'certificate' ? ' active' : ''}`} onClick={() => { setCurrentPage('certificate'); setMobileOpen(false); }}>Certificate</button></li>
          </ul>
          <div className="nav-profile">
            <button className="nav-link nav-profile-btn" onClick={() => setProfileOpen(v => !v)}>
              Profile ▾
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <button onClick={() => { setCurrentPage('profile'); setProfileOpen(false); setMobileOpen(false); }}>My Profile</button>
                <button onClick={() => { setCurrentPage('settings'); setProfileOpen(false); setMobileOpen(false); }}>Settings</button>
                <button onClick={() => { onLogout(); setMobileOpen(false); }}>Logout</button>
              </div>
            )}
          </div>
        </div>
        {mobileOpen && <div className="nav-mobile-overlay" onClick={() => setMobileOpen(false)}></div>}
      </nav>
    );
  }

  // Tutor Navbar
  if (userRole === 'tutor') {
    return (
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand"><h1>LMS Portal</h1></div>
          <button className="nav-hamburger" onClick={() => setMobileOpen(v => !v)}>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
          </button>
          <ul className={`nav-links nav-center${mobileOpen ? ' nav-mobile-open' : ''}`}>
            <li><button className={`nav-link${currentPage === 'dashboard' ? ' active' : ''}`} onClick={() => { setCurrentPage('admin-login'); setMobileOpen(false); }}>Admin Dashboard</button></li>
            <li><button className={`nav-link${currentPage === 'my-courses' ? ' active' : ''}`} onClick={() => { setCurrentPage('my-courses'); setMobileOpen(false); }}>My Courses</button></li>
            <li><button className={`nav-link${currentPage === 'upload' ? ' active' : ''}`} onClick={() => { setCurrentPage('upload'); setMobileOpen(false); }}>Upload Content</button></li>
            <li><button className={`nav-link${currentPage === 'students' ? ' active' : ''}`} onClick={() => { setCurrentPage('students'); setMobileOpen(false); }}>Students</button></li>
            <li><button className={`nav-link${currentPage === 'reports' ? ' active' : ''}`} onClick={() => { setCurrentPage('reports'); setMobileOpen(false); }}>Reports</button></li>
          </ul>
          <div className="nav-profile">
            <button className="nav-link nav-profile-btn" onClick={() => setProfileOpen(v => !v)}>
              Profile ▾
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <button onClick={() => { setCurrentPage('profile'); setProfileOpen(false); setMobileOpen(false); }}>My Profile</button>
                <button onClick={() => { onLogout(); setMobileOpen(false); }}>Logout</button>
              </div>
            )}
          </div>
        </div>
        {mobileOpen && <div className="nav-mobile-overlay" onClick={() => setMobileOpen(false)}></div>}
      </nav>
    );
  }

  // Admin Navbar
  if (userRole === 'admin') {
    return (
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-brand"><h1>LMS Portal</h1></div>
          <button className="nav-hamburger" onClick={() => setMobileOpen(v => !v)}>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
            <span className="nav-hamburger-bar"></span>
          </button>
          <ul className={`nav-links nav-center${mobileOpen ? ' nav-mobile-open' : ''}`}>
            <li><button className={`nav-link${currentPage === 'dashboard' ? ' active' : ''}`} onClick={() => { setCurrentPage('dashboard'); setMobileOpen(false); }}>Dashboard</button></li>
            <li><button className={`nav-link${currentPage === 'manage-users' ? ' active' : ''}`} onClick={() => { setCurrentPage('manage-users'); setMobileOpen(false); }}>Manage Users</button></li>
            <li><button className={`nav-link${currentPage === 'manage-courses' ? ' active' : ''}`} onClick={() => { setCurrentPage('manage-courses'); setMobileOpen(false); }}>Manage Courses</button></li>
            <li><button className={`nav-link${currentPage === 'reports' ? ' active' : ''}`} onClick={() => { setCurrentPage('reports'); setMobileOpen(false); }}>Reports</button></li>
            <li><button className={`nav-link${currentPage === 'settings' ? ' active' : ''}`} onClick={() => { setCurrentPage('settings'); setMobileOpen(false); }}>Settings</button></li>
          </ul>
          <div className="nav-profile">
            <button className="nav-link nav-profile-btn" onClick={() => setProfileOpen(v => !v)}>
              Profile ▾
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <button onClick={() => { setCurrentPage('admin-profile'); setProfileOpen(false); setMobileOpen(false); }}>Admin Profile</button>
                <button onClick={() => { onLogout(); setMobileOpen(false); }}>Logout</button>
              </div>
            )}
          </div>
        </div>
        {mobileOpen && <div className="nav-mobile-overlay" onClick={() => setMobileOpen(false)}></div>}
      </nav>
    );
  }

  return null;
}