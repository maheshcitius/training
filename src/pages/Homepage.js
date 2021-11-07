import React from 'react';
import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    Box,
    Alert,
    ListItemIcon,
    AppBar,
    Toolbar,
    IconButton,
    Grid,
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Paper  
  } from '@mui/material';

const Homepage = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PatientPortal
              </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Register</Button>
            </Toolbar>
          </AppBar>
          <Container>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={8}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} item>
                    <Paper sx={{ height: 140, width: 100 }} >Content</Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container >
            <footer className="footer" style={{
                flexShrink: 0,
                textAlign: "center",
                backgroundColor: "tomato",
                color: "white",
            }}>
              <p>Some footer nonsense!</p>
            </footer>
        </Box>
    );
}

export default Homepage;