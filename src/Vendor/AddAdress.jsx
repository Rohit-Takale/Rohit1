import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    color: "#FFFFFF",
    width: 120,
    height: 25,
    borderRadius: 5,
  },
});

export default function AddAdress() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Adress added");

    setOpen(false);
  };
  return (
    <div>
      <button
        className={classes.button}
        style={{ backgroundColor: "#4ddaf8", border: "1px solid #4ddaf8" }}
        onClick={handleClickOpen}
      >
        Add Address
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Address</DialogTitle>
        <form onSubmit={{ handleSubmit }}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Locality"
              type="email"
              fullWidth
            />{" "}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Building No"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="PinCode"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="city"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Contact no"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <button
              className={classes.button}
              style={{
                backgroundColor: "#FE3131",
                border: "1px solid #FE3131",
              }}
              onClick={handleClose}
              color="primary"
            >
              Cancel
            </button>
            <button
              className={classes.button}
              style={{
                backgroundColor: "#4ddaf8",
                border: "1px solid #4ddaf8",
              }}
              onClick={handleSubmit}
              color="primary"
            >
              Add
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
