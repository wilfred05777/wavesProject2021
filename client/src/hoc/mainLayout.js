import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "utils/tools/";
import { clearNotification } from "store/actions/index";

const MainLayout = (props) => {
  const notifications = useSelector((state) => state.notifcations);
  const dispatch = useDispatch();

  useEffect(() => {
    // showToast("SUCCESS", "Some error");
    if (notifications && notifications.error) {
      const msg = notifications.msg ? notifications.msg : "Error";
      showToast("ERROR", msg);
      dispatch(clearNotification());
      /////
    }
    if (notifications && notifications.success) {
      const msg = notifications.msg ? notifications.msg : "Good job!";
      showToast("SUCCESS", msg);
      dispatch(clearNotification());
    }
  }, [notifications, dispatch]);
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
