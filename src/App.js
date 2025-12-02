import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

// --- CRITICAL FIX: IMPORT LOGIN AND REGISTER ---
import Login from './pages/Login';      // Make sure file is src/pages/Login.js
import Register from './pages/Register'; // Make sure file is src/pages/Register.js

// Placeholders (Only if you haven't created these files yet)
const About = () => <div style={{marginTop: '100px', textAlign:'center'}}><h1>About Us</h1></div>;
const Contact = () => <div style={{marginTop: '100px', textAlign:'center'}}><h1>Contact Us</h1></div>;

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            
            {/* AUTH ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;