import React ,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';

export const AppointmentTbl = (props) => {

    

const [page, setPage] = useState(0);
const [rows, setRows] = useState([]);
const [loading, setLoading] = useState(false);

console.log("Appointments ", props.data);
const allergiesColums = [
    {field:'id',hide:true},
    {field:'AllergenSource',hide:false,headerName:"Source" ,editable: false , width: 140 , type:'string'},
    {field:'AllergyName',hide:false,headerName:"Allergy Name" ,editable: false , width: 140 , type:'string'},
    {field:'AllergyType',hide:false,headerName:"Allergy Type" ,editable: false , width: 140 , type:'string'},
    {field:'Isoforms_or_partial_sequences_of_allergen',hide:false,headerName:"ISO Forms" ,editable: false , width: 140 , type:'string'},
  
  
  ]

    return (
        <>
            {/* <DataGrid
    rows={props.data}
    columns={allergiesColums}
    pagination
    pageSize={5}
    rowsPerPageOptions={[5]}
    rowCount={100}
    paginationMode="server"
    onPageChange={(newPage) => setPage(newPage)}
    loading={loading}
  /> */}
        </>
    )
}
