<script>
export default {
  name: 'Card',
  props:{
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
  }

}
</script>

<template>
  <div class="nv_card">
    <h3>{{ title }}</h3>
    <h4>{{ original_title }}</h4>
    <p>{{ original_language }}</p>
    <p>{{ vote_average }}</p>


  </div>
  
</template>

<style lang="scss" scoped>
.nv_card{
  min-height: 200px;
  width: calc(100% / 4);
  background-color: orange;
  border: 1px solid black;
}



</style>