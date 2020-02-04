import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import Reasons from "./components/Reasons";
import Footer from "./components/Footer";
// import Liked from "./components/Liked";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* <Reasons /> */}
      {/* <Liked /> */}
      <Footer/>
    </div>
  );
}

export default App;
