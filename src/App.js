import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Reasons from "./components/Reasons";
import Liked from "./components/Liked";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Reasons />
      <Content />
      <Liked />
      <Footer/>
    </div>
  );
}

export default App;
