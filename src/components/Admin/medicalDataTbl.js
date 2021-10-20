import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { medicalDataActions } from '../../actions'

import {Box,Card , Tab  } from '@mui/material';
import { TabContext , TabList ,TabPanel } from '@mui/lab'



export const MedicalDataGrid = () => {

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
      });



const [page, setPage] = React.useState(0);
const [rows, setRows] = React.useState([]);
const [loading, setLoading] = React.useState(false);

const [value, setValue] = React.useState('1');

const dispatch = useDispatch();

const allergiesColums = [
  {field:'id',hide:true},
  {field:'AllergenSource',hide:false,headerName:"Source" ,editable: false , width: 140 , type:'string'},
  {field:'AllergyName',hide:false,headerName:"Allergy Name" ,editable: false , width: 140 , type:'string'},
  {field:'AllergyType',hide:false,headerName:"Allergy Type" ,editable: false , width: 140 , type:'string'},
  {field:'Isoforms_or_partial_sequences_of_allergen',hide:false,headerName:"ISO Forms" ,editable: false , width: 140 , type:'string'},


]

const medicationsColums = [
    {field:'ProductNo',hide:true},
    {field:'DrugName',hide:false,headerName:"Drug Name" ,editable: false , width: 140 , type:'string'},
    {field:'Form',hide:false,headerName:"Drug Form" ,editable: false , width: 140 , type:'string'},
    {field:'ApplNo',hide:false,headerName:"APPL No" ,editable: false , width: 140 , type:'string'},
    {field:'Strength',hide:false,headerName:"Strengths" ,editable: false , width: 140 , type:'string'},
    {field:'ActiveIngredient',hide:false,headerName:"Active Ingredient" ,editable: false , width: 140 , type:'string'},

  
  
  ]



let  medicalData = useSelector((state) => state.medicalData);

console.log("in medicaldata component",medicalData)


const handleChange = (event, newValue) => {
setValue(newValue);
};

React.useEffect(() => {
let active = true;

// (async () => {
//   setLoading(true);
//   const newRows = await loadServerRows(page, data);

//   if (!active) {
//     return;
//   }

//   setRows(newRows);
//   setLoading(false);
// })();

return () => {
  active = false;
};
}, [page, data]);




return (

        <Card>

        <Box sx={{ width: '100%', typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
       
        <Tab label="Medicines" value="1" />
        <Tab label="Allergies" value="2" />
      </TabList>
    </Box>
   
    <TabPanel value="1">
    <div style={{ height: 400, width: '100%' }}>
  <DataGrid
    rows={medicalData.allergies}
    columns={allergiesColums}
    pagination
    pageSize={5}
    rowsPerPageOptions={[5]}
    rowCount={100}
    paginationMode="server"
    onPageChange={(newPage) => setPage(newPage)}
    loading={loading}
  />
</div>
    </TabPanel>
    <TabPanel value="2">
    <div style={{ height: 400, width: '100%' }}>
  <DataGrid
    rows={medicalData.medications}
    columns={medicationsColums}
    pagination
    pageSize={5}
    rowsPerPageOptions={[5]}
    rowCount={100}
    paginationMode="server"
   // onPageChange={(newPage) => setPage(newPage)}
    loading={loading}
  />
</div>
    </TabPanel>
  </TabContext>
</Box>
       
        </Card>
     
)


}