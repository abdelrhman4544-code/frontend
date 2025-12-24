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
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

// NEW IMPORT FOR ADOPTION PAGE
import Adoption from './pages/Adoption'; 

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            
            {/* Dynamic Details Page */}
            <Route path="/details/:id" element={<ProductDetails />} />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Adoption Page Route */}
            <Route path="/adoption" element={<Adoption />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;