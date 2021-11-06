import React from "react";
import Stack from "@mui/material/Stack";
import { withFormik, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Select from "react-select";
import { userInformation } from "../services";
import { useSelector } from "react-redux";

const emptyOption = { value: "", label: "" };
const emptyOption1 = { value: "0", label: "Select Patient" };

let formHandler, date, patients;
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    speciality: Yup.object().shape({
      label: Yup.string(),
      value: Yup.string().required("speciality is required!"),
    }),
    physicianName: Yup.object().shape({
      label: Yup.string(),
      value: Yup.string().required("physicianName is required!"),
    }),
    patientName: Yup.object().shape({
      label: Yup.string(),
      value: Yup.string().required("patient is required!"),
    }),
  }),
  mapPropsToValues: (props) => ({
    speciality: emptyOption,
    physicianName: emptyOption,
    patientName: emptyOption1,
  }),
  handleSubmit: (values, { setSubmitting }) => {
    debugger;
    console.log(date);
    const payload = {
      ...values,
      speciality: values.speciality.value,
      physicianName: values.physicianName.value,
      patientName: values.patientName.value,
    };

    formHandler(values);
    setTimeout(() => {
      //  alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const MyForm = (props) => {
  const [prevspeciality, nextSpeciality] = React.useState("");
  const [patients, setPatients] = React.useState([]);
  let [user, setUser] = React.useState([]);
  const [value, setValue] = React.useState(new Date());
  const [role, setRole] = React.useState("admin");

  React.useEffect(() => {
    let userInfo = userInformation.getCurrentUser();
    setRole(userInfo?.user.role);
  }, []);

  formHandler = props.submit;

  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;

  const allusers = useSelector((state) => state.allUsers);

  console.log("users", allusers.patients);

  React.useEffect(() => {
    var pt = [];
    if (allusers.patients) {
      allusers.patients?.map((p) => {
        var pa = {};

        pa.label = p.firstname;
        pa.value = p.id;
        pt.push(pa);
      });

      setPatients(pt);
    }
  }, [allusers]);

  const handleDateChange = (newValue) => {
    setValue(newValue);
    date = newValue;
    localStorage.setItem("_scheduledDate", date);
    console.log(date, "mahesh date");
  };
  const handleTitleChange = (newTitle) => {
    localStorage.setItem("_title", document.getElementById("secTitle").value);
  };

  React.useEffect(() => {
    userInformation
      .getAll()
      .then((response) => {
        setUser(response.data);
        patients = response.data;
        // eslint-disable-next-line no-lone-blocks
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const specializations = [
    { value: "Dermatologist", label: "Dermatologist" },
    { value: "Dentist", label: "Dentist" },
    { value: "Gynaecology", label: "Gynaecology" },
    { value: "Opthamologist", label: "Opthamologist" },
  ];

  var dt = {
    Dermatologist: [],
    Dentist: [],
    Gynaecology: [],
    Opthamologist: [],
  };
  user.map((item) => {
    if (item.speciality === "Dermatologist") {
      let s = {};
      s.label = item.firstname;
      s.value = item.firstname + "-" + item.id;
      dt.Dermatologist.push(s);
    } else if (item.speciality === "Dentist") {
      let s = {};
      s.label = item.firstname;
      s.value = item.firstname + "-" + item.id;
      dt.Dentist.push(s);
    } else if (item.speciality === "Gynaecology") {
      let s = {};
      s.label = item.firstname;
      s.value = item.firstname + "-" + item.id;
      dt.Gynaecology.push(s);
    } else if (item.speciality === "Opthamologist") {
      let s = {};
      s.label = item.firstname;
      s.value = item.firstname + "-" + item.id;
      dt.Opthamologist.push(s);
    }
  });

  const physicianNames = dt;
  console.log(physicianNames, "physicianNames");

  const handleSpecializationChange = (field, value) => {
    console.log(value.value);
    const newspecialityValue = value.value;
    const shouldResetDependentSelect = newspecialityValue !== prevspeciality;
    nextSpeciality(prevspeciality);
    setFieldValue(field, value);
    if (shouldResetDependentSelect) {
      setFieldValue("physicianName", emptyOption);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <div style={{ margin: "1rem 0" }}>
          {role !== "patient" && (
            <>
              <label htmlFor="patients" style={{ display: "block" }}>
                PatientName
              </label>

              <MySelect
                name="patientName"
                options={patients ? patients : []}
                value={values.patientName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.patientName}
                touched={touched.patientName}
              />
            </>
          )}

          <label htmlFor="speciality" style={{ display: "block" }}>
            Speciality
          </label>

          <MySelect
            name="speciality"
            options={specializations}
            value={values.speciality}
            onChange={(field, value) =>
              handleSpecializationChange(field, value)
            }
            onBlur={setFieldTouched}
            error={errors.speciality}
            touched={touched.speciality}
          />
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="physicianName" style={{ display: "block" }}>
            PhysicianName
          </label>
          <MySelect
            name="physicianName"
            options={
              values.speciality.value
                ? physicianNames[values.speciality.value]
                : []
            }
            value={values.physicianName}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.physicianName}
            touched={touched.physicianName}
          />
        </div>
      </Stack>
      <Stack spacing={1}>
        <TextField
          id="secTitle"
          name="title"
          fullWidth
          required
          margin="normal"
          label="Title"
          autoFocus
          autoComplete="title"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleTitleChange}
          //   error={formik.touched.title && Boolean(formik.errors.title)}
          //   helperText={formik.touched.title && formik.errors.title}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Select Date&Time"
            value={value}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Stack>
      <Stack spacing={2}>
        {/* <Button
        type="button"
        variant="primary"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </Button> */}

        <Button
          className="mt-3"
          fullWidth
          size="large"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

const MySelect = (props) => {
  const defaultProps = {
    isDisabled: false,
  };

  const handleChange = (value) => {
    props.onChange(props.name, value);
  };

  const handleBlur = () => {
    props.onBlur(props.name, true);
  };

  return (
    <React.Fragment>
      <Select
        id={props.name}
        name={props.name}
        options={props.options}
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
        isDisabled={props.isDisabled}
      />
      {!!props.error && props.touched && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {Object.values(props.error)}
        </div>
      )}
    </React.Fragment>
  );
};
export const AppointmentForm = formikEnhancer(MyForm);
