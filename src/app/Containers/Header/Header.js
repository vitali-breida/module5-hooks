import AddMovieButton from "../../Components/AddMovieButton/AddMovieButton";
import Search from "../../Components/Search/Search";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <>
      <AddMovieButton onAddMovie={props.onAddMovie} />
      <Search />
    </>
  );
}

Header.propTypes = {
  onAddMovie: PropTypes.func.isRequired
};
