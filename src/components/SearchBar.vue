<script>
import {store} from '../data/store'

export default {
  name: 'SearchBar',
  data(){
    return{
      store
    }
  },
  methods:{
    //Reset
    reset(){
      store.filmList = [];
      store.serieList = [];
      fullUrl = store.baseUrl;
      this.$emit('startSearch')
    }
  }
  
}
</script>

<template>

  <div class="search_bar d-flex align-items-center">

    <div class="me-3">
      <input 
        v-model.trim="store.titleToSearch" 
        type="text" 
        class="form-control" 
        placeholder="Cerca qui il titolo"
        @keyup.enter="$emit('startSearch')"
      >

    </div>

    <select class="form-select" v-model="store.type" aria-label="Default select example">

      <option @change="reset" value="All" selected>All</option>
      <option @change="reset" value="Movie" >Movie</option>
      <option @change="reset" value="Tv" >Tv</option>
      
    </select>

    <button type="button" class="btn btn-primary mx-4" @click="$emit('startSearch'), reset()">SEARCH</button>

  </div>
  
</template>

<style lang="scss" scoped>

.search_bar{
  .form-control{
    width: 300px;
  }
  .form-select{
    width: 100px;
  }
}
  


</style>