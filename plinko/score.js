/**
 * Tools : https://stephengrider.github.io/JSPlaygrounds/
 */
const PREDICTION_POINT = 300;
const K = 3;

const data = [];

function distance(point, predictionPoint) {
  return Math.abs(point - predictionPoint);
}

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  data.push([dropPosition, bounciness, size, bucketLabel]);
}

// https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm
function runAnalysis() {
  const bucketNumber = _.chain(data)
    .map((row) => [distance(row[0], PREDICTION_POINT), row[3]])
    .sortBy((row) => row[0])
    .slice(0, K)
    .countBy((row) => row[1])
    .toPairs()
    .sortBy((row) => row[1])
    .last()
    .first()
    .parseInt()
    .value()

   console.log('Your point will probably fall into',bucketNumber) 
}
