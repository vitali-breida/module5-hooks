import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default function AddMovieButton(props) {
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={props.onAddMovie}>+ Add movie</Button>
      </Box>
    </>
  );
}

AddMovieButton.propTypes = {
  onAddMovie: PropTypes.func.isRequired
};
