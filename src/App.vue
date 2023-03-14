<template lang="pug">
div#app
  div(@click="switchMode") Switcher 
  router-view
  Sidebar
</template>

<script>
import Sidebar from '../src/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  methods: {
    switchMode () {
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

<style lang="scss">
// reset css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

html, body {
  background: var(--background);
  color: var(--main-color);
}


</style>
