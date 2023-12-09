import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import logo from './static/swlw.jpg';
import './App.scss';
import MainLayout from "./layouts/main-layout/MainLayout";
import ConvinceMe from "./pages/convince-me/ConvinceMe";
import Header from "./layouts/main-layout/header/Header";
import Footer from "./layouts/main-layout/footer/Footer";

function App() {
  return (
          <Router>
              <Header/>
              <div>

                  <Routes>
                      <Route  path="/" element={<MainLayout/> }>

                      </Route>
                      <Route path="/convince-me" element={<ConvinceMe/> }>

                      </Route>
                  </Routes>
              </div>
              <Footer/>
          </Router>
  );
}

export default App;
