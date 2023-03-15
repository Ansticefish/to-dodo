<template lang="pug">
div.home
  img.logo(src="../assets/logo.png")
  div.previews 
    WorkPreview.day(
      v-for="(day, index) in todos"
      :key="index"
      :title="index"
      :todos="day"
      :switchTime="switchTime"
      )
  EditPopup
</template>


<script>
import WorkPreview from '../components/WorksPreview.vue'
import EditPopup from '../components/EditPopup.vue'



export default {
  name: 'HomePage',
  components: {
    WorkPreview,
    EditPopup
  },
  props: {
    switchTime: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      todos: { }
    }
  },
  watch: {
    switchTime() {
      console.log('home', this.switchTime)
    }
  },
  beforeMount () {
    this.$store.commit('getData')
    this.todos = this.$store.state.data
  }
}

</script>


<style lang="scss" scoped>
.home {
  @include flex(column, space-around, center);
  .logo {
    @include size(20vw);
    margin-top: 3vh;
  }
  .previews {
    @include flex-center;
    width: 90vw;
    height: 80vh;
    flex-wrap: wrap;
    .day {
      width: 30%;
      margin: 1vw 1vh;
    }
  }
}
</style>