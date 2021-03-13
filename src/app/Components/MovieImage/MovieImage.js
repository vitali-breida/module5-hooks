import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default function MovieImage(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleEdit = (e) => {
    props.onEditMovie(e, props.movieId);
    handleClose(e);
  };

  const handleDelete = (e) => {
    props.onDeleteMovie(e, props.movieId);
    handleClose(e);
  };

  return (
    <>
      <img
        alt="Poster"
        src={props.imageUrl}
        height="180"
        onClick={handleClick}
      />
      <Menu
        id="movie-context-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
}

MovieImage.propTypes = {
  movieId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired
};
