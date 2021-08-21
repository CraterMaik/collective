import React from 'react';

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <main>
        { children }
      </main>
    </React.Fragment>
  );
}

export default Main;