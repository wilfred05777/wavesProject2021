import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Route, Routes } from "react-router";
import Loader from "utils/loader";
import AuthGuard from "./hoc/authGuard";

import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "store/actions/user.actions";

import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import MainLayout from "./hoc/mainLayout";
import RegisterLogin from "./components/auth";

import Dashboard from "./components/dashboard";
import UserInfo from "components/dashboard/user/info";

const Routes = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const signOutUser = () => {
    // alert("sign out");
    dispatch(userSignOut());
  };

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
          <Header users={users} signOutUser={signOutUser} />
          <MainLayout>
            <Switch>
              <Route
                path="/dashboard/user_nfo"
                component={AuthGuard(UserInfo)}
              />
              <Route path="/dashboard" component={AuthGuard(Dashboard)} />
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
