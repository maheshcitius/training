import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
export const Home = () => {
  return (
    <body id="page-top">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Patient Portal
            </Typography>
            <Button
              color="inherit"
              startIcon={<LoginIcon />}
              to="login"
              component={NavLink}
            >
              Login
            </Button>
            <Button color="inherit" to="register" component={NavLink}>
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <header className="masthead text-center text-white bg-success">
        <div className="masthead-content">
          <div className="container px-5 py-5">
            <h1 className="masthead-heading mb-0"> </h1>

            <Typography variant="h2" component="div" gutterBottom>
              Patient Management System
            </Typography>

            <Button
              color="warning"
              variant="outlined"
              className="border"
              to="register"
              component={NavLink}
              endIcon={<AddToQueueIcon />}
            >
              Book Appointment
            </Button>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
      <section id="scroll">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src="/static/doc1.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>
                  This portal will be helpful to capture & to store patient data
                  accurately. It eliminates the need of tracking patients
                  previous paper based medical records and also assists in
                  ensuring data is up-to-date, accurate & legible. This portal
                  decreases the risk of lost paperwork & is cost efficient
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src="/static/doc2.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">Safe and Secure</h2>
                <p>
                  This portal will be helpful to capture & to store patient data
                  accurately. It eliminates the need of tracking patients
                  previous paper based medical records and also assists in
                  ensuring data is up-to-date, accurate & legible. This portal
                  decreases the risk of lost paperwork & is cost efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src="/static/doc3.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4"> Patient Satisfaction</h2>
                <p>
                  Patient Portal enables end user to be in control of your
                  health and care, it also saves your time, help you communicate
                  with your doctor and support care between your visits. Patient
                  Portal POC will be provide customized dashboard with required
                  patient information for following end users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5 bg-black">
        <div className="container px-5">
          <p className="m-0 text-center text-white small">
            Copyright &copy; Patient Portal 2021
          </p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </body>
  );
};
