import React, { useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const selectPage = () => {
    switch (currentPage) {
      case "projects":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
      <main>
        {selectPage(currentPage)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;