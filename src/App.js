import React from "react"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './index.css';
import Routers from "./Routes/Routes";


function App() {
  return (
  
    <>
      <Navbar />
      <Routers />
      <Footer />
      
    </>

  );
}

export default App;
