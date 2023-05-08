
<script>
import axios from 'axios'
import {store} from './data/store'

import Header from './components/Header.vue'
import Main from './components/Main.Vue'

export default {
  name: 'App',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){

      let fullUrl = store.baseUrl;

      if (store.type === 'All') {
        fullUrl += 'movie?';
        fullUrl += 'tv?';

      } else if (store.type === 'Movie') {
        fullUrl += 'movie?';

      } else if (store.type === 'Tv') {
        fullUrl += 'tv?';
      }else{
        fullUrl += 'movie/popular?';
      }

      //Chiamata axios
      axios.get(fullUrl, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
          language: store.language,
        }
      })
        .then(result => {
          if(store.type === 'All'){

            store.filmList = result.data.results;
            console.log('film',store.filmList);

            store.serieList = result.data.results;
            console.log('serie', store.serieList);

          }else if (store.type === 'Movie') {
            store.filmList = result.data.results;

          } else if (store.type === 'Tv') {
            store.serieList = result.data.results;
          }else{
            store.filmList = result.data.results;
          }
          console.log('Titolo cercato:', store.titleToSearch);
        })
        
        .catch(error=>{
          store.filmList = [];
          store.serieList = [];
        })
    },
    //chiamata popular
    getApiPopular(){
      axios.get(store.popularUrl, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
          language: store.language,
        }
      })
        .then(result => {
            store.filmList = result.data.results;
            console.log('film',store.filmList);
        })

    }
  },
  mounted(){
    this.getApi();
    //chiamata popular
    this.getApiPopular()
  }

}
</script>

<template>


  <Header @restartSearch="getApi" />

  <Main/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>