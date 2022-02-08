import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AuthForm from "./authForm";
import PreventSignInRoute from "hoc/preventSignInRoute";

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toogleFormType = () => {
    setFormType(!formType);
  };

  return (
    <PreventSignInRoute>
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              {formType ? (
                <>
                  <h1>New Customers</h1>
                  <p>
                    Lomer sfd par ominis sdsds sdsi33i4 adrc viertis silod asded
                    master dclader
                  </p>
                </>
              ) : (
                <>
                  <h1>Welcome Back</h1>
                  <p>
                    Lomer sfd par ominis sdsds sdsi33i4 adrc viertis silod asded
                    master dclader dsdsd333 bdderd
                  </p>
                </>
              )}
              <Button
                variant="contained"
                color="default"
                size="small"
                onClick={() => toogleFormType()}
              >
                {formType ? "Already registered" : "Need to register"}
              </Button>
            </div>
            <div className="right">
              <h2>{formType ? "Register" : "Sign In"}</h2>
              <AuthForm formType={formType} {...props} />
            </div>
          </div>
        </div>
      </div>
    </PreventSignInRoute>
  );
};

export default RegisterLogin;
