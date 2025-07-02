import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contact/Contact";
import Movies from "./Components/Movies/Movies";
import Synopsis from "./Components/Synopsis/Synopsis";
import Login from "./Components/LoginPage/Login";
import LoadingGif from "./LoadingGif/LoadingGif";

function App() {
  const [showSynopsis, setShowSynopsis] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleShowSynopsis = () => {
    setShowSynopsis(true);
    setShowLogin(false);
  };

  const handleShowLogin = (e) => {
    e.preventDefault(); // Prevent default navigation
    setShowLogin(true);
    setShowSynopsis(false);
  };

  const handleCloseSynopsis = () => {
    setShowSynopsis(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <Router>
      <LoadingComponent 
        loading={loading} 
        setLoading={setLoading} 
        showLogin={showLogin} 
        showSynopsis={showSynopsis} 
      />
      
      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Layout handleLogin={handleShowLogin} />}>
          <Route index element={<Home handleSynopsis={handleShowSynopsis} />} />
          <Route path="about" element={<About handleSynopsis={handleShowSynopsis} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movies" element={<Movies handleSynopsis={handleShowSynopsis} />} />
        </Route>
      </Routes>

      {/* Modal Components */}
      {showLogin && <Login closeLogin={handleCloseLogin} />}
      {showSynopsis && <Synopsis closeSynopsis={handleCloseSynopsis} />}
    </Router>
  );
}

function LoadingComponent({ loading, setLoading, showLogin, showSynopsis }) {
  const location = useLocation();

  useEffect(() => {
    if (showLogin || showSynopsis) {
      setLoading(false);
    } else {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location, showLogin, showSynopsis, setLoading]);

  return loading ? <LoadingGif /> : null;
}

export default App;