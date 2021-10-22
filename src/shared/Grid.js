import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { DataGrid, useGridSlotComponentProps } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function CustomPaginationGrid() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
        },
          ];
        
        const rows = [
        { id: 1, lastName: 'Ramya', firstName: 'Vyasabhattu', age: 35 },
        { id: 2, lastName: 'Nikitha', firstName: 'Reddy', age: 42 },
        { id: 3, lastName: 'Pooja', firstName: 'Jain', age: 45 },
        { id: 4, lastName: 'Mani', firstName: 'Kanta', age: 16 },
        { id: 5, lastName: 'Supriya', firstName: 'reddy', age: 30 },
        { id: 6, lastName: 'Neha', firstName: 'Singh', age: 44 },
        { id: 7, lastName: 'Thejaswini', firstName: 'SR', age: 36 },
        { id: 8, lastName: 'Poojitha', firstName: 'Reddy', age: 27 },
        { id: 9, lastName: 'Priyanka', firstName: 'Goud', age: 27 },
        { id: 10, lastName: 'Bhavya', firstName: 'Shetty', age: 27 },
        { id: 11, lastName: 'Tehaseen', firstName: 'Afreen', age: 27 },
        { id: 11, lastName: 'Tehaseen', firstName: 'Afreen', age: 27 },
        { id: 11, lastName: 'Tehaseen', firstName: 'Afreen', age: 27 },
        { id: 11, lastName: 'Tehaseen', firstName: 'Afreen', age: 27 },       
         { id: 11, lastName: 'Tehaseen', firstName: 'Afreen', age: 27 },

        { id: 11, lastName: 'Tehaseen', firstName: 'Afreen', age: 27 },




        ];
        

  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
      rows={rows}
      columns={columns}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
      
      />
    </div>
  );
}