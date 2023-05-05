import { reactive } from 'vue'

export const store = reactive ({

  baseUrl: 'https://api.themoviedb.org/3/',
  apiUrlFilm: 'https://api.themoviedb.org/3/search/movie?',
  apiUrlTv: 'https://api.themoviedb.org/3/search/tv?',
  api_key: '09fd68118f8d909cc8f30914b2ee9fea',
  language: 'it-IT',

  lista: [],
  filmList: [],
  serieList: [],
  choseFilm: [],
  titleToSearch: null,
  type: 'All',

})

