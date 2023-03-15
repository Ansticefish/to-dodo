<template lang="pug">
div.preview
  h1 {{ title }}
  canvas(
    ref="canvas"
    @click="toWorksDay"
  ) 
</template>

<script>
export default {
  name: 'WorkPreview',
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Object,
      required: true
    },
    switchTime: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      test: this.$theme
    }
  },
  methods: {
    toWorksDay( ) {
      this.$router.push(`/works/${this.title}`)
    },
    drawCanvas () {
      // init canvas
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      canvas.height = canvas.width * 0.8

      // get colors from css variables
      const colors = this.getColor()

      // fill canvas bg
      ctx.fillStyle = colors[0]
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // draw eggs
      this.drawEggs(canvas, ctx, colors[1], 1)
      this.drawEggs(canvas, ctx, colors[2], 2)
      this.drawEggs(canvas, ctx, colors[3], 3)
    },
    drawEggs(canvas, ctx, color, row) {
      const eggNumber = 5
      const px = canvas.width/10
      const py = canvas.height/10
      const eggWidth = (canvas.width - px*(eggNumber +1))/eggNumber
      const eggHeight = (canvas.height - py*4)/3

      ctx.fillStyle = color

      for(let i = 1; i <= eggNumber; i++ ) {
        const x = px * i * 1.1 + eggWidth * (i - 1) + eggWidth / 2
        const y = py * row + eggHeight * (row - 1) + eggHeight / 2
        const r = eggWidth * 1.2

        // draw the left part of the circle
        ctx.beginPath()
        ctx.arc(x, y, r, Math.PI*0.6, Math.PI*1.4)
        ctx.fill()
        // draw the right part of the circle
        ctx.beginPath()
        ctx.arc(x - px * 0.6, y, r, Math.PI * 1.6, Math.PI * 0.4)
        ctx.fill()
        ctx.closePath()
      }
    },
    getColor () {
      const r = document.querySelector('html')
      const rs = getComputedStyle(r)
      const bg = rs.getPropertyValue('--preview-bg')
      const egg1 = rs.getPropertyValue('--egg-morning')
      const egg2 = rs.getPropertyValue('--egg-afternoon')
      const egg3 = rs.getPropertyValue('--egg-night')
      return [bg, egg1, egg2, egg3]
    }
  },
  watch: {
    switchTime() {
      // update canvas when users switch to light/night mode
      console.log('preview', this.switchTime)
      this.drawCanvas()
    }
  },
  mounted () {
    this.drawCanvas()
  }
}
</script>


<style lang="scss" scoped>
.preview {
  h1 {
    color: var(--week-color);
  }
  canvas {
    width: 100%;
    @include divBtn;
  }
}
</style>