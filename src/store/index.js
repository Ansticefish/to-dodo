import Vue from 'vue'
import Vuex from 'vuex'
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
    },
    2: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Mon.',
      time: '1',
      status: 'unfinished',
      person: '小花'
    },
    3: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Mon.',
      time: '1',
      status: 'unfinished',
      person: '小花'
    },
    4: {
      id: uuidv4(),
      title: '整理code',
      description: '口味想要開心完全沒上都是，就本身以很的歡定了的又是，但是我自己做到一安歡迎也看，他人看到欸旅人個人到我的，天氣版的在了一個我今天社交一個，漫嗚現在好的去力可是我。官方上的是能進化',
      date: 'Mon.',
      time: '1',
      status: 'unfinished',
      person: '小花'
    },
    5: {
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
  Thursday: {
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
  Friday: {
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


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {}
  },
  getters: {
  },
  mutations: {
    getData (state) {
      state.data = dummyData
    }
  },
  actions: {
  },
  modules: {
  }
})
