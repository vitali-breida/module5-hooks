import MovieCard from "../MovieCard/MovieCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";

export default function ResultsBody(props) {
  return (
    <GridList cellHeight={250} cols={3}>
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
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

PropTypes.ResultsBody = {
  movies: PropTypes.array.isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired
};
