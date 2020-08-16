import React from "react";
import Contact from "./components/contact";
import Price from "./components/prices";
import Book from "./components/book";
import About from "./components/about";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Services from "./components/services";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Services />
      <Price />
      <Book />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
