import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Main";
import Lists from "./components/Lists";
import Liked from "./components/LastCall";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Lists />
      <Content />
      <Liked />
      <Footer/>
    </>
  );
}

export default App;
