import React, { useState } from "react";
// components
import Page from "../Page";
import PageHeader from "../../shared/PageHeader";
import { MedicalDataGrid } from "../../components/Admin/medicalDataTbl";
import MedicationIcon from "@mui/icons-material/Medication";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux-store/actions";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import * as yup from "yup";
import SettingsIcon from "@mui/icons-material/Settings";
// material
import {
  Card,
  Container,
  Typography,
  Button,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { userInformation } from "../../services";
export const Settings = (props) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const user = userInformation.getCurrentUser();

  const LoginSchema = Yup.object().shape({
    confirmPassword: Yup.string().required("Confirm Password is required"),
    password: Yup.string()
      .required("New Password is required")
      .min(8, "Password should be of minimum 8 characters length"),
  });

  let formSubmit = props.submit;

  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        alert("Password and Confirm Password did not matched.");
      } else {
        let payload = {
          password: values.password,
        };
        dispatch(userActions.updateUser(user?.user.id, payload));
      }
      // formSubmit(values);
      // navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Page title="Settings">
      <PageHeader
        title="Settings"
        subTitle="Change Password"
        icon={<SettingsIcon fontSize="large" />}
      />

      <Container>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                type="password"
                label="New Password"
                {...getFieldProps("password")}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />

              <TextField
                fullWidth
                autoComplete="Confirm New Password"
                type={showPassword ? "text" : "password"}
                label="Confirm New Password"
                {...getFieldProps("confirmPassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} edge="end">
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            ></Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Change
            </LoadingButton>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
};
