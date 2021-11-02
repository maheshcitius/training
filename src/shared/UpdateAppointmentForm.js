// components/contactus-form.component.js

import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const UpdateAppointmentForm = (props) => {
  let s = "sss";

  const [saved, setsaved] = React.useState({});

  let formSubmit = props.submit;

  let savedValues = props.savedValues
    ? {
        title: props.savedValues.title,
        status: props.savedValues.status,
        scheduleDate: props.savedValues.scheduleDate,
      }
    : {};

  React.useEffect(() => {
    if (savedValues) {
      setsaved({
        title: savedValues.title,
        status: savedValues.status,
        scheduleDate: savedValues.scheduleDate,
        description: savedValues.description ? savedValues.description : "",
      });
    }
  }, []);

  const handleSubmitForm = (values) => {
    console.log("mahesh", values);
    formSubmit(values);
  };

  return (
    <Formik
      initialValues={saved}
      enableReinitialize={true}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          handleSubmitForm(values);
        }, 1000);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
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

          <div className="form-group">
            <label htmlFor="scheduleDate"> Scheduled Date</label>
            <Field name="scheduleDate" className="form-control" type="date" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Status</label>
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

          <div className="form-group">
            <label htmlFor="content">Description </label>
            <Field name="description" className="form-control" as="textarea" />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
