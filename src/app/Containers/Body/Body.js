import ResultsCount from "../../Components/ResultsCount/ResultsCount";
import ResultsFilter from "../../Components/ResultsFilter/ResultsFilter";
import ResultsSort from "../../Components/ResultsSort/ResultsSort";
import ResultsBody from "../ResultsBody/ResultsBody";
import Box from "@material-ui/core/Box";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import PropTypes from "prop-types";

export default function Body(props) {
  return (
    <>
      <Box display="flex">
        <Box width="50%">
          <ResultsFilter />
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          <ResultsSort
            sortBy={props.sortBy}
            onChangeSortBy={props.onChangeSortBy}
          />
        </Box>
      </Box>

      <ErrorBoundary>
        <ResultsCount />
        <ResultsBody
          movies={props.movies}
          onEditMovie={props.onEditMovie}
          onDeleteMovie={props.onDeleteMovie}
          isMovieInfoMode={props.isMovieInfoMode}
          onSetMovieInfoMode={props.onSetMovieInfoMode}
          selectedMovieId={props.selectedMovieId}
          onSetSelectedMovieId={props.onSetSelectedMovieId}
        />
      </ErrorBoundary>
    </>
  );
}

Body.propTypes = {
  movies: PropTypes.array.isRequired,
  sortBy: PropTypes.oneOf(["releaseDate", "title"]),
  onChangeSortBy: PropTypes.func.isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
  isMovieInfoMode: PropTypes.bool.isRequired,
  onSetMovieInfoMode: PropTypes.func.isRequired,
  selectedMovieId: PropTypes.number,
  onSetSelectedMovieId: PropTypes.func.isRequired
};
