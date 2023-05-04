import { reactive } from 'vue'

export const store = reactive ({

  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=09fd68118f8d909cc8f30914b2ee9fea&query=',
  //apiUrlFilm: 'https://api.themoviedb.org/3/search/multi?api_key=09fd68118f8d909cc8f30914b2ee9fea&query=',
  //apiUrlTv: 'https://api.themoviedb.org/3/search/tv?api_key=09fd68118f8d909cc8f30914b2ee9fea&query=',


  filmList: [],
  choseFilm: [],
  titleToSearch: '',
  listMediaType: [],
  choseMediaType: '',
})

