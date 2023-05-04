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
    <h3>{{ title }}</h3>
    <h4>{{ original_title }}</h4>
    <p class="fleg d-flex align-items-center">
      Language:

      <span v-if="flag === null"> {{ original_language }}</span>

      <img class="ms-2" v-else :src="flag" :alt="original_language">
      

    </p>
    <p>{{ vote_average }}</p>


  </div>
  
</template>

<style lang="scss" scoped>
.nv_card{
  min-height: 200px;
  width: calc(100% / 4);
  background-color: orange;
  border: 1px solid black;
 .fleg{
  img{
    width: 30px;
  }
  
 }
}



</style>