import React from "react";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Outlet} from 'react-router-dom'


function RootLayout() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* main content */}
      <div className="container" style={{minHeight:"75vh"}}>
        {/* placeholder for components need to be loaded dynamically */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;
