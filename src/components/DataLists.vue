<template lang="pug">
div.list(:class="{'clicked': openList}")
  div.header
    h1 {{ listData.title }}
    div.btn(:class="{'clicked': openList}" @click="() => this.openList = !this.openList"
      )
  div.description(v-show="openList") {{ listData.description }}

</template>

<script>
export default {
  name: 'DataList',
  props: {
    listData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      openList: false,
    }
  },
  watch: {
    listData () {
      console.log('get')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  @include size (100%, fit-content);
  border-bottom: 2px solid var(--list-border);
  padding: 15px;
  box-sizing: border-box;
  transition: all $transition-time;
  &.clicked {
    background: var(--list-bg);
  }
  .header {
    @include flex(row, space-between, center);
    h1 {
      @include h1;
    }
    .btn {
      @include size ($height: 12px);
      aspect-ratio: 1;
      background-size: contain;
      background-image: var(--add-btn);
      @include divBtn;
      &:hover, &.clicked {
        transform: rotate(45deg);
      }
    }
  }
  .description {
    margin-top: 10px;
  }
}
</style>