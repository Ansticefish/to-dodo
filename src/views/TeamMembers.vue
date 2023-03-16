<template lang="pug">
div.members
  WorksNav(:title="'團隊成員'")
  DataLists
</template>

<script>
import WorksNav from '../components/WorksNav.vue'
import DataLists from '../components/DataLists.vue';

export default{
  name: 'TeamMembers',
  components: {
    WorksNav,
    DataLists
  }
}
</script>

<style lang="scss" scoped>
.members {
  @include componentsLayout;
}
</style>