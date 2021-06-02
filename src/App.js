import React from "react";
import Intro from "./components/intro";
import Services from "./components/services";
import Header from "./components/header";
import About from "./components/about";
import Work from "./components/work";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
