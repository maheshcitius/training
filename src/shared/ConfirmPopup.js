import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function ConfirmPopup(props) {
  const { title, children, subtile, openConfirmPopup, setConfirmOpenPopup } =
    props;
  const classes = useStyles();

  return (
    <Dialog
      open={openConfirmPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button
            color="secondary"
            onClick={() => {
              setConfirmOpenPopup(false, false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <p>{subtile}</p>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          onClick={() => {
            setConfirmOpenPopup(false, true);
          }}
        >
          Confirm Delete
          <DeleteForeverIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
}
