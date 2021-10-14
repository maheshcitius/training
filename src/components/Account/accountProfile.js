import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';


const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const AccountProfile = ({user,...props}) => {


    console.log("account profile",user)

    return (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h6"
        >
   
          {user && user.firstname + " " + user.lastname }

        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {user && user.email }
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {user && user.role}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      {/* <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button> */}
    </CardActions>
  </Card>
  )

    }


export default AccountProfile;
