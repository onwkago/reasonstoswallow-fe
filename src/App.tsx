import React from 'react';
import logo from './static/swlw.jpg';
import './App.scss';
import MainLayout from "./layouts/main-layout/MainLayout";
import ConvinceMe from "./pages/convince-me/ConvinceMe";

function App() {
  return (
      <div className="App">
        {/*<MainLayout />*/}
        <ConvinceMe/>
      </div>
  );
}

export default App;
