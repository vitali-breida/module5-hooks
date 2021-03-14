import MovieCard from "../MovieCard/MovieCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";

export default function ResultsBody(props) {
  return (
    <GridList cellHeight="auto" cols={3}>
      {props.movies.map((movie) => (
        <GridListTile key={movie.title}>
          <MovieCard
            movieId={movie.id}
            title={movie.title}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            imageUrl={movie.imageUrl}
            onEditMovie={props.onEditMovie}
            onDeleteMovie={props.onDeleteMovie}
            isMovieInfoMode={props.isMovieInfoMode}
            onSetMovieInfoMode={props.onSetMovieInfoMode}
            selectedMovieId={props.selectedMovieId}
            onSetSelectedMovieId={props.onSetSelectedMovieId}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

PropTypes.ResultsBody = {
  movies: PropTypes.array.isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
  isMovieInfoMode: PropTypes.bool.isRequired,
  onSetMovieInfoMode: PropTypes.func.isRequired,
  selectedMovieId: PropTypes.number,
  onSetSelectedMovieId: PropTypes.func.isRequired
};
