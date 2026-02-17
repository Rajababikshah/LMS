import React, { useState } from 'react';

import './CoursesPage.css';

import { useEffect } from 'react';

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("popularity");
  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "AI & ML",
    "Cloud Computing",
    "Cybersecurity",
    "UI/UX Design",
    "DevOps",
    "Blockchain",
    "Java Programming"
  ];

  useEffect(() => {
    document.body.classList.add('courses-bg');
    return () => {
      document.body.classList.remove('courses-bg');
    };
  }, []);
  const courses = [
    {
      title: 'Full Stack Web Development',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and build real-world web applications.',
      students: 1250,
      tutor: 'John Doe',
      rating: 4.8,
      duration: '6 months',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      badge: '🔥 Most Popular',
      category: 'Web Development',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Master problem-solving techniques and crack coding interviews efficiently.',
      students: 980,
      tutor: 'Jane Smith',
      rating: 4.7,
      duration: '4 months',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
      badge: '⭐ Top Rated',
      category: 'Data Science',
    },
    {
      title: 'Python Programming Masterclass',
      description: 'Complete beginner to advanced Python with real projects and exercises.',
      students: 1540,
      tutor: 'Emily Clark',
      rating: 4.9,
      duration: '5 months',
      price: '$179',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      badge: '🆕 New Course',
      category: 'AI & ML',
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Understand ML algorithms and build intelligent prediction systems.',
      students: 860,
      tutor: 'Michael Lee',
      rating: 4.6,
      duration: '7 months',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'AI & ML',
    },
    {
      title: 'UI/UX Design Fundamentals',
      description: 'Learn wireframing, prototyping, and user-centered design principles.',
      students: 720,
      tutor: 'Sophia Turner',
      rating: 4.5,
      duration: '3 months',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'UI/UX Design',
    },
    {
      title: 'Cloud Computing with AWS',
      description: 'Deploy, manage, and scale applications using Amazon Web Services.',
      students: 640,
      tutor: 'David Kim',
      rating: 4.4,
      duration: '4 months',
      price: '$159',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'Cloud Computing',
    },
    {
      title: 'Java Programming & Spring Boot',
      description: 'Build enterprise-level applications using Java and Spring framework.',
      students: 890,
      tutor: 'Olivia Brown',
      rating: 4.7,
      duration: '5 months',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'Java Programming',
    },
    {
      title: 'Cybersecurity Basics',
      description: 'Learn network security, ethical hacking fundamentals, and data protection.',
      students: 570,
      tutor: 'William Green',
      rating: 4.3,
      duration: '3 months',
      price: '$139',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'Cybersecurity',
    },
    {
      title: 'Blockchain Development',
      description: 'Build decentralized applications and understand smart contracts.',
      students: 430,
      tutor: 'Lucas White',
      rating: 4.2,
      duration: '4 months',
      price: '$169',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'Blockchain',
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automate deployment and manage scalable software systems efficiently.',
      students: 610,
      tutor: 'Mia Scott',
      rating: 4.4,
      duration: '4 months',
      price: '$159',
      image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=400&q=80',
      badge: '',
      category: 'DevOps',
    },
  ];
  return (
    <div className="courses-page-container">
      {/* Hero Section */}
      <section className="courses-hero">
        <h1 className="courses-hero-heading">Explore Our Courses</h1>
        <p className="courses-hero-subheading">Upgrade your skills with industry-ready programs.</p>
        <div className="courses-hero-controls">
          <input
            type="text"
            className="courses-search-input"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="courses-category-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat === "All" ? "" : cat}>{cat}</option>
            ))}
          </select>
          <select
            className="courses-sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="popularity">Sort by: Popularity</option>
            <option value="latest">Sort by: Latest</option>
            <option value="rating">Sort by: Rating</option>
          </select>
        </div>
      </section>
      {/* ...existing code... */}
      {/* Statistics Section */}
      <div className="courses-stats-section">
        <div className="courses-stat"><span>👨‍🎓</span> 1500+ Students</div>
        <div className="courses-stat"><span>📚</span> 80+ Courses</div>
        <div className="courses-stat"><span>👨‍🏫</span> 25+ Tutors</div>
        <div className="courses-stat"><span>🏆</span> 98% Success Rate</div>
      </div>
      {/* Categories Section */}
      <div className="courses-categories-section">
        {categories.slice(1).map(cat => (
          <button
            key={cat}
            className={`courses-category-tag${category === cat ? ' active' : ''}`}
            onClick={() => setCategory(cat === category ? '' : cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <h2 className="courses-title">Popular Courses</h2>
      <div className="courses-grid">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <div className="course-image-container">
              <img className="course-image" src={course.image} alt={course.title} />
              {course.badge && <span className="course-badge">{course.badge}</span>}
            </div>
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <div className="course-meta">
                <span className="course-tutor">👨‍🏫 {course.tutor}</span>
                <span className="course-rating">⭐ {course.rating}</span>
              </div>
              <p className="course-desc">{course.description}</p>
              <div className="course-details-row">
                <span className="course-students">👨‍🎓 {course.students} Students</span>
                <span className="course-duration">⏱ {course.duration}</span>
              </div>
              <div className="course-details-row">
                <span className="course-price">💰 {course.price}</span>
                {/* Progress bar placeholder if enrolled */}
              </div>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Section */}
      <div className="courses-pagination">
        <button className="courses-pagination-btn">&lt;</button>
        <button className="courses-pagination-btn active">1</button>
        <button className="courses-pagination-btn">2</button>
        <button className="courses-pagination-btn">3</button>
        <button className="courses-pagination-btn">&gt;</button>
      </div>
    </div>
  );
}
