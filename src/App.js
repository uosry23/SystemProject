import React from "react";
import "./index.css";
import CardDesign from "./CardDesign";
import Profile from "./Profile";
import Cart from './add-cart.js';
const App = () => {
  return (
    <div>
      <Profile />
      <Cart/>
    </div>
  );
};

export default App;
