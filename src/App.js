import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Reasons from "./components/Reasons";
import Liked from "./components/LastCall";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Reasons />
      <Content />
      <Liked />
      <Footer/>
    </>
  );
}

export default App;
