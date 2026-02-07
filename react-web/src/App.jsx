import React from 'react';
import Header from './Header';

function App() {
  return (
    <div style={{background:'#23272a', minHeight:'100vh'}}>
      <Header />
      <div style={{color:'#fff', textAlign:'center', marginTop:'60px'}}>
        <h1>Welcome!</h1>
      </div>
    </div>
  );
}

export default App;
