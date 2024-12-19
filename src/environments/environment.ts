// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCpjhyol-x0npmKyhuGqvzGN0UJDH96CVU",
    authDomain: "david-angular.firebaseapp.com",
    projectId: "david-angular",
    storageBucket: "david-angular.firebasestorage.app",
    messagingSenderId: "112678399574",
    appId: "1:112678399574:web:6bcac3335075f2883b95f7",
    measurementId: "G-YF2K6L4309"
  },
  apiBaseUrlMovie: 'https://api.themoviedb.org/3',
  apiTokenMovie: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjA2ZDE0MzcwZmIwNTc3Y2FiN2UzOGNkYTFmMDg0MSIsIm5iZiI6MTYzMjkzNDgwMi41MzUsInN1YiI6IjYxNTQ5YjkyZDIxNDdjMDA0NGRjOTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jw0Png11qNgzv9GQW3AclxrdqO0NT4iWyrJzTuMywjc',
  endpoints: {
    movie: "movie",
    now_playing: "now_playing"
  }
};
