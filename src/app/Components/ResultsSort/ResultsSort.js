import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default function ResultsSort(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleSort = (e) => {
    let sortBy = e.currentTarget.dataset["value"];
    props.onChangeSortBy(e, sortBy);
    handleClose(e);
  };

  return (
    <>
      <Menu
        id="menu-sort-by"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem data-value="releaseDate" onClick={handleSort}>
          Release Date
        </MenuItem>
        <MenuItem data-value="title" onClick={handleSort}>
          Title
        </MenuItem>
      </Menu>
      <Button onClick={handleClick}>SortBy</Button>
      <Button disabled>{props.sortBy}</Button>
    </>
  );
}

ResultsSort.propTypes = {
  sortBy: PropTypes.oneOf(["releaseDate", "title"]),
  onChangeSortBy: PropTypes.func.isRequired
};
