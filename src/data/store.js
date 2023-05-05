import { reactive } from 'vue'

export const store = reactive ({

  apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=e99307154c6dfb0b4750f6603256716d&query=',
  //apiUrlGeneral:'',
  apiUrlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=09fd68118f8d909cc8f30914b2ee9fea&query=',
  apiUrlTv: 'https://api.themoviedb.org/3/search/tv?api_key=09fd68118f8d909cc8f30914b2ee9fea&query=',

  lista: [],
  filmList: [],
  serieList: [],
  choseFilm: [],
  titleToSearch: '',
  //listMediaType: [],
  filmMediaType: 'movie',

/*
  methods:{
    choseApiUrl(value){
      if(value === movie){
        store.apiUrl === store.apiUrlFilm

      }else if(value === tv){
        store.apiUrl === store.apiUrlTv

      }else if(value === all){
        store.apiUrl === store.apiUrlGeneral
      }
    }
  }
*/
})

