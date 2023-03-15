import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Body from './Body';

function App() {
  return (
    <div>
       <Header />

       <Outlet  />

       <Footer />      

    </div>
  );
}

export default App;
