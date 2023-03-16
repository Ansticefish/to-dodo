<template lang="pug">
div.members
  WorksNav(:title="'團隊成員'")
</template>

<script>
import WorksNav from '../components/WorksNav.vue'

export default{
  name: 'TeamMembers',
  components: {
    WorksNav
  }
}
</script>

<style lang="scss" scoped>
.members {
  @include componentsLayout;
}
</style>