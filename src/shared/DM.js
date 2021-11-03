import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .max(15, "Must be 15 characters or less")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last Name")
    .max(15, "Must be 15 characters or less")
    .required("Last Name is required"),
  dob: yup.date("Enter your Birthday").required("Birthday required"),
  gender: yup
    .string("Select the Gender")
    .min(1, "please select Gender")
    .required("Gender is required"),
  ethinicity: yup
    .string("Enter your Ethinicity/Race")
    .max(10, "Must be 10 characters or less")
    .required("Ethinicity/Race is required"),
  education: yup
    .string("Enter your Education")
    .max(10, "Must be 10 characters or less")
    .required("Education is required"),
  employment: yup
    .string("Enter your Employment details")
    .max(15, "Must be 15 characters or less")
    .required("Employment details are required"),
  address: yup
    .string("Enter your Address")
    .max(15, "Must be 15 characters or less")
    .required("Address is required"),
  phoneNumber: yup
    .string("Enter your phone number")
    .required("Phone number is required"),
  medicalHistory: yup
    .string("Enter your Medical History Details")
    .max(15, "Must be 15 characters or less")
    .required("Medical History details are required"),
  familyMedicalHistory: yup
    .string("Enter your Family Medical History Details")
    .max(15, "Must be 15 characters or less")
    .required("Family Medical History details are required"),
  surgeries: yup
    .string("Enter your Surgery Details")
    .max(15, "Must be 15 characters or less")
    .required("Surgery details are required"),
  insurancPprovider: yup
    .string("Enter your Insurance Provider Details")
    .max(15, "Must be 15 characters or less")
    .required("Insurance Provider details are required"),
});

