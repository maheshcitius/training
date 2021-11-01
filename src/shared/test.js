// import "./formik-demo.css";
import React from "react";
import { render } from "react-dom";
//  { MoreResources, DisplayFormikState } from "./formik-helper";

import { withFormik ,Field } from "formik";
import * as Yup from "yup";

import Select from "react-select";
import { userInformation } from '../services'


const emptyOption = { value: "", label: "" };
let formHandler ;
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
    title:''
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      speciality: values.speciality.value,
      physicianName: values.physicianName.value.split('-')[0],
    };
    
    console.log("ss",values)
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});


const MyForm=(props)=>  {
//   let state = {
//     prevspeciality: "",
//   };
const [prevspeciality, nextSpeciality] =React.useState("");

formHandler  = props.submit;

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

    let [user,setUser]=React.useState([])

    React.useEffect(() => {
        userInformation.getAll()
        .then((response)=>{
            setUser(response.data)
            // eslint-disable-next-line no-lone-blocks
        })
        .catch((error) => {
            console.log(error)
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
    
const specializations = [
    { value: "Dermatologist", label: "Dermatologist" },
    { value: "Dentist", label: "Dentist" },
    {value: "Gynaecology",label: "Gynaecology" },
    {value: "Opthamologist",label: "Opthamologist" },
  ];
  
var dt = {Dermatologist:[],Dentist:[]};
user.map(item => {
if (item.speciality ==='Dermatologist') {
        let s ={};
        s.label = item.firstname
        s.value = item.firstname + '-' + item.physicianId;
        dt.Dermatologist.push(s);
}
else if(item.speciality==='Dentist')
{
    let s ={};
    s.label = item.firstname
    s.value = item.firstname + '-' + item.physicianId;
    dt.Dentist.push(s);
}
})

  const physicianNames =dt;
  console.log(physicianNames,"physicianNames")

 

    const handleSpecializationChange =(field, value) => {
        console.log(value.value);
      const newspecialityValue = value.value;
      const shouldResetDependentSelect =
        newspecialityValue !== prevspeciality;
        nextSpeciality( prevspeciality );
        setFieldValue(field, value);
        if (shouldResetDependentSelect) {
          setFieldValue("physicianName", emptyOption);
    
      }
    }
    return (
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="speciality" style={{ display: "block" }}>
            speciality
          </label>
         
          <MySelect
            name="speciality"
            options={specializations}
            value={values.speciality}
            onChange={(field,value)=>handleSpecializationChange(field,value)}
            onBlur={setFieldTouched}
            error={errors.speciality}
            touched={touched.speciality}
          />
        </div>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="physicianName" style={{ display: "block" }}>
            physicianName
          </label>
          <MySelect
            name="physicianName"
            // isDisabled={!values.speciality.value}
            options={
              values.speciality.value ? physicianNames[values.speciality.value] : []
            }
            value={values.physicianName}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.physicianName}
            touched={touched.physicianName}
          />
        </div>

             
        <Field
                          name='title'
                          placeholder="Title"
                          type="text"
                        /> 

        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>

      </form>
    );
  }


const  MySelect =(props)=> {
   const defaultProps = {
    isDisabled: false,
  };

 const  handleChange = (value) => {
      console.log("hc",value);
    // this is going to call setFieldValue and manually update values[props.name]
    props.onChange(props.name, value);
  };

//   handleBlur = () => {
//     // this is going to call setFieldTouched and manually update touched[props.name]
//     props.onBlur(props.name, true);
//   };

    return (
      <React.Fragment>
        <Select
          id={props.name}
          name={props.name}
          options={props.options}
          onChange={handleChange}
       //   onBlur={handleBlur}
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
  
}
export  const MyEnhancedForm = formikEnhancer(MyForm);



