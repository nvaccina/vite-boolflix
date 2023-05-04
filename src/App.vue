
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
  }

}
</script>

<template>
  
  <SearchBar/>

  <Main/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>