import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default class ResultsSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose(e) {
    this.setState({ anchorEl: null });
  }

  handleSort(e) {
    let sortBy = e.currentTarget.dataset["value"];
    this.props.onChangeSortBy(e, sortBy);
    this.handleClose(e);
  }

  render() {
    return (
      <>
        <Menu
          id="menu-sort-by"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem data-value="releaseDate" onClick={this.handleSort}>
            Release Date
          </MenuItem>
          <MenuItem data-value="title" onClick={this.handleSort}>
            Title
          </MenuItem>
        </Menu>
        <Button onClick={this.handleClick}>SortBy</Button>
        <Button disabled>{this.props.sortBy}</Button>
      </>
    );
  }
}

ResultsSort.propTypes = {
  sortBy: PropTypes.oneOf(["releaseDate", "title"]),
  onChangeSortBy: PropTypes.func.isRequired
};
