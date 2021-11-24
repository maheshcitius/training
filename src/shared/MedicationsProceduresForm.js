import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider, Field, FieldArray } from "formik";
import React from "react";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector } from "react-redux";
import Select from "react-select";
// material
import { Card, Container, Button, Stack, Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

const vs = yup.object({
  procedureCode: yup
    .string("Enter your First Name")
    .max(30, "Must be 15 characters or less")
    .required("procedureCode is required"),
  diagnosisCode: yup
    .string("Ender Diagnosis Code ")
    .max(15, "Must be 30 characters or less")
    .required("Diagnosis Code is required"),
  physicianComments: yup
    .string("Enter Comments")
    .max(100, "Must be 100 characters or less"),

  examinationSummary: yup
    .string("Enter Examination Summary")
    .max(100, "Must be 100 characters or less"),
});

export const MandA = (props) => {
  let formSubmit = props.submit;

  //const products = useSelector((state) => state.medicaldata);
  //console.log("pro", props.medications);

  const formik = useFormik({
    initialValues: {
      procedureCode: "",
      diagnosisCode: "",
      allergies: "",
      physicianComments: "",
      examinationSummary: "",

      medications: [
        {
          drugName: "",
          drugStrength: "",
          directions: "",
        },
      ],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);

      formSubmit(values);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <Container maxWidth="lg">
      <FormikProvider value={formik}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              className="w-100"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              label="Procedure Code"
              {...getFieldProps("procedureCode")}
              size="small"
            />

            <TextField
              fullWidth
              className="w-100"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              label="Diagnosis Code"
              {...getFieldProps("diagnosisCode")}
            />

            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="w-100"
              size="small"
              label="Allergies"
              {...getFieldProps("allergies")}
            />
          </Stack>

          <Divider light>Medications</Divider>

          <FieldArray
            name="medications"
            render={({ insert, remove, push }) => (
              <div>
                {values.medications.length > 0 &&
                  values.medications.map((item, index) => (
                    <div key={index}>
                      <div className="row" key={index}>
                        <div className="col">
                          <Field
                            name={`medications.${index}.drugName`}
                            placeholder="Drug Name"
                            type="text"
                            className="form-control p-1"
                            as={TextField}
                          />
                        </div>
                        <div className="col">
                          <Field
                            name={`medications.${index}.drugStrength`}
                            placeholder="Drug Strength"
                            type="text"
                            className="form-control p-1"
                            as={TextField}
                          />
                        </div>
                        <div className="col">
                          <Field
                            name={`medications.${index}.directions`}
                            placeholder="Directions"
                            type="text"
                            className="form-control p-1"
                            as={TextField}
                          />
                        </div>
                      </div>

                      <div>
                        <Divider light />
                      </div>

                      <Button
                        type="button"
                        onClick={() => remove(index)} // remove a friend from the list
                      >
                        Remove Medication
                      </Button>
                    </div>
                  ))}

                <Button
                  type="button"
                  onClick={() =>
                    push({
                      drugName: "",
                      drugStrength: "",
                      directions: "",
                    })
                  }
                >
                  {/* show this when user has removed all friends from the list */}
                  Add Medication
                </Button>
              </div>
            )}
          />
          <Divider light>Comments</Divider>
          <Stack spacing={3}>
            <TextField
              fullWidth
              maxRows={4}
              className="w-100 mt-3"
              size="small"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              label="Physician Comments"
              {...getFieldProps("physicianComments")}
            />
            <TextField
              fullWidth
              maxRows={4}
              className="w-100 mt-3 mb-2"
              size="small"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              label="Examination Summary"
              {...getFieldProps("examinationSummary")}
            />
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Save
          </LoadingButton>
        </Box>
      </FormikProvider>
    </Container>
  );
};
