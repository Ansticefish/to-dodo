<template lang="pug">
div.worksForm
  div.text(v-if="dataType === 'textData'")
    label(:for="data.name") {{ data.label }}
    input(
      type="text"
      :id="data.name"
      :name="data.name"
      :placeholder="data.placeholder"
      v-model="newData"
      )
  div.textarea(v-if="dataType === 'textareaData'")
    label(:for="data.name") {{ data.label }}
    textarea(
      :id="data.name"
      :name="data.name"
      :placeholder="data.placeholder"
      v-model="newData"
      )
  div.select(v-if="dataType === 'selectData'")
    label(:for="data.name") {{ data.label }}
    select(
      :id="data.name"
      :name="data.name"
      v-model="newData"
    )
      option(
        value="" 
      ) 未選擇
      option(
        v-for="item in data.options"
        :value="item.value"
      ) {{ item.option }}
  div.radio(v-if="dataType === 'radioData'")
    h3.radio-title {{ data.title }}
    div.wrapper
      div.container(
        v-for="(item, index) in data.radio" :key="index" :class="item.name"
        )
        input( 
          :id="item.name"
          type="radio" 
          :name="data.name" 
          :value="item.value"
          v-model="newData"
          )
        label(:for="item.name") {{ item.label }}
</template>

<script>
export default {
  name: 'WorksForm',
  props: {
    formData: {
      type: Object
    }
  },
  data () {
    return {
      dataType: '',
      data: {},
      newData: ''
    }
  },
  methods: {
    sendData () {
      const dataSent = {
        name: this.data.name,
        data: this.newData
      }
      this.$emit('formChanged', dataSent)
    }
  },
  watch: {
    newData () {
      this.sendData()
    }
  },
  beforeMount () {
    const dataType = this.formData.dataName
    this.dataType = dataType
    this.data = this.formData.data
  }
}
</script>

<style lang="scss" scoped>
$margin: 15px;
.worksForm {
  @include size (100%, fit-content);
  @include flex(column, center,center);
  font-weight: 700;
  div {
    width: 100%;
    margin-top: $margin;
  }
  label {
    margin-right: $margin;
  }
  input, textarea {
    padding: 5px;
    background: var(--input-bg);
    border: none;
  }
  ::placeholder {
    color: var(--placeholder-color);
  }
  .text {
    display: flex;
    align-items: center;
  }
  .textarea {
    label {
      display: block;
      margin-bottom: $margin;
    }
    textarea {
      width: 100%;
    }
  }
  .select {
    @extend .text;
    select, option {
      width: fit-content;
      background: var(--input-bg);
      color: var(--placeholder-color);
      border: none;
      padding: 5px;
    }
  }
  .radio {
    display: flex;
    flex-wrap: wrap;
    h3 {
      width: fit-content;
    }
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      .container {
        width: fit-content;
        & input {
          appearance: none;
          @include circle (12px);
          background: var(--radio-color);
          box-sizing: border-box;
          &:checked {
            background: var(--radio-checked);
            border: 2px solid var(--radio-color);
          }
        }
        & label {
          margin-left: 6px;
          font-size: 0.8rem;
          font-weight: normal;
        }
      }
    }
  }
}
</style>