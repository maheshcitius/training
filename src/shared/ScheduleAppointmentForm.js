import React from "react";
import Stack from "@mui/material/Stack";
import { withFormik, Formik, Field } from "formik";
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
      // alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const ScheduleAppointmentForm = (props) => {
  const [prevspeciality, nextSpeciality] = React.useState("");

  let users = props.data?.allUsers;

  var pat = [];
  if (users && users.length > 0) {
    pat = users.filter((user) => user.role === "physician");
  }

  console.log("s", users);
  const [patient, setPatient] = React.useState();
  const [physician, setPhysician] = React.useState();
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    if (users) {
      let pp = users.filter((user) => user.role === "physician");
      let p = users.filter((user) => user.role === "patient");

      setPhysician(pp);
      setPatient(p);
    }
  }, [users]);

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
          let user = userInformation.getCurrentUser();
          //   if (user.user.role === "admin") {
          //     setPatient(response.data.filter((user) => user.role === "patient"));
          //     setPhysician(
          //       response.data.filter((user) => user.role === "physician")
          //     );
          //   } else if (user.role === "physician") {
          //     setPatient(response.data.filter((user) => user.role === "patient"));
          //   } else {
          //     setPhysician(
          //       response.data.filter((user) => user.role === "physician")
          //     );
          //   }
          setCurrentUser(user.user);
        }

        //  setUser(response.data);
        // eslint-disable-next-line no-lone-blocks
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPatient, setPatient]);

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
  console.log("sss", physician);
  console.log("ss", patient);

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
    <div className="container">
      <Formik
        initialValues={{
          physician: pat,
        }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            // handleSubmitForm(values);
          }, 1000);
        }}
      >
        {({ isSubmitting, values }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <div style={{ margin: "1rem 0" }}>
                <div className="form-group">
                  <label htmlFor="name">Title</label>
                  <Field
                    name="title"
                    required
                    className="form-control"
                    value={values.title}
                    type="text"
                  />
                </div>
              </div>

              <div style={{ margin: "1rem 0" }}>
                <label htmlFor="speciality" style={{ display: "block" }}>
                  Speciality
                </label>
                <div className="form-group">
                  <Field
                    name="status"
                    as="select"
                    className="form-control"
                    required
                    type="text"
                  >
                    <option value={"pending"}>Pending</option>
                    <option value={"scheduled"}>Scheduled</option>
                    <option value={"completed"}>Completed</option>
                    <option value={"rejected"}>Rejected</option>
                  </Field>
                </div>
              </div>

              <div style={{ margin: "1rem 0" }}>
                <label htmlFor="speciality" style={{ display: "block" }}>
                  Physican
                </label>
                <div className="form-group">
                  <Field
                    name="physicianId"
                    as="select"
                    className="form-control"
                    required
                    type="text"
                  >
                    {values.physician?.map((item) => {
                      <option value={item.id}>{item.firstname}</option>;
                    })}
                  </Field>
                </div>
              </div>
              <div style={{ margin: "1rem 0" }}>
                <label htmlFor="speciality" style={{ display: "block" }}>
                  Patient
                </label>
                <div className="form-group">
                  <Field
                    name="status"
                    as="select"
                    className="form-control"
                    required
                    type="text"
                  >
                    {props.data?.allUsers?.map((item) => {
                      <option value={item.id}>{item.firstname}</option>;
                    })}
                  </Field>
                </div>
              </div>

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
              <div className="form-group">
                <label htmlFor="content">Description </label>
                <Field
                  name="description"
                  className="form-control"
                  as="textarea"
                />
              </div>

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
        )}
      </Formik>
    </div>
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
