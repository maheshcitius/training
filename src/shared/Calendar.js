import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function  CustomDateTimePicker() {
  const [value, setValue] = React.useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}> 
        <DateTimePicker
          clearable
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField {...params}/>
          )}
        />
    </LocalizationProvider>
  );
}
