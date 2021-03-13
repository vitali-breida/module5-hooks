import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

export default class DeleteMovieDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.show}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">DELETE MOVIE</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this movie?
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onSubmit} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DeleteMovieDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
