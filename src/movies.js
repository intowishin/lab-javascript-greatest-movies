// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filtered = movies.filter((movie) => {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.indexOf('Drama') !== -1
    ) {
      return movie;
    }
  });

  return filtered.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (0 === movies.length) {
    return 0;
  }

  const sumScore = movies.reduce((accum, movie) => {
    if (!movie.score) {
      return accum;
    } else {
      return accum + movie.score;
    }
  }, 0);

  return parseFloat((sumScore / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const filtered = movies.filter((movie) => {
    if (movie.genre.indexOf('Drama') !== -1) {
      return movie;
    }
  });
  return scoresAverage(filtered);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMovies = [...movies].sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }

    if (a.year > b.year) {
      return 1;
    }

    return alphabetize(a,b)
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const alphabetize = (a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }

    return 1;
}

function orderAlphabetically(movies) {
  const sortedMovies = [...movies].sort(alphabetize).slice(0,20);
  return sortedMovies.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
