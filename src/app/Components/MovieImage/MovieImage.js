import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default function MovieImage(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    if (!props.isMovieInfoMode) {
      props.onSetMovieInfoMode(e, props.movieId);
    } else {
      if (props.movieId !== props.selectedMovieId) {
        props.onSetSelectedMovieId(props.movieId);
      } else {
        setAnchorEl(e.currentTarget);
      }
    }
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
        // width="50%"
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
  onDeleteMovie: PropTypes.func.isRequired,
  isMovieInfoMode: PropTypes.bool.isRequired,
  onSetMovieInfoMode: PropTypes.func.isRequired,
  selectedMovieId: PropTypes.number,
  onSetSelectedMovieId: PropTypes.func.isRequired
};
