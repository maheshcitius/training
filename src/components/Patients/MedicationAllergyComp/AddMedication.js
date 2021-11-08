import { useRef, useState } from 'react';
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
 const [dname,setDname] = useState('');
 const [dtype,setDtype] = useState('')
 const [dstrength,setDstrength] = useState('')
 const [dprecribe,setDprecribe] = useState('')
 const [ddirection,setDdirection] = useState('')

 const values = {
  drugName: dname,
  drugStrength: dstrength,
  directions: ddirection,
  prescribeBy: dprecribe,
  type: dtype}

 const handleSave =(values)=>{
  props.addmedication(values)
  
  handleClose()

 }


   return (
       <div>
    <Button color="primary" variant="contained" style={{marginLeft : 100}} type="submit" onClick={handleOpen}>Add Medication</Button>
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
            onChange = {(e)=>setDname(e.target.value)}
            
           
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
            onChange = {(e)=>setDstrength(e.target.value)}
           
          
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
            onChange = {(e)=>setDtype(e.target.value)}
           
          />
           <TextField
            id="SocialDrugs"
            name="SocialDrugs"
            fullWidth
            margin="normal"
            label="Drug Directions to use"
            autoComplete=""
            autoFocus
            variant="standard"
            onChange = {(e)=>setDdirection(e.target.value)}
          
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
            onChange = {(e)=>setDprecribe(e.target.value)}
          
          />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick ={()=>handleSave(values)}variant="contained" color ="primary">Save</Button>
      </Box>
    </Modal>
    </div>
   )
}