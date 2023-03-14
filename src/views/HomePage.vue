<template lang="pug">
div.home
  img.logo(src="../assets/logo.png")
  div.previews 
    WorkPreview.day(
      v-for="(day, index) in todos"
      :key="index"
      :title="index"
      :todos="day"
      :switchTime="switchTime"
      )
</template>


<script>
import WorkPreview from '../components/WorksPreview.vue'
import { v4 as uuidv4 } from 'uuid'
const dummyData = {
  Monday: {
    1: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Mon.',
      time: '1',
      status: 'unfinished',
      person: '小花'
    }
  },
  Tuesday: {
    1: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Tue.',
      time: '5',
      status: 'unfinished',
      person: '小花'
    }
  },
  Wednesday: {
    1: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Wed.',
      time: '3',
      status: 'unfinished',
      person: '小花'
    }
  },
  Thursday : {
    1: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Thu.',
      time: '6',
      status: 'unfinished',
      person: '小花'
    }
  },
  Friday : {
    1: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Mon.',
      time: '15',
      status: 'unfinished',
      person: '小花'
    }
  }
}


export default {
  name: 'HomePage',
  components: {
    WorkPreview
  },
  props: {
    switchTime: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      todos: { }
    }
  },
  watch: {
    switchTime() {
      console.log('home', this.switchTime)
    }
  },
  beforeMount () {
    this.todos = dummyData
  }
}

</script>


<style lang="scss" scoped>
.home {
  @include flex(column, space-around, center);
  .logo {
    @include size(20vw);
    margin-top: 3vh;
  }
  .previews {
    @include flex-center;
    width: 90vw;
    height: 80vh;
    flex-wrap: wrap;
    .day {
      width: 30%;
      margin: 1vw;
    }
  }
}
</style>