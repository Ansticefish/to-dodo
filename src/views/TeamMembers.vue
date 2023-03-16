<template lang="pug">
div.members 
  WorksNav(:title="'團隊成員'")
  DataLists(v-for="(item, index) in listData" :key="index" :list-data="item") 
</template>

<script>
import WorksNav from '../components/WorksNav.vue'
import DataLists from '../components/DataLists.vue';

export default{
  name: 'TeamMembers',
  components: {
    WorksNav,
    DataLists
  },
  computed: {
    listData () {
      return this.$store.state.memberList
    }
  }
}
</script>

<style lang="scss" scoped>
.members {
  @include componentsLayout;
}
</style>