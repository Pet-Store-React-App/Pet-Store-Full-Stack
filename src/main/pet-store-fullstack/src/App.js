import Navbar from './Navbar';
import Products from './Products';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Pet Store</h1>
      </header>
      
      <p>Welcome to the Pet Store. Feel free to have a look around, contact us about any questions you have, or buy something when you're ready.</p>
      <Products />
       
    </div>
  );
}

export default App;
