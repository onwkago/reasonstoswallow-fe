import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ConvinceMe from "./pages/convince-me/ConvinceMe";
import Main from './pages/main/Main';
import Header from "./layouts/main-layout/header/Header";
import Footer from "./layouts/main-layout/footer/Footer";
import './App.scss';

function App() {
    return (
        <Router>
            <div className='page'>
                <div className="content-wrapper">

                    <Header />
                    <div className="mt-4" />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/convince-me" element={<ConvinceMe />} />
                    </Routes>
                    <div className="mt-4" />
                    <Footer />
                    
                </div>
            </div>
        </Router>
    );
}

export default App;
