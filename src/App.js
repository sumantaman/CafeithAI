import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import './App.css';

// Lazy load components for better performance
const Home = React.lazy(() => import('./components/Home'));
const Menu = React.lazy(() => import('./components/Menu'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Reservation = React.lazy(() => import('./components/Reservation'));
const Login = React.lazy(() => import('./components/Auth/Login'));
const Signup = React.lazy(() => import('./components/Auth/Signup'));

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="app">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App; 