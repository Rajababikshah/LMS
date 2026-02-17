import React from 'react'
import '../styles/landing.css'

export default function HomePage({ setCurrentPage }) {
  const features = [
    {
      icon: '📝',
      title: 'Online Course Enrollment',
      description: 'Easily enroll in courses from anywhere, anytime.'
    },
    {
      icon: '🎥',
      title: 'Video Lectures',
      description: 'Access high-quality video lectures for every course.'
    },
    {
      icon: '📂',
      title: 'Assignment Submission',
      description: 'Submit assignments online and get instant feedback.'
    },
    {
      icon: '❓',
      title: 'Quiz & Evaluation',
      description: 'Take quizzes and get evaluated in real-time.'
    },
    {
      icon: '📈',
      title: 'Progress Tracking',
      description: 'Track your learning progress and achievements.'
    },
    {
      icon: '🏅',
      title: 'Certification',
      description: 'Earn certificates upon course completion.'
    }
  ]

  const workflows = [
    {
      step: 1,
      title: 'Register & Login',
      description: 'Create your account and log in to the platform.'
    },
    {
      step: 2,
      title: 'Enroll in Courses',
      description: 'Browse and enroll in your favorite courses.'
    },
    {
      step: 3,
      title: 'Learn & Get Certified',
      description: 'Complete lessons, assignments, and earn certificates.'
    }
  ]

  const userTypes = [
    {
      icon: '👨‍💼',
      title: 'Admin',
      description: 'System management and monitoring',
      color: '#3b82f6',
      action: () => setCurrentPage('admin')
    },
    {
      icon: '👨‍🏫',
      title: 'Tutor',
      description: 'Create courses and manage access codes',
      color: '#723fe8',
      action: () => setCurrentPage('tutor')
    },
    {
      icon: '🎓',
      title: 'Student',
      description: 'Access courses with temporary codes',
      color: '#10b981',
      action: () => setCurrentPage('student')
    }
  ]

  const popularCourses = [
    {
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
      title: 'Introduction to Python',
      tutor: 'Jane Doe'
    },
    {
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      title: 'Web Development Basics',
      tutor: 'John Smith'
    },
    {
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
      title: 'Data Science 101',
      tutor: 'Emily Clark'
    }
  ];

  return (
    <div className="landing-page">
      <div className="navbar-spacer"></div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="hero-title gradient-text" style={{ fontWeight: 900, fontSize: '3.8rem', letterSpacing: '-2px', marginBottom: '0.5rem', lineHeight: 1.1 }}>
              Learn Anytime,<br />
              Anywhere with <span className="gradient-text">Smart LMS</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.45rem', fontWeight: 600, color: '#e0e7ff', marginBottom: '1.2rem', opacity: 1, textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
              Empowering students and tutors through modern digital learning.
            </p>
            <p className="hero-description" style={{ fontSize: '1.15rem', color: '#d1d5db', marginBottom: '2.2rem', maxWidth: 520, opacity: 1, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              Unlock your potential with a seamless, secure, and flexible learning platform.<br />
              Whether you are a student, tutor, or admin, Smart LMS provides the tools you need to succeed in today’s digital education landscape.
            </p>
            <div className="hero-cta" style={{ marginTop: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <button className="cta-primary hero-btn-glow" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem', marginRight: '0.5rem', boxShadow: '0 4px 24px 0 rgba(80,80,255,0.18)' }} onClick={() => setCurrentPage('courses')}>
                🎓 Explore Courses
              </button>
              <button className="cta-secondary hero-btn-outline" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem', border: '2px solid #fff', color: '#fff', background: 'transparent' }} onClick={() => setCurrentPage('register')}>
                🚀 Get Started
              </button>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div style={{ position: 'absolute', left: -80, top: -60, zIndex: 1, width: 320, height: 320, background: 'radial-gradient(circle at 60% 40%, #fff3 0%, #0000 80%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: -120, bottom: -80, zIndex: 1, width: 260, height: 260, background: 'radial-gradient(circle at 40% 60%, #a5b4fc33 0%, #0000 80%)', borderRadius: '50%' }} />
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80" alt="LMS Illustration" className="hero-illustration" style={{ borderRadius: '18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', width: '100%', maxWidth: 400 }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="center-heading">Why Choose Our LMS?</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="center-heading">How It Works</h2>
        <div className="workflow-timeline">
          {workflows.map((flow) => (
            <div key={flow.step} className="timeline-item">
              <div className="timeline-number">{flow.step}</div>
              <div className="timeline-content">
                <h3>{flow.title}</h3>
                <p>{flow.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses">
        <h2 className="center-heading">Popular Courses</h2>
        <div className="courses-grid">
          {popularCourses.map((course, idx) => (
            <div key={idx} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p className="course-tutor">By {course.tutor}</p>
              <button className="enroll-btn">Enroll</button>
            </div>
          ))}
        </div>
      </section>
      


      {/* Statistics Section */}
      <section className="statistics-section">
        <h2 className="center-heading">Our Impact</h2><br></br>
        <div className="statistics-grid">
          <div className="stat-card">
            <div className="stat-number">1,200+</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Courses</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Tutors</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Completion Rate</div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <h2 className="center-heading">Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-number">✓</div>
            <h4>No Registration Required</h4>
            <p>Students access courses instantly with just an access code</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">✓</div>
            <h4>Complete Control</h4>
            <p>Admins have full visibility and control over all activities</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">✓</div>
            <h4>Flexible Access</h4>
            <p>Set time-based or user-count limitations on access codes</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">✓</div>
            <h4>Real-Time Analytics</h4>
            <p>Track student engagement and course access in real-time</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">✓</div>
            <h4>Secure System</h4>
            <p>Robust validation and monitoring for secure learning environment</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">✓</div>
            <h4>Easy Management</h4>
            <p>Intuitive interface for managing courses and access codes</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="center-heading">What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">“This LMS helped me learn efficiently.”</p>
            <div className="testimonial-author">— Alex, Student</div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">“The video lectures and quizzes made learning fun!”</p>
            <div className="testimonial-author">— Priya, Student</div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">“I loved tracking my progress and earning certificates.”</p>
            <div className="testimonial-author">— Sam, Student</div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta-section">
        <h2 className="center-heading">Ready to Start Learning?</h2>
        <button className="cta-join-btn" onClick={() => setCurrentPage('student')}>
          Join Now
        </button>
      </section>
    </div>
  )
}

