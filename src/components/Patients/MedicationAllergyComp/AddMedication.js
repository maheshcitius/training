import { useState } from 'react';
import { Box , Container, Typography,TextField,Item,Button,Modal} from '@mui/material';

export const AddMedication =  (props) => {

    
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


   return (
       <div>
    <Button color="primary" variant="contained" style={{marginTop: 10}} fullWidth type="submit" onClick={handleOpen}>Add Medication</Button>
    <Modal
      open={open}
      
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add medication detail
        </Typography>
        <TextField
            id="SocialDrugs"
            name="SocialDrugs"
            fullWidth
            margin="normal"
            label="Drug Name"
            autoComplete=""
            autoFocus
            variant="standard"
            
           
          />
           <TextField
            id="SocialDrugs"
            name="SocialDrugs"
            fullWidth
            margin="normal"
            label="Drug Strength"
            autoComplete=""
            autoFocus
            variant="standard"
           
          
          />
           <TextField
            id="SocialDrugs"
            name="SocialDrugs"
            fullWidth
            margin="normal"
            label="Drug Type"
            autoComplete=""
            autoFocus
            variant="standard"
           
          />
           <TextField
            id="SocialDrugs"
            name="SocialDrugs"
            fullWidth
            margin="normal"
            label="Drug Prescribed by"
            autoComplete=""
            autoFocus
            variant="standard"
          
          />
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color ="primary">Save</Button>
      </Box>
    </Modal>
    </div>
   )
}