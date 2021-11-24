import { Formik, Form, useField, useFormikContext, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";

import { Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const SelectInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const { values, setFieldValue } = useFormikContext();
  const defaultValue = (options, value) =>
    options ? options.find((option) => option.value === value) : "";

  return (
    <Select
      {...field}
      {...props}
      options={options}
      value={defaultValue(options, values[field.name])}
      onChange={(value) => setFieldValue(field.name, value)}
    />
  );
};

export const SelectSearch = (props) => {
  const [physician, setPhysicians] = useState([
    { label: "Select Physician", value: "0" },
  ]);
  const users = useSelector((state) => state.allUsers);

  useEffect(() => {
    var phy = [];

    if (users.physicians?.length > 0) {
      phy = users.physicians?.map((user) => {
        if (user.role === "physician") {
          var temp = {};
          temp.label = user.firstname ? user.firstname : "";
          temp.value = user.id ? user.id : "";

          return temp;
        }
      });
      setPhysicians(phy);
    }
  }, [users.physicians]);

  return (
    <Formik
      initialValues={{
        key: props.key ? props.key : "key",
        physicians: props.savedValues
          ? props.savedValues
          : physician?.length > 0
          ? physician
          : [{ label: "select physician ", value: "0" }],
      }}
      enableReinitialize={true}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          props.submit(values);
        }, 1000);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Stack spacing={4} padding={4} width="100%">
            {physician.length > 0 && (
              <SelectInput
                label="physicain"
                name={values.key}
                type="text"
                options={values.physicians}
                instanceId="unique"
              />
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Submit"}
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
