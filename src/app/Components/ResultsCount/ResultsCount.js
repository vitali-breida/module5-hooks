export default function ResultsCount(props) {
  return <div>{props.count} movies found</div>;
}

ResultsCount.defaultProps = {
  count: 39
};
