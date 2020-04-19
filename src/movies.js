// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = movies.map((movies) => {
  return movies.director; 
});

console.log(getAllDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = movies.map( movie => {
  const movieDirector = movie.director === 'Steven Spielberg';
  const movieGenre = movie.genre.includes('Drama');
  return {
    movieDirector: movieDirector.length,
    movieGenre: movieGenre.length
  }
});

console.log(howManyMovies)


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movies.reduce((sum, elem) => {
  return sum += elem.rate;
}, 0);

const averageRate = Math.round(ratesAverage/movies.length);

console.log(`Average rate: ${averageRate}`);

//[Help-info] https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202004_LIS/units/ironhack-course-chapter-sequential_3-vertical

// Iteration 4: Drama movies - Get the average of Drama Movies

 const dramaMoviesRate = movies.reduce((sum, elem) => {
  return sum += elem.genre.includes('Drama');
}, 0);

const averageDramaRate = Math.round(dramaMoviesRate/movies.length);

console.log(`Average Drama rate: ${averageDramaRate}`); 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
}

console.log();

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) =>{

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
