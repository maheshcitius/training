import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider, Field, FieldArray } from "formik";
import React from "react";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import SaveIcon from "@mui/icons-material/Save";

// material
import { Card, Container, Button, Stack, Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 680,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export const MandA = (props) => {
  let formSubmit = props.submit;

  const formik = useFormik({
    initialValues: {
      procedureCode: "",
      diagnosisCode: "",
      allergies: "",

      medications: [
        {
          drugName: "",
          drugStrength: "",
          directions: "",
        },
      ],
    },
    onSubmit: (values) => {
      formSubmit(values);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <Card className="w-100">
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    className="w-100"
                    type="text"
                    label="Procedure Code"
                    {...getFieldProps("procedureCode")}
                    size="small"
                  />

                  <TextField
                    fullWidth
                    className="w-100"
                    size="small"
                    label="Diagnosis Code"
                    {...getFieldProps("diagnosisCode")}
                  />

                  <TextField
                    fullWidth
                    className="w-100"
                    size="small"
                    label="Allergies"
                    {...getFieldProps("allergies")}
                  />
                </Stack>

                <Divider light />
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
              </Box>

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
            </Form>
          </FormikProvider>
        </Card>
      </ContentStyle>
    </Container>
  );
};
