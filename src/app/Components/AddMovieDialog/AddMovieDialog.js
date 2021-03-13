import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default function AddMovieDialog(props) {
  return (
    <div>
      <Dialog
        open={props.show}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ADD MOVIE</DialogTitle>
        <DialogContent>
          <form autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              id="date"
              //label="Release Date"
              type="date"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              id="movieUrl"
              label="Movie URL"
              type="url"
              variant="outlined"
              fullWidth
            />
            <TextField
              select
              margin="dense"
              id="name"
              label="Genre"
              variant="outlined"
              fullWidth
            >
              <MenuItem value={1}>Crime</MenuItem>
              <MenuItem value={2}>Documentary</MenuItem>
              <MenuItem value={3}>Horror</MenuItem>
              <MenuItem value={4}>Comedy</MenuItem>
            </TextField>
            <TextField
              margin="dense"
              id="overview"
              label="Overview"
              type="text"
              variant="outlined"
              placeholder="Overview text goes here"
              fullWidth
            />
            <TextField
              margin="dense"
              id="runtime"
              label="Runtime"
              type="text"
              variant="outlined"
              placeholder="Runtime text goes here"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Reset
          </Button>
          <Button onClick={props.onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddMovieDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
