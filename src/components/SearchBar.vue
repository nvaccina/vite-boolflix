<script>
import {store} from '../data/store'

export default {
  name: 'SearchBar',
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <div class="container d-flex justify-content-between align-items-center">
    <div class="logo">
      <a href="#">LOGO</a>
    </div>

    <div class="search_bar d-flex align-items-center">

      <div class="me-3">
        <input v-model.trim="store.titleToSearch" type="text" class="form-control" placeholder="Cerca qui il titolo">
      </div>

      <select v-model="store.choseMediaType" class="form-select" aria-label="Default select example">

        <option value="" selected>All</option>
        <option 
          v-for="media_type in store.listMediaType"
          :key="media_type" 
          :value="media_type"
          
        >{{media_type}}</option>
      </select>

      <button type="button" class="btn btn-primary mx-4" @click="$emit('startSearch')">SEARCH</button>

    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.search_bar{
  height: 100px;
  .form-control{
    width: 300px;
  }
  .form-select{
    width: 200px;
  }
}
  


</style>