export const DM = (props) => {
  const [saved, setsaved] = useState({});
  const [isExist, setisExist] = useState(0);

  let formSubmit = props.submit;

  let savedValues = props.savedValues.length > 0 ? props.savedValues[0] : {};

  console.log("sss", savedValues);

  useEffect(() => {
    console.log("in use effect");
    if (props.savedValues.length > 0) {
      setisExist(savedValues.id);
    }
    setsaved({
      firstName: savedValues.firstName ? savedValues.firstName : "",
      lastName: savedValues.lastName ? savedValues.lastName : "",
      dob: savedValues.dob ? savedValues.dob : "",
      gender: savedValues.gender ? savedValues.gender : "",
      ethinicity: savedValues.ethinicity ? savedValues.ethinicity : "",
      education: savedValues.education ? savedValues.education : "",
      employment: savedValues.employment ? savedValues.employment : "",
      address: savedValues.address ? savedValues.address : "",
      phoneNumber: savedValues.phoneNumber ? savedValues.phoneNumber : "",
      medicalHistory: savedValues.medicalHistory
        ? savedValues.medicalHistory
        : "",
      familyMedicalHistory: savedValues.familyMedicalHistory
        ? savedValues.familyMedicalHistory
        : "",
      surgeries: savedValues.surgeries ? savedValues.surgeries : "",
      insuranceProvider: savedValues.insuranceProvider
        ? savedValues.insuranceProvider
        : "",
    });
  }, [props.savedValues]);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
  });

  const handleFormSubmit = (values) => {
    formSubmit(values, isExist);
  };

  const s = {
    firstName: saved.firstName ? saved.firstName : "",
    lastName: saved.lastName ? saved.firstName : "",
    dob: saved.dob ? saved.dob : "",
    gender: saved.gender,
    ethinicity: saved.ethinicity,
    education: saved.education,
    employment: saved.employment,
    address: saved.address,
    phoneNumber: saved.phoneNumber,
    medicalHistory: saved.medicalHistory,
    familyMedicalHistory: saved.familyMedicalHistory,
    surgeries: saved.surgeries,
    insuranceProvider: saved.insuranceProvider,
  };

  const formik = useFormik({
    initialValues: s,
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      debugger;
      formSubmit(values, isExist);
      // navigate("/dashboard", { replace: true });
    },
  });

  const { errors, values, touched, handleSubmit, isSubmitting, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {/*          
          <TextField
              value={values.firstName}
              type="hidden"
              {...getFieldProps("id")}
        
            />
 */}

            <TextField
              fullWidth
              label="First name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              margin="normal"
              id="dob"
              name="dob"
              required
              label="Date of Birth"
              autoFocus
              autoComplete="dob"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              {...getFieldProps("dob")}
              error={touched.dob && Boolean(errors.dob)}
              helperText={touched.dob && errors.dob}
            />
            <Select
              id="gender"
              name="gender"
              margin="normal"
              label="Gender"
              required
              fullWidth
              autoComplete="gender"
              InputLabelProps={{
                shrink: true,
              }}
              {...getFieldProps("gender")}
              error={touched.gender && Boolean(errors.gender)}
              helperText={touched.gender && errors.gender}
            >
              <MenuItem value={"Select Gender"}>Select Gender</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              id="ethinicity"
              name="ethinicity"
              fullWidth
              required
              margin="normal"
              label="Ethinicity/Race"
              autoComplete="ethinicity"
              InputLabelProps={{
                shrink: true,
              }}
              autoFocus
              {...getFieldProps("ethinicity")}
              error={touched.ethinicity && Boolean(errors.ethinicity)}
              helperText={touched.ethinicity && errors.ethinicity}
            />
            <TextField
              id="education"
              name="education"
              fullWidth
              required
              margin="normal"
              label="Education"
              autoComplete="education"
              InputLabelProps={{
                shrink: true,
              }}
              autoFocus
              {...getFieldProps("education")}
              error={touched.education && Boolean(errors.education)}
              helperText={touched.education && errors.education}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              id="employment"
              name="employment"
              fullWidth
              required
              margin="normal"
              label="Employment"
              autoComplete="employment"
              InputLabelProps={{
                shrink: true,
              }}
              {...getFieldProps("employment")}
              error={touched.employment && Boolean(errors.employment)}
              helperText={touched.employment && errors.employment}
            />
            <TextField
              id="address"
              name="address"
              fullWidth
              required
              margin="normal"
              label="Address"
              autoComplete="address"
              InputLabelProps={{
                shrink: true,
              }}
              {...getFieldProps("address")}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              fullWidth
              required
              type="number"
              margin="normal"
              label="Phone Number"
              autoComplete="phoneNumber"
              InputLabelProps={{
                shrink: true,
              }}
              autoFocus
              {...getFieldProps("phoneNumber")}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
            />
            <TextField
              id="medicalHistory"
              name="medicalHistory"
              fullWidth
              required
              margin="normal"
              label="Medical History"
              {...getFieldProps("medicalHistory")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <TextField
            id="familyMedicalHistory"
            name="familyMedicalHistory"
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            label="Family Medical History"
            autoComplete="familyMedicalHistory"
            autoFocus
            {...getFieldProps("familyMedicalHistory")}
            error={
              touched.familyMedicalHistory &&
              Boolean(errors.familyMedicalHistory)
            }
            helperText={
              touched.familyMedicalHistory && errors.familyMedicalHistory
            }
          />
          <TextField
            id="surgeries"
            name="surgeries"
            fullWidth
            required
            margin="normal"
            label="Surgeries"
            InputLabelProps={{
              shrink: true,
            }}
            {...getFieldProps("surgeries")}
            error={touched.surgeries && Boolean(errors.surgeries)}
            helperText={formik.touched.surgeries && errors.surgeries}
          />
          <TextField
            id="insuranceProvider"
            name="insuranceProvider"
            fullWidth
            required
            margin="normal"
            label="Insurance Provider"
            InputLabelProps={{
              shrink: true,
            }}
            {...getFieldProps("insuranceProvider")}
            error={
              touched.insuranceProvider && Boolean(errors.insuranceProvider)
            }
            helperText={touched.insuranceProvider && errors.insuranceProvider}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Save
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};
