import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Cards from './Cards';


function App() {
  return (
    <div>
       <Header />

       <Outlet />
            
       <Cards />

       
       <Footer />  

    </div>
  );
}

export default App;
