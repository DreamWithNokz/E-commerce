import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  
  return (
    <div className="App">
      <Navbar numberOfItems={numberOfItems} />
      <Cart numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} />
    </div>
  );
}

export default App;
