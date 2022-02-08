import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Route, Routes } from "react-router";

import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import MainLayout from "./hoc/mainLayout";
import RegisterLogin from "./components/auth";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/sign_in" component={RegisterLogin} />
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
