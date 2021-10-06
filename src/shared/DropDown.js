import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {
  const [data, setdata] = React.useState('');

  const handleChange = (event) => {
      console.log(event.target.value)
    setdata(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data}
        //   label="Age"
          onChange={(e)=>handleChange(e)}
        >
        
         {props.data.map((d,i)=>{
             return <MenuItem value={d} key ={i}>{d}</MenuItem>
        }) }
        </Select>
     
      </FormControl>
    
    </div>
  );
}