
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

      //Chiamata axios film
      axios.get(store.apiUrlFilm, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
        }
      })
        .then(result => {
          store.filmList = result.data.results;
          console.log('Titolo cercato:', store.titleToSearch);
          console.log('Nuovo elenco film', store.filmList);
        })

      //Chiamata axios serie tv
      axios.get(store.apiUrlTv, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
          
        }
      })
        .then(result => {
          store.serieList = result.data.results;
          console.log('Titolo cercato:', store.titleToSearch);
          console.log('Nuovo elenco serie', store.serieList);
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