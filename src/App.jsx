import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './Pages/Carousel';
import Heading from './Pages/Heading';
import Youtube from './Pages/Youtube';
import Baner from './Pages/Baner';
import Works from './Pages/Works';
import Footer from './Pages/Footer';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navbar />} />
    //     <Route path="/carousel" element={<Carousel />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Navbar />
      <Carousel />
      <Heading />
      <Youtube />
      <Baner />
      <Works />
      <Footer />
      
    </div>
  );
}

export default App;
