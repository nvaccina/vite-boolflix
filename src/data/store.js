import {reactive} from 'vue'

export const store = reactive ({
  
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=09fd68118f8d909cc8f30914b2ee9fea&query=ritorno',
  filmList: [],
  titleToSearch: '',
})

