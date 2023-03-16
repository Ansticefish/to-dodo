<template lang="pug">
div.worksDay 
  WorksNav.nav(@togglePopup="togglePopup")
  div.container
    div.card(v-for="(todo, index) in newTodos" :key="index")
      header
        h1.title {{ todo.title }}
        h3.person by{{ todo.person }}
        p.time {{ todo.time }}
      p.description {{ todo.description }}
      div.status
        h3.status-title 狀態
        div.unfinished
          input( 
          id="status1"
          type="radio" 
          :name="`status${index}`" 
          value="unfinished"
          v-model="todo.status"
          @click="updateStatus(todo.id)"
          )
          label(for="status1") 未完成
        div.doing
          input( 
          id="status2"
          type="radio" 
          :name="`status${index}`" 
          value="doing"
          v-model="todo.status"
          @click="updateStatus(todo.id)"
          )
          label(for="status2") 進行中
        div.finished
          input( 
          id="status3"
          type="radio" 
          :name="`status${index}`" 
          value="done"
          v-model="todo.status"
          @click="updateStatus(todo.id)"
          )
          label(for="status3") 已完成
      div.edit-btn(@click="togglePopup")
        div.circle(v-for="i in 3")
  EditPopup(
    v-if="showPopup"
    @togglePopup="togglePopup"
    )
</template>

<script>
import WorksNav from '../components/WorksNav.vue'
import EditPopup from '../components/EditPopup.vue'

export default {
  name: 'WorksDay',
  components: {
    WorksNav,
    EditPopup
  },
  data () {
    return {
      todos: {},
      showPopup: false,
    } 
  },
  methods: {
    updateStatus (id) {
      console.log(id)
      // send new data to backend
    },
    togglePopup() {
      this.showPopup = !this.showPopup
    }
  },
  computed: {
    newTodos () {
      // sort todos based on time
      const todoArr = Object.values(this.todos).sort((firstTodo, secondTodo) => 
        firstTodo.time - secondTodo.time
      )
      // convert time to real time
      const realTime = {
        1 : '7:00-8:00',
        2: '8:00-9:00',
        3: '9:00-10:00',
        4: '10:00-11:00',
        5: '11:00-12:00',
        6: '12:00-13:00',
        7: '13:00-14:00',
        8: '14:00-15:00',
        9: '15:00-16:00',
        10: '16:00-17:00',
        11: '17:00-18:00',
        12: '18:00-19:00',
        13: '19:00-20:00',
        14: '20:00-21:00',
        15: '21:00-22:00'
      }
      const newTodo = todoArr.map(function(todo) { 
        return {
          ...todo,
          time: realTime[todo.time]
        } 
      }
      )
      return newTodo
    }
  },
  beforeMount () {
    const day = this.$route.params.day
    this.todos = this.$store.state.data[day]
  }
}
</script>

<style lang="scss" scoped>
.worksDay {
  @include size (80vw, fit-content);
  min-height: 100vh;
  background: var(--day-bg);
  margin: 0 auto;
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 15px;
    .card {
      position: relative;
      @include size(100%, 100%);
      background: var(--card-bg);
      padding: 5% 8%;
      border-radius: 33px;
      box-sizing: border-box;
      header {
        @include flex(row, $align: flex-end);
        .title {
          @include h1;
        }
        .person {
          @include h3;
          margin-left: 15px;
        }
        .time {
          margin-left: auto;
        }
      }
      .description {
        margin-top: 3%;
        line-height: 1.5rem;
      }
      .status {
        @include flex (row, flex-start, center);
        margin-top: 3%;
        &-title {
          @include h3;
        }
        .unfinished, .doing, .finished {
          margin-left: 2%;
          font-size: 0.8rem;
          @include flex ($align: center);
          input {
            appearance: none;
            @include circle (12px);
            background: var(--radio-color);
            margin: 0 3px;
            &:checked {
              @include circle (12px);
              background: var(--radio-checked);
              border: 2px solid var(--radio-color);
            }
          }
        }
      }
      .edit-btn {
        @include size (10%, 3%);
        @include flex (row, space-around, center);
        @include divBtn;
        @include position (absolute, bottom, 8%, right, 5%);
        .circle {
          @include circle(20%);
          background: var(--edit-btn-color);
        }
      }
    }
  }
}
</style>