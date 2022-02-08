import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const PreventSignInRoute = (props) => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <div>
        {users.auth ? (
          // <div>
          //     dashboard
          // </div>
          <Redirect to="/dashboard" />
        ) : (
          props.children
        )}
      </div>
    </div>
  );
};

export default PreventSignInRoute;
