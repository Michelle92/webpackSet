// 从vue包中导入Vue对象
import Vue from 'vue'

// 导入App组件对象
import App from './App.vue'

// 创建Vue根实例
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

if (module.hot) {
  module.hot.accept()
}