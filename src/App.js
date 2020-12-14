import React from "react";
import "./style/tailwind.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Stack from "./components/Stack";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
    </div>
  );
}

export default App;
