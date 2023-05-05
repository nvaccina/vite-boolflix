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
    overview: String,
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
    <img v-if="image !== null" :src="`https://image.tmdb.org/t/p/w342/${this.image}`" :alt="title || name" class="w-100 h-100">
    
    <!--Immagine alternativa se non presente il poster-->
    <div v-else class="alternative_card w-100 h-100">
      <h5>{{ title || name }}</h5>
      <img src="../../../public/img/anteprima-non-disponibile.jpg" alt="Immagine non disponibile" class="w-100 h-100">

    </div>
    
    

    <div class="text w-100 h-100">

      <!--Mostra title se film, name se serie tv-->
      <h3>
        <span v-if="title">{{ title }}</span>
        <span v-else>{{ name }}</span>
      </h3>

      <!--Se original_title diverso da title || original_name diverso da name, mostra i titoli originali-->
      <h5 v-if="original_title !== title || original_name !== name">
        <span v-if="original_title">{{ original_title }}</span>
        <span v-else>{{ original_name }}</span>
      </h5>

      <!--Flag con immagine: se l'immagine è nulla, mostra testo lingua-->
      <p class="fleg d-flex align-items-center">

        <div v-if="flag !== null">
          <img class="ms-2" :src="flag" :alt="original_language">
        </div>
        <span v-else>Language: {{ original_language }}</span>
        
      </p>

      <!--Aggiunta stelle in base al voto-->
      <div class="vote">
        <span v-for="number in vote_average" :key="number">
          <i class="fa-solid fa-star"></i>
        </span>
        <span v-for="number in (5- vote_average)" :key="number">
          <i class="fa-regular fa-star"></i>
        </span>

      </div>

      <!--Descrizione-->
      <p>{{overview}}</p>

    </div>
    
    


  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;
.nv_card{
  position: relative;
  height: 450px;
  width: calc(100% / 4 - 20px);
  margin: 0 10px;
  margin-bottom: 20px;
  border: 2px solid black;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    .text{
      animation-name: compare_testo;
      animation-duration: 0.4s;	
      animation-timing-function: linear;
      top:0;
    }
    @keyframes compare_testo {
      0% {
        transform: translateY(100%);
      }
      25%{
        transform: translateY(75%);
      }	
      50%{
        transform: translateY(50%);
      }	
      75%{
        transform: translateY(25%);
      }	
      100% {
        transform: translateY(0%);
      }	
    }
  }
  img{
    object-fit: cover;
  }
  .alternative_card{
    position: relative;
    h5{
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%);
      color: black;
    }
  }
  .text{
    position: absolute;
    padding: 5px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);

    
    .fleg{
      img{
        width: 30px;
      }
    }
    p{
      color: $primary-color;
    }
  }
  i{
    color:yellow
  }
}
</style>