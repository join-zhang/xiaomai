import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 引入小仓库
import cinema from './cinema'
import tableBar from '@/store/tableBar'

export default new Vuex.Store({
  modules: { //vuex 管理的模块
    cinema,
    tableBar
  }
})
