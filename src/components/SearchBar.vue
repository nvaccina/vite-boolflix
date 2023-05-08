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

      <option value="All" selected>All</option>
      <option value="Movie" >Movie</option>
      <option value="Tv" >Tv</option>
      
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
  button{
    background-color: red;
    border: 0;
    font-weight: bold;
    &:active{
      background-color: white;
      color: red;
    }
  }
}
  


</style>