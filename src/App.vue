
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
        fullUrl += 'search/multi?';
      } else if (store.type === 'Movie') {
        fullUrl += 'search/movie?';
      } else if (store.type === 'Tv') {
        fullUrl += 'search/tv?';
      }

      //Chiamata axios
      axios.get(fullUrl, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
        }
      })
        .then(result => {
          if(store.type === 'All'){
            console.log('Ciao a tutti');

          }else if (store.type === 'Movie') {
            store.filmList = result.data.results;
          } else if (store.type === 'Tv') {
            store.serieList = result.data.results;
          }
          console.log('Titolo cercato:', store.titleToSearch);
        })
        .catch(error=>{
          store.filmList = [];
          store.serieList = [];
        })
    }
  },
  mounted(){
    this.getApi()
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