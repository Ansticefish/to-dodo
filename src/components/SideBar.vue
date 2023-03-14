<template lang="pug">
div.sidebar 
  div.panel(v-if="showPanel")
    div.link(
      v-for="(item, index) in sidebarList"
      :key="index"
      :class="item.class"
      @click="panelClicked(item.route)") {{ item.name }}
  div.btn 
    img(
      src="@/assets/logo-sidebar.png"
      :class="{'clicked': showPanel}" 
      @click="()=> this.showPanel = !this.showPanel")
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      sidebarList: [
        {
          name: '首頁',
          class: 'home',
          route: '/'
        },
        {
          name: '所有工作',
          class: 'works',
          route: '/works'
        },
        {
          name: '黑夜模式',
          class: 'night',
          route: ''
        }
      ],
      showPanel: false
    }
  },
  methods: {
    panelClicked(route) {
      if (!route) {
        this.switchMode()
      } else {
        this.$router.push(route)
      }
    },
    switchMode() {
      console.log(this.$theme)
      if (this.$theme === 'light') {
        this.$theme = 'dark'
      } else {
        this.$theme = 'light'
      }
      document.documentElement.dataset.theme = this.$theme
    }
  }
}
</script>


<style lang="scss" scoped>
.sidebar {
  @include size (10vw, fit-content);
  max-width: 130px;
  @include position (fixed, bottom, 15px, right, 25px);
  color: var(--sidebar-color);
  .panel {
    position: relative;
    @include size (90%, fit-content);
    margin-left: 15%;
    background: var(--sidebar-bg);
    padding: 0 5px;
    padding-bottom: 60%;
    box-sizing: border-box;
    &::before {
      content: '';
      @include position(absolute, top, -20%, left, 0);
      @include circle(100%);
      background: var(--sidebar-bg);
      z-index: -1;
    }
    .link {
      @include size (fit-content, fit-content);
      margin: 25% auto;
      padding: 5px;
      border-bottom: 1px solid var(--sidebar-color);
      @include divBtn;
    }
  }
  .btn {
    position: relative;
    @include circle (100%);
    aspect-ratio: 1;
    margin-top: -50%;
    background: var(--logo-bg);
    border: 8px solid var(--logo-border);
    img {
      @include size (100%, 100%);
      @include divBtn;
      &:hover, &.clicked {
        transform: rotate(-360deg);
      }
    }
  }
}
</style>