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
  
  <div class="container">
    <h1>Film</h1>
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
  <div class="container ">
    <h1>Serie TV</h1>

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
  
  
</template>

<style lang="scss" scoped>

</style>