
<script>
import axios from 'axios'
import {store} from './data/store'

import SearchBar from './components/SearchBar.vue'
import Main from './components/Main.Vue'

export default {
  name: 'App',
  components:{
    SearchBar,
    Main
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){

      axios.get(store.apiUrlFilm, {
        params:{
          query: store.titleToSearch,
        }
        
      })
        .then(result => {
          
          store.filmList = result.data.results;
          console.log('Titolo cercato:', store.titleToSearch);
          console.log('Nuovo elenco per titolo cercato', store.filmList);

        })
      axios.get(store.apiUrlTv, {
        params:{
          query: store.titleToSearch,
          
        }
        
      })
        .then(result => {
          
          store.serieList = result.data.results;
          console.log('Titolo cercato:', store.titleToSearch);
          console.log('Nuovo elenco per titolo cercato', store.serieList);
          
        })
    }
  },
  mounted(){
    this.getApi()
  }

}
</script>

<template>

  <SearchBar @startSearch="getApi"/>

  <Main/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>