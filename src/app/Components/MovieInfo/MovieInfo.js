import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import useDocumentTitle from "../../Hooks/useDocumentTitle/useDocumentTitle";

export default function MovieInfo(props) {
  const movie = props.onGetMovieById(props.movieId);

  useDocumentTitle(movie.title);

  return (
    <Grid container>
      <Grid item xs={2}>
        <img
          alt="Poster"
          src={movie.imageUrl}
          height="180"
          onClick={props.onCalcRecommended}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={9}>
        {movie.title} {movie.rating} <br />
        {movie.genre} <br />
        {movie.releaseDate} {movie.duration} <br />
        {movie.description} <br />
      </Grid>
    </Grid>
  );
}

MovieInfo.propTypes = {
  movieId: PropTypes.number.isRequired,
  onGetMovieById: PropTypes.func.isRequired,
  onCalcRecommended: PropTypes.func.isRequired
};
