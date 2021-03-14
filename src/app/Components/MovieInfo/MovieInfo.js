import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function MovieInfo(props) {
  const movie = props.onGetMovieById(props.movieId);

  useEffect(() => {
    document.title = movie.title;

    return () => {
      document.title = "React app";
    };
  });

  return (
    <Grid container>
      <Grid item xs={2}>
        <img alt="Poster" src={movie.imageUrl} height="180" />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={9}>
        {movie.title} {movie.rating} <br />
        {movie.genre} <br />
        {movie.releaseDate} {movie.duration} <br />
        {movie.description}
      </Grid>
    </Grid>
  );
}

MovieInfo.propTypes = {
  movieId: PropTypes.number.isRequired,
  onGetMovieById: PropTypes.func.isRequired
};
