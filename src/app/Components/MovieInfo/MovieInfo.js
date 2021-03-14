import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
//import { useEffect } from "react";

export default function MovieInfo(props) {
  //let movie;
  // useEffect(() => {
  //   let movie = props.getMovieById(props.movieId);
  // });
  return (
    <Grid container>
      <Grid item xs={2}>
        <img
          alt="Poster"
          src={props.imageUrl}
          height="180"
          // onClick={handleClick}
        />
      </Grid>
      <Grid item xs={10}>
        description
      </Grid>
    </Grid>
  );
}

MovieInfo.propTypes = {
  movieId: PropTypes.number.isRequired
};
