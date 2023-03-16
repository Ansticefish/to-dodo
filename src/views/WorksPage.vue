<template lang="pug">
div.works 
  WorksNav(:title="'所有工作'")
  h1 This is Works!
</template>


<script>
import axios from 'axios'
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
  },
  methods: {
    async getData () {
      try {
        const response = await axios.get(' https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted () {
    this.getData()
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