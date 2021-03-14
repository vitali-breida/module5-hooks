import PropTypes from "prop-types";

export default function SearchIcon(props) {
  return <div onClick={props.onCancelInfoMode}>search</div>;
}

SearchIcon.propType = {
  onCancelInfoMode: PropTypes.func.isRequired
};
