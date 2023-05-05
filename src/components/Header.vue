<script>
import SearchBar from './SearchBar.vue';
import {store} from '../data/store'


export default {
  name: "Header",
  components: { 
    SearchBar 
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <header cla>
    <div class="nv_container d-flex justify-content-between align-items-center py-4">
      <div class="logo">
        <a href="#"><img src="../../public/img/logo-boolflix.png" alt="Logo Boolflix" class="w-100"></a>
      </div>

      <SearchBar @startSearch="$emit('restartSearch')"/>

    </div>

  </header>



</template>

<style lang="scss" scoped>

header{
  background-color: black;
}

.nv_container{
  width: 80%;
  margin: 0 auto;
  
  .logo{
    width: 150px;
  }
}

</style>