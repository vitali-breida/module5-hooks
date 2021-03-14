import AddMovieButton from "../../Components/AddMovieButton/AddMovieButton";
import Search from "../../Components/Search/Search";
import PropTypes from "prop-types";
import MovieInfo from "../../Components/MovieInfo/MovieInfo";
import Logo from "../../Components/Logo/Logo";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "../../Components/SearchIcon/SearchIcon";

export default function Header(props) {
  if (props.isMovieInfoMode) {
    return (
      <>
        <Grid container>
          <Grid item xs={10}>
            <Logo />
          </Grid>
          <Grid item={2}>
            <SearchIcon onCancelInfoMode={props.onCancelInfoMode} />
          </Grid>
        </Grid>
        <MovieInfo
          movieId={props.selectedMovieId}
          onGetMovieById={props.onGetMovieById}
        />
      </>
    );
  } else
    return (
      <>
        <Logo />
        <AddMovieButton onAddMovie={props.onAddMovie} />
        <Search />
      </>
    );
}

Header.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
  isMovieInfoMode: PropTypes.bool.isRequired,
  onCancelInfoMode: PropTypes.func.isRequired,
  selectedMovieId: PropTypes.number,
  onGetMovieById: PropTypes.func.isRequired
};
