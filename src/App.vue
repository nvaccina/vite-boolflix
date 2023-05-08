
<script>
import axios from 'axios'
import {store} from './data/store'

import Header from './components/Header.vue'
import Main from './components/Main.Vue'
import Loader from './components/partials/Loader.vue'

export default {
  name: 'App',
  components:{
    Header,
    Main,
    Loader
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    //getApi per prendere film e serie tv insieme
    getApiAll(){
      let URL1 = store.filmUrl
      let URL2 = store.tvUrl

      const promise1 = axios.get(URL1, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
          language: store.language,
          page: store.page,
        }
      });
      const promise2 = axios.get(URL2, {
        params:{
          api_key: store.api_key,
          query: store.titleToSearch,
          language: store.language,
          page: store.page,
        }
      });

      Promise.all([promise1, promise2]).then(function(result) {
        console.log('result oggetto doppio',result);

        store.filmList = result[0].data.results;
        console.log('result oggetto film',store.filmList);

        store.serieList = result[1].data.results;
        console.log('result oggetto tv',store.serieList);
        store.isLoading = false;


      }).catch(error => console.log(error));

    },
    //getApi generale per tutti
    getApi(){
      store.isLoading = true;

      let fullUrl = store.baseUrl;

      if (store.type === 'movie') {
        fullUrl += 'search/movie?';

      } else if (store.type === 'tv') {
        fullUrl += 'search/tv?';
      } else if(store.type === 'all'){
        this.getApiAll()
        return ;
      }else{
        fullUrl += 'movie/popular';
      }

      console.log(fullUrl);
      console.log(store.api_key);
      console.log(store.titleToSearch);
      console.log(store.language);
      console.log(store.page);

      //Chiamata axios
      axios.get(fullUrl, {
        params:{
          api_key: store.api_key,
          language: store.language,
          query: store.titleToSearch,
          page: store.page,
        }
      })
        .then(result => {
          if (store.type === 'movie') {
            store.filmList = result.data.results;

          } else if (store.type === 'tv') {
            store.serieList = result.data.results;
            
          }
          else{
            (store.filmList = result.data.results)
          } 
          store.isLoading = false;
          
        })
        
        .catch(error=>{
          store.filmList = [];
          store.serieList = [];
        })
    },
  },
  mounted(){
    this.getApi();
  }

}
</script>

<template>

  <Header @restartSearch="getApi" />

  <Loader v-if="store.isLoading"/>

  <Main v-else @gotonextprev="getApi"/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>