// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import tmpMP from './examAllpage.vue'    // 새로 추가한 코드

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

new Vue({                                         // 새로 추가한 코드 (시작)
  router,
  store,
  render: h=> h(tmpMP),                 ◀ newThing이라는 이름으로 임포트한 내용을
}).$mount('#temporaryMainpage')                     ◀ id=chartSelector인 요소에 연결
// 새로 추가한 코드 (끝)
