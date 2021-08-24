import React from 'react';
import Navbar from '../nav/navbar';

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      
      <main>
        { children }
      </main>
    </React.Fragment>
  );
}

export default Main;