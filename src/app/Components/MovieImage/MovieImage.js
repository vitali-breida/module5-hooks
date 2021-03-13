import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default class MovieImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose(e) {
    this.setState({ anchorEl: null });
  }

  handleEdit(e) {
    this.props.onEditMovie(e, this.props.movieId);
    this.handleClose(e);
  }

  handleDelete(e) {
    this.props.onDeleteMovie(e, this.props.movieId);
    this.handleClose(e);
  }

  componentDidMount() {
    console.log("MovieImage is mounted");
  }

  componentWillUnmount() {
    console.log("MovieImage is dismounted");
  }

  render() {
    return (
      <>
        <img
          alt="Poster"
          src={this.props.imageUrl}
          height="180"
          onClick={this.handleClick}
        />
        <Menu
          id="movie-context-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
          <MenuItem onClick={this.handleDelete}>Delete</MenuItem>
        </Menu>
      </>
    );
  }
}

MovieImage.propTypes = {
  movieId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired
};
