import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Route, Routes } from "react-router";

import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import MainLayout from "./hoc/mainLayout";
import RegisterLogin from "./components/auth";

import { useDispatch, useSelector } from "react-redux";
import Loader from "utils/loader";
import { userIsAuth } from "store/actions/user.actions";

const Routes = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userIsAuth());
  }, [dispatch]);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader full={true} />
      ) : (
        <>
          <Header />
          <MainLayout>
            <Switch>
              <Route path="/sign_in" component={RegisterLogin} />
              <Route path="/" component={Home} />
            </Switch>
          </MainLayout>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default Routes;
