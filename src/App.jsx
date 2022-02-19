import React from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./App.scss";
function App() {
  return (
    <div className="app">
      <div className="container">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
