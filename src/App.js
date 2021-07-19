import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const selectPage = () => {
    switch (currentPage) {
      case "projects":
        return <Projects />;
      case "contact":
        return <ContactForm />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header
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