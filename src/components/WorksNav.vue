<template lang="pug">
nav.worksNav 
  div.eggs
    div.egg.egg1
    div.egg.egg2
    div.egg.egg3
  h1 {{ this.$route.params.day? this.$route.params.day: 所有工作 }}
  div.add-btn(@click="() => this.$emit('togglePopup')")

</template>

<script>
export default {
  name: 'WorksNav'
}
</script>

<style lang="scss" scoped>
.worksNav {
  @include size (100%, 60px);
  @include flex (space-around, center);
  padding: 15px;
  background: var(--nav-bg);
  box-sizing: border-box;
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
  .add-btn {
    @include size ($height: 80%);
    aspect-ratio: 1;
    margin-left: auto;
    background-image: var(--add-btn);
    background-size: contain;
    @include divBtn;
  }
}
</style>