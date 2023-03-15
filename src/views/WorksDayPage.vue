<template lang="pug">
div.worksDay 
  h1 {{ todos }}
</template>

<script>
export default {
  name: 'WorksDay',
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

</style>