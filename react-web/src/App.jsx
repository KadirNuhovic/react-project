import React, { useState, useEffect } from 'react';
import Header from './Header';
import './SignAuth.css';
import './Theme.css'; // Importujemo temu
import { translations } from './translations'; // Importujemo prevode
import SignAuth from './SignAuth';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import Community from './Community';
import AdminRoom from './AdminRoom';

function App() {
  const [page, setPage] = useState('home');
  const [lang, setLang] = useState('en'); // Default jezik
  const [theme, setTheme] = useState('dark'); // Default tema
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('loggedUser');
    return saved ? JSON.parse(saved) : null;
  });
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [{ username: 'admin', password: 'admin' }];
  });
  const [SignIn, setShowSignIn] = useState(false);
  const [SignUp, setShowSignUp] = useState(false);

  const t = translations[lang]; // Trenutni prevodi

  // Podaci za postove su sada ovde (u App) da bi ih delili Community i AdminRoom
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Marko",
      avatar: "👨‍💻",
      title: "Best resources for learning React?",
      content: "Hello everyone! I am a beginner in React and looking for recommendations for good tutorials or courses. What would you recommend?",
      likes: 15,
      comments: 4,
      tags: ["Help", "React"]
    },
    {
      id: 2,
      author: "Ana_Dev",
      avatar: "👩‍🚀",
      title: "My new portfolio site",
      content: "I just finished redesigning my portfolio using Three.js and React. I would love to hear your thoughts!",
      likes: 32,
      comments: 8,
      tags: ["Showcase", "ThreeJS"]
    },
    {
      id: 3,
      author: "CodeMaster",
      avatar: "🧙‍♂️",
      title: "Vite vs Create React App in 2024",
      content: "Do you still use CRA or have you completely switched to Vite? What are your pros and cons?",
      likes: 45,
      comments: 23,
      tags: ["Discussion", "Tools"]
    }
  ]);

  const handleAddPost = (postData) => {
    const newPost = {
      id: posts.length + 1,
      author: user || "Guest",
      avatar: user === 'admin' ? "🛡️" : "👤",
      title: postData.title || "New Topic",
      content: postData.content,
      likes: 0,
      comments: 0,
      tags: ["General"]
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleSignIn = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser(username);
      localStorage.setItem('loggedUser', JSON.stringify(username));
      setShowSignIn(false);
      return true;
    }
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(username);
      localStorage.setItem('loggedUser', JSON.stringify(username));
      setShowSignIn(false);
      return true;
    }
    return false;
  };

  const handleSignUp = (username, password) => {
    if (users.find(u => u.username === username)) {
      return false;
    }
    const newUsers = [...users, { username, password }];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setShowSignUp(false);
    setShowSignIn(true);
    return true;
  };

  const handleGuestLogin = () => {
    setUser('Guest');
    localStorage.setItem('loggedUser', JSON.stringify('Guest'));
  };

  // Primeni temu na body element
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  useEffect(() => {
    if (user === null) {
      localStorage.removeItem('loggedUser');
    }
  }, [user]);

  if (!user) {
    return (
      <SignAuth 
        onSignIn={(u, p) => !handleSignIn(u, p) ? 'Invalid username or password!' : null}
        onSignUp={(u, p) => !handleSignUp(u, p) ? 'Username already exists!' : null}
        onGuest={handleGuestLogin}
      />
    );
  }
  return (
    <div className="modern-bg">
      <Header
        user={user}
        onSignOut={() => setUser(null)}
        onShowSignIn={() => { setShowSignIn(true); setShowSignUp(false); }}
        onShowSignUp={() => { setShowSignUp(true); setShowSignIn(false); }}
        onNavigate={setPage}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t}
      />
      <div className="modern-content">
        {page === 'home' && <Home onNavigate={setPage} t={t} />}
        {page === 'contact' && <Contact />}
        {page === 'about' && <About t={t} />}
        {page === 'blog' && <Blog t={t} />}
        {page === 'community' && <Community posts={posts} onAddPost={handleAddPost} t={t} />}
        {page === 'admin' && <AdminRoom posts={posts} onAddPost={handleAddPost} onDeletePost={handleDeletePost} t={t} />}
      </div>
      <Footer onNavigate={setPage} user={user} t={t} />
    </div>
  );
}

export default App;
