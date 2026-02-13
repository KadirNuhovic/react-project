import React, { useState } from 'react';
import './Blog.css';

const Blog = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Simulirani podaci za blog postove
  const posts = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      excerpt: "Learn how to use useState and useEffect to manage state and component lifecycle in a modern way.",
      date: "Oct 19 2025",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Future of Web Design",
      excerpt: "Exploring new trends in web design, including Glassmorphism, Neumorphism, and minimalist approaches.",
      date: "Nov 05, 2025",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Why JavaScript is Still King?",
      excerpt: "Analysis of JavaScript popularity in 2024 and why it dominates frontend and backend development.",
      date: "Nov 20, 2025",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Performance Optimization",
      excerpt: "Tips and tricks on how to speed up your web application and improve user experience.",
      date: "Dec 01, 2025",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox",
      excerpt: "When to use Grid, and when Flexbox? Detailed comparison of two most powerful CSS layout systems.",
      date: "Dec 15, 2025",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Digital Marketing for Developers",
      excerpt: "How to promote your projects and build a personal brand in the digital world.",
      date: "Dec 28, 2025",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h1>{t.ourBlog}</h1>
        <p>{t.blogSubtitle}</p>
      </div>
      
      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-wrapper" onClick={() => setSelectedImage(post.image)}>
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-card-header">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <div className="blog-card-footer">
              <button className="read-more-btn">{t.readMore}</button>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div className="blog-modal" onClick={() => setSelectedImage(null)}>
          <span className="blog-modal-close">&times;</span>
          <img src={selectedImage} alt="Enlarged" className="blog-modal-image" />
        </div>
      )}
    </div>
  );
};

export default Blog;