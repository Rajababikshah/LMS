import React, { useState } from 'react';
import '../pages/RegisterPage.css';

export default function RegisterPage({ setCurrentPage }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = 'Valid email required.';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match.';
    if (!form.terms) errs.terms = 'You must accept the terms.';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Registration logic here
      alert('Registered!');
    }
  };

  return (
    <div className="register-container">
      {/* Removed left illustration for login-like layout */}
      {/* Right Form */}
      <div className="register-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <form
          className={`register-card${animate ? ' animate' : ''}`}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
            <h2 className="register-title" style={{ textAlign: 'center', width: '100%' }}>Create your account</h2>
            <div style={{ marginBottom: '1rem' }}></div>
          {/* Social Login */}
          <div className="register-socials" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center', width: '100%' }}>
            <button type="button" className="register-social-btn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
              <span>Google</span>
            </button>
            <button type="button" className="register-social-btn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              <span>GitHub</span>
            </button>
          </div>
          <div className="relative mb-4" style={{ width: '100%' }}>
            <label htmlFor="name" style={{ fontWeight: 500, marginBottom: '0.3rem', display: 'block', color: '#6366f1' }}>Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full pl-10 pr-3 py-2 rounded-lg bg-white/60 focus:bg-white/90 border ${errors.name ? 'border-red-400' : 'border-white/40'} focus:border-indigo-400 outline-none transition shadow-sm`}
            />
            <span className="absolute left-3 top-8 text-indigo-400">
              <i className="fas fa-user"></i>
            </span>
            {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name}</span>}
          </div>
          <div style={{ marginBottom: '1rem' }}></div>
          <div className="relative mb-4" style={{ width: '100%' }}>
            <label htmlFor="email" style={{ fontWeight: 500, marginBottom: '0.3rem', display: 'block', color: '#6366f1' }}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full pl-10 pr-3 py-2 rounded-lg bg-white/60 focus:bg-white/90 border ${errors.email ? 'border-red-400' : 'border-white/40'} focus:border-indigo-400 outline-none transition shadow-sm`}
            />
            <span className="absolute left-3 top-8 text-indigo-400">
              <i className="fas fa-envelope"></i>
            </span>
            {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email}</span>}
          </div>
          <div style={{ marginBottom: '1rem' }}></div>
          <div className="relative mb-4" style={{ width: '100%' }}>
            <label htmlFor="password" style={{ fontWeight: 500, marginBottom: '0.3rem', display: 'block', color: '#6366f1' }}>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full pl-10 pr-10 py-2 rounded-lg bg-white/60 focus:bg-white/90 border ${errors.password ? 'border-red-400' : 'border-white/40'} focus:border-indigo-400 outline-none transition shadow-sm`}
            />
            <span className="absolute left-3 top-8 text-indigo-400">
              <i className="fas fa-lock"></i>
            </span>
            <span
              className="absolute right-3 top-8 text-indigo-400 cursor-pointer"
              onClick={() => setShowPassword(v => !v)}
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              <i className={`fas fa-eye${showPassword ? '' : '-slash'}`}></i>
            </span>
            {errors.password && <span className="text-xs text-red-500 ml-1">{errors.password}</span>}
          </div>
          <div style={{ marginBottom: '1rem' }}></div>
          <div className="relative mb-4" style={{ width: '100%' }}>
            <label htmlFor="confirmPassword" style={{ fontWeight: 500, marginBottom: '0.3rem', display: 'block', color: '#6366f1' }}>Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className={`w-full pl-10 pr-10 py-2 rounded-lg bg-white/60 focus:bg-white/90 border ${errors.confirmPassword ? 'border-red-400' : 'border-white/40'} focus:border-indigo-400 outline-none transition shadow-sm`}
            />
            <span className="absolute left-3 top-8 text-indigo-400">
              <i className="fas fa-lock"></i>
            </span>
            <span
              className="absolute right-3 top-8 text-indigo-400 cursor-pointer"
              onClick={() => setShowConfirm(v => !v)}
              title={showConfirm ? 'Hide password' : 'Show password'}
            >
              <i className={`fas fa-eye${showConfirm ? '' : '-slash'}`}></i>
            </span>
            {errors.confirmPassword && <span className="text-xs text-red-500 ml-1">{errors.confirmPassword}</span>}
          </div>
          <div style={{ marginBottom: '1rem' }}></div>
          {/* Role Toggle */}
          <div className="flex mb-4 justify-center" style={{ gap: '2.5rem' }}>
            <button
              type="button"
              className={`flex-1 py-2 rounded-lg border-2 transition font-semibold ${form.role === 'student' ? 'bg-indigo-500/80 text-white border-indigo-500 shadow' : 'bg-white/60 text-indigo-500 border-white/40 hover:bg-indigo-100'}`}
              onClick={() => setForm(f => ({ ...f, role: 'student' }))}
              style={{ marginRight: '1.5rem' }}
            >
              <i className="fas fa-user-graduate mr-2"></i> Student
            </button>
            <button
              type="button"
              className={`flex-1 py-2 rounded-lg border-2 transition font-semibold ${form.role === 'tutor' ? 'bg-indigo-500/80 text-white border-indigo-500 shadow' : 'bg-white/60 text-indigo-500 border-white/40 hover:bg-indigo-100'}`}
              onClick={() => setForm(f => ({ ...f, role: 'tutor' }))}
              style={{ marginLeft: '1.5rem' }}
            >
              <i className="fas fa-chalkboard-teacher mr-2"></i> Tutor
            </button>
          </div>
          {/* Terms section removed */}
          {/* Register Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '1.5rem', width: '100%' }}>
            <button
              type="submit"
              className="register-btn"
              style={{ background: 'linear-gradient(90deg, #3b82f6, #6366f1)', color: '#fff', fontWeight: 700, fontSize: '1rem', width: 'auto', minWidth: '120px', borderRadius: '8px', padding: '0.6rem 1.5rem', boxShadow: '0 4px 24px 0 #a5b4fc33' }}
            >
              Register
            </button>
            <div className="text-center" style={{ width: '100%' }}>
              <span className="text-black text-sm" style={{ fontWeight: 500 }}>Already have an account?{' '}
                <button
                  type="button"
                  className="register-btn"
                  style={{ background: 'linear-gradient(90deg, #3b82f6, #6366f1)', color: '#fff', fontWeight: 700, fontSize: '1rem', borderRadius: '8px', padding: '0.6rem 1.5rem', marginLeft: '1rem', boxShadow: '0 4px 24px 0 #a5b4fc33', display: 'inline-block', minWidth: '90px' }}
                  onClick={() => setCurrentPage && setCurrentPage('login')}
                >
                  Login
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
