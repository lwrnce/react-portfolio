import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        {/* <div>{currentPage(page)}</div> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;