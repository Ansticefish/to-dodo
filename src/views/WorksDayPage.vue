<template lang="pug">
div.worksDay 
  WorksNav.nav
  h1 {{ todos }}
</template>

<script>
import WorksNav from '../components/WorksNav.vue'

export default {
  name: 'WorksDay',
  components: {
    WorksNav
  },
  data () {
    return {
      todos: {}
    } 
  },
  beforeMount () {
    const day = this.$route.params.day
    this.todos = this.$store.state.data[day]
  }
}
</script>

<style lang="scss" scoped>
.worksDay {
  @include size (80vw, fit-content);
  margin: 0 auto;
}
</style>