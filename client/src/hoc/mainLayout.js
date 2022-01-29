import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "utils/tools/";

const MainLayout = (props) => {
  const notifications = useSelector((state) => state.notifcations);
  useEffect(() => {
    // showToast("SUCCESS", "Some error");
    if (notifications && notifications.error) {
      const msg = notifications.msg ? notifications.msg : "Error";
      showToast("ERROR", msg);
      /////
    }
  }, [notifications]);
  return (
    <div>
      <div>
        {props.children}
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainLayout;
