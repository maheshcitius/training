import { Box , Container, Typography,TextField,Item,Button} from '@mui/material';
export const FormField = (props) => {

  
    return (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" >
        <Box gridColumn="span 4" textAlign= "center" alignSelf="center" marginTop="8%">
        <h6 >{props.name}</h6>
        </Box>
        <Box gridColumn="span 6">
          {props.children}
        </Box>
      
      </Box>

    )
}