<template>
  <div class="less-div">
    this is App3333333333333
    <div class="gg">212122</div>
    <div class="kk">444</div>
    <div>
      <h1>TodoList</h1>
      <input type="text" v-model="content" />
      <button @click="addTodo">添加</button>
      <ul>
        <li v-for="item of todoData" :key="item.id">{{ item }}</li>
      </ul>
    </div>
  </div>
  
</template>

<script>

import './assets/style/test.less'

export default {
  name: 'App',
  data () {
    return {
      val: '121212333',
      todoData: ['todo1', 'todo2', 'todo3'],
      content: ''
    }
  },
  methods: {
    addTodo() {
      if (this.content === '') return

      this.todoData.push(this.content)
      this.content = ''
    }
  }
}
</script>
<style lang="less">
  li:nth-of-type(odd)
  {
    color: red
  }
</style>
