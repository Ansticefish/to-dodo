<template lang="pug">
div.worksForm 
  div.text
    label(:for="textData.name") {{ textData.label }}
    input(
      type="text"
      :id="textData.name"
      :name="textData.name"
      :placeholder="textData.placeholder"
      )
  div.textarea
    label(:for="textareaData.name") {{ textareaData.label }}
    textarea(
      :id="textareaData.name"
      :name="textareaData.name"
      :placeholder="textareaData.placeholder"
      )
  div.select
    label(:for="selectData.name") {{ selectData.label }}
    select(
      :id="selectData.name"
      :name="selectData.name"
    )
      option(
        value="" 
      ) 未選擇
      option(
        v-for="item in selectData.options"
        :value="item.value"
      ) {{ item.option }}
  div.radio
    input( 
      :id="radioData.name"
      type="radio" 
      :name="radioData.name" 
      :value="radioData.value"
      )
    label(:for="radioData.name") {{ radioData.label }}
</template>

<script>
const textData = [
  {
    label: '名稱',
    placeholder: '請輸入todo名稱',
    name: 'title'
  }
]

const textareaData = [
  {
    label: '內容',
    placeholder: '請輸入todo內容',
    name: 'description'
  }
]

const selectData = [
  {
    label: '負責人',
    options: [
      { option: '小花', value: '小花' },
      { option: '小梅', value: '小梅' },
      { option: '小櫻', value: '小櫻' },
    ],
    name: 'person'
  },
  {
    label: '時段',
    options: [
      {option:'7:00-8:00', value: '1' }, 
      { option: '8:00-9:00', value: '2' },
      { option: '9:00-10:00', value: '3' },
      { option: '10:00-11:00', value: '4' },
      { option: '11:00-12:00', value: '5' },
      { option: '12:00-13:00', value: '6' },
      { option: '13: 00 - 14: 00', value: '7' },
      { option:  '14:00-15:00', value: '8' },
      { option: '15:00-16:00', value: '9' },
      { option: '16:00-17:00', value: '10' },
      { option: '17:00-18:00', value: '11' },
      { option: '18:00-19:00', value: '12' },
      { option: '19:00-20:00', value: '13' },
      { option: '20:00-21:00', value: '14' },
      { option: '21:00-22:00', value: '15' } 
    ],
    values: [
     '1', '2', '3', '4', '5' , '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'
    ],
    name: 'time'
  }
]

const radioData = [
  {
    label: '未完成',
    name: 'status1',
    value: 'unfinished',
  }
]


export default {
  name: 'WorksForm',
  data () {
    return {
      textData: textData[0],
      textareaData: textareaData[0],
      selectData: selectData[0],
      radioData: radioData[0]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>