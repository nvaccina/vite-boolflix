import { reactive } from 'vue'

export const store = reactive ({

  baseUrl: 'https://api.themoviedb.org/3/search/',
  popularUrl:'https://api.themoviedb.org/3/search/movie/popular?',
  api_key: '09fd68118f8d909cc8f30914b2ee9fea',
  language: 'it-IT',

  filmList: [],
  serieList: [],
  choseFilm: [],
  titleToSearch: '',
  type: '',

})

