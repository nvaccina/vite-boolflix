
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
      axios.get(store.apiUrl,{
        params:{
          original_title: store.titleToSearch,
        }
      })
      .then(result => {
        store.filmList = result.data.results
        
        console.log(store.titleToSearch);

        console.log(store.filmList);
        
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