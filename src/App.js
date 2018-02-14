import React, { Component } from "react";

import "./App.css";
import Menu from "./components/Menu";
import WelcomeHeaderSection from "./components/WelcomeHeaderSection";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <WelcomeHeaderSection />
      </div>
    );
  }
}

export default App;
