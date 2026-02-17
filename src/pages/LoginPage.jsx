

import React from 'react';

export default function LoginPage({ setCurrentPage }) {
  return (
      <section className="for-whom">
        <div className="for-whom-grid">
          <div className="login-card for-whom-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <span className="for-whom-icon" style={{ fontSize: '3.2rem' }}>👨‍🎓</span>
              <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>For Students</h3>
            </div>
            <ul>
              <li>Track progress</li>
              <li>Submit assignments</li>
              <li>Download certificates</li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <button className="for-whom-btn" onClick={() => setCurrentPage('student')}>Student Login</button>
            </div>
          </div>
          <div className="login-card for-whom-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <span className="for-whom-icon" style={{ fontSize: '3.2rem' }}>👩‍🏫</span>
              <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>For Tutors</h3>
            </div>
            <ul>
              <li>Upload materials</li>
              <li>Create quizzes</li>
              <li>Manage students</li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <button className="for-whom-btn" onClick={() => setCurrentPage('tutor')}>Tutor Login</button>
            </div>
          </div>
          <div className="login-card for-whom-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <span className="for-whom-icon" style={{ fontSize: '3.2rem' }}>🛠</span>
              <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>For Admin</h3>
            </div>
            <ul>
              <li>Monitor users</li>
              <li>Approve courses</li>
              <li>View analytics</li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <button className="for-whom-btn" onClick={() => setCurrentPage('admin-login')}>Admin Login</button>
            </div>
          </div>
        </div>
      </section>
  );
}