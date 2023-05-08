<script>
import {store} from '../data/store'
import Card from './partials/Card.vue'

export default {
  name: 'Main',

  components:{
    Card,
  },

  data(){
    return{
      store
    }
  }

}

</script>

<template>
  

  <!--Contenitore film-->

  <div v-if="store.filmList.length>0 || store.serieList.length>0" class="nv_main_container">

    <div class="container my-4">

      <h1 v-if="store.filmList.length>0" class="pb-3">Film</h1>

      <div class="card_container d-flex flex-wrap">

        <Card
          v-for="film in store.filmList"
          :key="film.id"
          :title="film.title"
          :original_title="film.original_title"
          :original_language="film.original_language"
          :image="film.poster_path"
          :vote_average="Math.ceil(film.vote_average / 2)"
          :overview="film.overview"
        />

      </div>

    </div>

    <!--Contenitore serie tv-->
    
    <div class="container my-4">
      <h1 v-if="store.serieList.length>0" class="pb-3">Serie TV</h1>

      <div class="card_container d-flex flex-wrap">

        <Card
          v-for="serie in store.serieList"
          :key="serie.id"
          :name="serie.name"
          :original_name="serie.original_name"
          :original_language="serie.original_language"
          :vote_average="Math.ceil(serie.vote_average / 2)"
          :image="serie.backdrop_path"
          :overview="serie.overview"
        />

      </div>
      
    </div>

  </div>
  

  <div v-else class="not_found container text-center">
    <h4>Non sono stati trovati film/serie tv con questo titolo!</h4>
  </div>
  
</template>

<style lang="scss" scoped>
.nv_main_container{
  margin-top: 120px;
}
.not_found{
  margin-top: 120px;
}

</style>