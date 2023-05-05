<script>
export default {
  name: 'Card',
  props:{
    title: String,
    original_title: String,
    name: String,
    original_name: String,
    original_language: String,
    vote_average: Number,
    image: String,
  },
  data(){
    return{
      flag: `./img/${this.original_language}.png`,
    }
  }

}
</script>

<template>
  <div class="nv_card">

    <!--Poster film/serie-->

    <img v-if="image !== null" :src="`https://image.tmdb.org/t/p/w342/${this.image}`" alt="">
    
    <!--Immagine alternativa se non presente il poster-->
    <img v-else src="../../../public/img/anteprima-non-disponibile.jpg" alt="Immagine non disponibile">
    

    <div class="text">

      <!--Mostra title se film, name se serie tv-->
      <h3>
        <span v-if="title">Film: {{ title }}</span>
        <span v-else>Serie Tv: {{ name }}</span>
      </h3>

      <!--Se original_title diverso da title || original_name diverso da name, mostra i titoli originali-->
      <h4 v-if="original_title !== title || original_name !== name">

        <span v-if="original_title">{{ original_title }}</span>
        <span v-else>{{ original_name }}</span>

      </h4>

      <!--Flag con immagine: se l'immagine è nulla, mostra testo lingua-->
      <p class="fleg d-flex align-items-center">

        <img class="ms-2" v-if="flag !== null" :src="flag" :alt="original_language">

        <span v-else>Language: {{ original_language }}</span>
        
      </p>
      
      <p>{{ vote_average }}</p>

    </div>
    
    


  </div>
  
</template>

<style lang="scss" scoped>
.nv_card{
  position: relative;
  height: 400px;
  width: calc(100% / 4 - 20px);
  margin: 0 10px;
  //background-color: orange;
  border: 1px solid black;
  //overflow: hidden;
  img{
    width: 100%;
    object-fit: cover;
  }
  .text{
    position: absolute;
    top: 0;
    left: 0;
  }
 .fleg{
  img{
    width: 30px;
  }
  
 }
}



</style>