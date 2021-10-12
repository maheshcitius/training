import {
  Box,
  Container,
  Grid
} from '@mui/material';
import AccountProfile from '../components/Account/accountProfile';
import AccountProfileDetails from '../components/Account/accountProfileDetails';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from '../actions/index'

const Account = () => {

    const userInfo = useSelector((state) => state.authentication);
    const dispatch = useDispatch();
    const { updateUser } = bindActionCreators(userActions, dispatch);

    const handleSubmit = (values) => {
       let userId =  JSON.parse(localStorage.getItem('user')).user.id;
        let payload = {
            email: values.email,
            firstname:values.firstName,
            lastname:values.lastName,
            phone:values.phone 
          }

          console.log("in profile js",userId)

        updateUser(userId,payload)
      };

    return (

  <>
    
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile  user={userInfo.user.user}/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails submit={handleSubmit} user={userInfo.user.user} />
          </Grid>
        </Grid>
      </Container>
  
  </>
    )
    };

export default Account;
