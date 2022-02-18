const numberOfFilms = prompt('How much movies did you seen?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
}
const a = prompt('Введите 1 из просмотреных фильмов', ""),
      b = prompt("Как вы оцениваете фильм?", ""),
      c = prompt('Введите 1 из просмотреных фильмов', ""),
      d = prompt("Как вы оцениваете фильм?", "");


personalMovieDB[a] + b;
personalMovieDB[c] + d;

console.log(numberOfFilms);
console.log(personalMovieDB);
