import React from "react";
import Stack from "@mui/material/Stack";
import { withFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Select from "react-select";
import { userInformation } from "../services";

const emptyOption = { value: "", label: "" };
let formHandler, date;
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
  }),
  mapPropsToValues: (props) => ({
    speciality: emptyOption,
    physicianName: emptyOption,
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(date);
    const payload = {
      ...values,
      speciality: values.speciality.value,
      physicianName: values.physicianName.value,
    };
    formHandler(values);
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const ScheduleAppointmentForm = (props) => {
  const [prevspeciality, nextSpeciality] = React.useState("");

  const [patient, setPatient] = React.useState("");
  const [physician, setPhysician] = React.useState("");
  const [speciality, setSpeciality] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState("");

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

  let [user, setUser] = React.useState([]);
  const [value, setValue] = React.useState(new Date());

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
        if (response.data) {
          let user = userInformation.currentUser;
          if (user.role === "admin") {
            setPatient(response.data.filter((user) => user.role === "patient"));
            setPhysician(
              response.data.filter((user) => user.role === "physician")
            );
          } else if (user.role === "physician") {
            setPatient(response.data.filter((user) => user.role === "patient"));
          } else {
            setPhysician(
              response.data.filter((user) => user.role === "physician")
            );
          }
          setCurrentUser(user);
        }

        //  setUser(response.data);
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
        <TextField
          id="secTitle"
          name="title"
          fullWidth
          required
          margin="normal"
          label="Title"
          autoFocus
          autoComplete="title"
          variant="standard"
          onChange={handleTitleChange}
          //   error={formik.touched.title && Boolean(formik.errors.title)}
          //   helperText={formik.touched.title && formik.errors.title}
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Select Date&Time"
            value={value}
            variant="standard"
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </Button>
        <Button type="submit" disabled={isSubmitting}>
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
export const SA = formikEnhancer(ScheduleAppointmentForm);
