import React from "react";
import styled from "@emotion/styled";
import * as Yup from "yup";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/slices/userReducer";

import {
  Alert as MuiAlert,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  TextField as MuiTextField,
} from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "../../hooks/useAuth";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

function SignIn() {
  const router = useRouter();
  const { signIn } = useAuth();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().max(255).required("Username is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // await signIn(values.email, values.password);
          // await fetch("http://13.235.115.71/api/users/signin/", {
          const response = await fetch(API_BASE_URL + "/api/users/signin/", {
            method: "POST",
            body: JSON.stringify({
              username: values.email,
              password: values.password,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (response.status === 200) {
            const data = await response.json();
            // console.log({ data: data, status: response.status });
            dispatch(setUserData(data));
            router.push("/college/add-new-college");
          } else {
            const errorData = await response.json();
            // console.log({ error: errorData, status: response.status });
            setErrors({
              submit: "Invalid Sign in Credential",
              email: values.email,
              password: values.password,
            });
            // Handle the successful response
          }

          // router.push("/private");
          // router.push("/college/add-new-college");
        } catch (error) {
          const message = error.message || "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          {/* <Alert mt={3} mb={3} severity="info">
            Use <strong>youdotcreate@gmail.com</strong> and{" "}
            <strong>Daydreamers#2023</strong> to sign in
          </Alert> */}
          {errors.submit && (
            <Alert mt={2} mb={3} severity="warning">
              {errors.submit}
            </Alert>
          )}
          <TextField
            type="text"
            name="email"
            label="Username"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            onBlur={handleBlur}
            onChange={handleChange}
            my={2}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={values.password}
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            onBlur={handleBlur}
            onChange={handleChange}
            my={2}
            mb={8}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Sign in
          </Button>
          {/* <Link href="/auth/reset-password">
            <Button fullWidth color="primary">
              Forgot password
            </Button>
          </Link> */}
        </form>
      )}
    </Formik>
  );
}

export default SignIn;
