import React from "react";
import DashboardLayout from "hoc/dashboardLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { errorHelper } from "utils/tools";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
// import { userUpdateProfile } from "store/actions";
import { userUpdateProfile } from "store/actions/user.actions";

const UserInfo = ({ users }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: users.data.firstname,
      lastname: users.data.lastname,
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "3 char min")
        .max(30, "30 char max")
        .required("Sorry, you need the firstname"),
      lastname: Yup.string()
        .min(3, "3 char min")
        .max(30, "30 char max")
        .required("Sorry, you need the lastname"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      dispatch(userUpdateProfile(values));
    },
  });

  return (
    <DashboardLayout title="User Information">
      {/* content */}

      <form
        className="mt-3 article_form"
        style={{ maxWidth: "250px" }}
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <TextField
            style={{ width: "100%" }}
            name="firstname"
            label="Enter your firstname"
            // variant="outlined"
            {...formik.getFieldProps("firstname")}
            {...errorHelper(formik, "firstname")}
          />
        </div>

        <div className="form-group">
          <TextField
            style={{ width: "100%" }}
            name="firstname"
            label="Enter your lastname"
            // variant="outlined"
            {...formik.getFieldProps("lastname")}
            {...errorHelper(formik, "lastname")}
          />
        </div>
        <Button
          className="mb-3"
          variant="contained"
          type="submit"
          color="primary"
        >
          Edit Profile
        </Button>
      </form>
    </DashboardLayout>
  );
};

export default UserInfo;
