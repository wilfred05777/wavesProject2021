import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Route, Routes } from "react-router";

import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
