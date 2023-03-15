<template lang="pug">
div.filter
  div.edit
    form#todo(@submit.prevent="sendData")
      Form(
        v-for="(data, index) in formData" :key="index" :form-data="data" @formChanged="submit"
        )
      div.btns
        button.cancel(
          @click="() => this.$emit('togglePopup')") 取消
        button.submit(
          type="submit"      form="todo"   
          value="Submit"
          @click="() => this.$emit('togglePopup')"
          ) 新增
</template>

<script>
import Form from '../components/WorksForms.vue'
export default {
  name: 'EditPopup',
  components: {
    Form
  },
  data () {
    return {
      formData: [
        {
          dataName: 'textData',
          data: {
            label: '名稱',
            placeholder: '請輸入todo名稱',
            name: 'title'
          }
        },
        {
          dataName: 'textareaData',
          data: {
            label: '內容',
            placeholder: '請輸入todo內容',
            name: 'description'
          }
        },
        {
          dataName: 'selectData',
          data: {
            label: '負責人',
            options: [
              { option: '小花', value: '小花' },
              { option: '小梅', value: '小梅' },
              { option: '小櫻', value: '小櫻' },
            ],
            name: 'person'
          }
        },
        {
          dataName: 'radioData',
          data: {
            title: '星期',
            radio: [
              {
                name: 'date1',
                value: 'Mon.',
                label: '星期一'
              },
              {
                name: 'date2',
                value: 'Tue.',
                label: '星期二'
              },
              {
                name: 'date3',
                value: 'Wed.',
                label: '星期三'
              },
              {
                name: 'date4',
                value: 'Thu.',
                label: '星期四'
              },
              {
                name: 'date5',
                value: 'Fri.',
                label: '星期五'
              }
            ],
            name: 'date'
          }
        },
        {
          dataName: 'selectData',
          data: {
            label: '時段',
            options: [
              { option: '7:00-8:00', value: '1' },
              { option: '8:00-9:00', value: '2' },
              { option: '9:00-10:00', value: '3' },
              { option: '10:00-11:00', value: '4' },
              { option: '11:00-12:00', value: '5' },
              { option: '12:00-13:00', value: '6' },
              { option: '13: 00 - 14: 00', value: '7' },
              { option: '14:00-15:00', value: '8' },
              { option: '15:00-16:00', value: '9' },
              { option: '16:00-17:00', value: '10' },
              { option: '17:00-18:00', value: '11' },
              { option: '18:00-19:00', value: '12' },
              { option: '19:00-20:00', value: '13' },
              { option: '20:00-21:00', value: '14' },
              { option: '21:00-22:00', value: '15' }
            ],
            values: [
              '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'
            ],
            name: 'time'
          }
        },
        {
          dataName: 'radioData',
          data: {
            title: '狀態',
            radio: [
              {
                name: 'status1',
                value: 'unfinished',
                label: '未完成'
              },
              {
                name: 'status2',
                value: 'doing',
                label: '進行中'
              },
              {
                name: 'status3',
                value: 'done',
                label: '已完成'
              }
            ],
            name: 'status'
          }
        },
      ],
      newData: {
        title: '',
        description: '',
        person: '',
        date: '',
        time: '',
        status: ''
      }
    }
  },
  methods: {
    submit (data) {
      this.newData[data.name] = data.data
    },
    sendData () {
      console.log(this.newData)
      // add data to frontend and backend
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  position: fixed;
  inset: 0;
  @include flex-center;
  background: var(--popup-filter);
  z-index: 100;
  .edit {
    @include size (35vw, fit-content);
    @include flex(column, center, center);
    padding: 20px;
    background: var(--popup-bg);
    border-radius: 15px;
    box-sizing: border-box;
    #todo {
      @include size (80%, fit-content);
    }
    .btns {
      @include flex-center;
      margin-top: 15px;
      button {
        border: none;
        border-radius: 5px;
        padding: 5px 25px;
        font-weight: 700;
        @include divBtn;
      }
      .cancel {
        margin-right: 5%;
        background: var(--cancel-btn-bg);
        color: var(--cancel-btn-color);
      }
      .submit {
        background: var(--submit-btn-bg);
        color: var(--submit-btn-color);
      }
    }
  }
}
</style>