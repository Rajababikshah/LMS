import React from 'react';
import './AboutPage.css';

export default function AboutPage({ setCurrentPage }) {
  const handleGetStarted = () => {
    if (setCurrentPage) setCurrentPage('register');
  };
  const handleViewCourses = () => {
    if (setCurrentPage) setCurrentPage('courses');
  };
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-card">
        <div className="about-hero-card-content">
          <h1 className="about-hero-card-title">About Our LMS</h1>
          <p className="about-hero-card-subtitle">
            Empowering learners and educators with a modern, intuitive, and robust Learning Management System.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="about-mission">
          <h2>🎯 Mission</h2>
          <ul>
            <li>Accessible online education globally</li>
            <li>Simplify digital course management</li>
            <li>Support skill development interactively</li>
            <li>Flexible learning anytime, anywhere</li>
          </ul>
        </div>
        <div className="about-vision">
          <h2>🌍 Vision</h2>
          <ul>
            <li>Trusted digital education platform</li>
            <li>AI-powered learning tools</li>
            <li>Secure, scalable LMS ecosystem</li>
            <li>Innovation in online education</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-choose">
        <h2>Why Choose Us?</h2>
        <div className="about-why-grid">
          <div className="about-why-card"><span role="img" aria-label="interface">🖥️</span> User-friendly modern interface</div>
          <div className="about-why-card"><span role="img" aria-label="security">🔒</span> Secure authentication & data protection</div>
          <div className="about-why-card"><span role="img" aria-label="progress">📈</span> Real-time progress tracking</div>
          <div className="about-why-card"><span role="img" aria-label="quiz">📝</span> Interactive quizzes & assignments</div>
          <div className="about-why-card"><span role="img" aria-label="dashboard">📊</span> Role-based dashboards</div>
          <div className="about-why-card"><span role="img" aria-label="cloud">☁️</span> Scalable cloud-ready architecture</div>
        </div>
      </section>

      {/* Features Highlights Section */}
      <section className="about-features">
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 800,
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%'
        }}>
          <span role="img" aria-label="sparkles" style={{fontSize:'2rem'}}>✨</span> Features
        </h2>
        <div className="about-features-grid">
          <div className="about-feature-card">
            <span>📚</span>
            <h3>Smart Course Management</h3>
            <p>Create, manage, and update courses easily.</p>
          </div>
          <div className="about-feature-card">
            <span>📊</span>
            <h3>Performance Analytics</h3>
            <p>Track student progress with visual insights.</p>
          </div>
          <div className="about-feature-card">
            <span>📝</span>
            <h3>Assignment & Quiz Module</h3>
            <p>Conduct assessments efficiently.</p>
          </div>
          <div className="about-feature-card">
            <span>🔐</span>
            <h3>Secure Login System</h3>
            <p>Role-based authentication with protection.</p>
          </div>
          <div className="about-feature-card">
            <span>📱</span>
            <h3>Responsive Design</h3>
            <p>Accessible across all devices.</p>
          </div>
          <div className="about-feature-card">
            <span>🤖</span>
            <h3>AI Integration</h3>
            <p>Personalized course recommendations.</p>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="about-cta">
        <h2>Ready to start your learning journey?</h2>
        <p>Join thousands of learners today.<br/>Unlock your potential with Smart LMS.</p>
        <div className="about-cta-buttons">
          <button className="about-btn about-btn-dark" onClick={handleGetStarted}>Get Started</button>
          <button className="about-btn about-btn-secondary" onClick={handleViewCourses}>View Courses</button>
        </div>
      </section>
    </div>
  );
}
