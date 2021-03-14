import PropTypes from "prop-types";
import SearchIconMUI from "@material-ui/icons/Search";

export default function SearchIcon(props) {
  return <SearchIconMUI onClick={props.onCancelInfoMode}>search</SearchIconMUI>;
}

SearchIcon.propType = {
  onCancelInfoMode: PropTypes.func.isRequired
};
