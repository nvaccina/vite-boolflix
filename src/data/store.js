import { reactive } from 'vue'

export const store = reactive ({

  baseUrl: 'https://api.themoviedb.org/3/',
  filmUrl: 'https://api.themoviedb.org/3/search/movie?',
  tvUrl: 'https://api.themoviedb.org/3/search/tv?',
  popularUrl:'https://api.themoviedb.org/3/search/movie/popular?',
  api_key: '09fd68118f8d909cc8f30914b2ee9fea',
  language: 'it-IT',
  page: 1,

  filmList: [],
  serieList: [],
  choseFilm: [],
  titleToSearch: '',
  type: '',
  isLoading: true,

})

