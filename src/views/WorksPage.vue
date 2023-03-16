<template lang="pug">
div.works 
  WorksNav(:title="'所有工作'")
  h1 This is Works!
</template>


<script>
import WorksNav from '../components/WorksNav.vue';

export default {
  name: 'WorksPage',
  components: {
    WorksNav
  },
  data () {
    return {
      test: []
    }
  }
}
</script>


<style lang="scss" scoped>
.works {
  @include componentsLayout
}
h1 {
  color: green;
}
</style>