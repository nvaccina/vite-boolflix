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
  <div class="container d-flex flex-wrap">

    <Card
    v-for="film in store.filmList"
    :key="film.id"
    :title="film.title"
    :original_title="film.original_title"
    :original_language="film.original_language"
    :vote_average="film.vote_average"
    />

  </div>
  
  
</template>

<style lang="scss" scoped>

</style>