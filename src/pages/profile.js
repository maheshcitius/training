import {
  Box,
  Container,
  Grid
} from '@mui/material';
import AccountProfile from '../components/Account/accountProfile';
import AccountProfileDetails from '../components/Account/accountProfileDetails';
import { useSelector } from "react-redux";



const Account = () => {

    const userInfo = useSelector((state) => state.authentication);


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
            <AccountProfileDetails user={userInfo.user.user} />
          </Grid>
        </Grid>
      </Container>
  
  </>
    )
    };

export default Account;
