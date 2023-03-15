<template lang="pug">
nav.worksNav 
  div.eggs
    div.egg.egg1
    div.egg.egg2
    div.egg.egg3
  h1 {{ this.$route.params.day? this.$route.params.day: 所有工作 }}
  img.add(src="../assets/btn-add.png")

</template>

<script>
export default {
  name: 'WorksNav'
}
</script>

<style lang="scss" scoped>
.worksNav {
  @include size (100%, 20px);
  @include flex (space-around, center);
  padding: 15px;
  background: var(--nav-bg);
  .eggs {
    @include size (10%, 100%);
    @include flex(row, center, center);
    .egg {
      @include size (20%);
      max-width: 20px;
      aspect-ratio: 1/1.3; 
      border-radius: 100%;
      margin-right: 5%;
     
      $colors : --egg-morning  --egg-afternoon --egg-night;
      @for $i from 1 through length($colors) {
        &.egg#{$i} {
          background: var(nth($colors, $i));
        }
      }
    }
  }
  h1 {
    @include navFont;
    margin-left: -1%;
  }
  img {
    @include size ($height: 100%);
    margin-left: auto;
  }
}
</style>