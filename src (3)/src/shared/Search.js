import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";


const Search= (props)=> {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(props.dataList);
  const dispatch = useDispatch();

  //columns included for search
  const includeColumns = props.includeColumns;
  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(props.dataList);
    else {
      const filteredData = props.dataList.filter(item => {
        return Object.keys(item).some((key) =>
        includeColumns.includes(key) ? item[key].toString().toLowerCase().includes(lowercasedValue) : false
        );
      });
      setData(filteredData);
      console.log(data)
    }
  }

  return (
    <div >  
      <TextField id="standard-basic" label="Search" variant="standard"
      type="text"
      placeholder="Type to search..."
      value={searchText}
      onChange={e => handleChange(e.target.value)}
       />
    </div>
  );
}

export default Search;