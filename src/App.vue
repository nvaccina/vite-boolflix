
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

      axios.get(store.apiUrl, {
        params:{
          query: store.titleToSearch,
          media_type: store.choseMediaType,
        }
        
      })
        .then(result => {
          console.log('Titolo cercato:', store.titleToSearch);
          store.filmList = result.data.results
          console.log('Nuovo elenco per titolo cercato', store.filmList);
          /*
          if(store.listMediaType.length === 0){
            store.filmList.forEach(element =>{
              if(!store.listMediaType.includes(element.media_type)){
                store.listMediaType.push(element.media_type)
              }
              console.log('Lista tipi',store.listMediaType);
            })
          }
          */
        })
    }
  },
  mounted(){
    this.getApi();
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