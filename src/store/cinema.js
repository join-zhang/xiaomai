import { getCinemaData } from '@/api'
const state = {
  cityId: '500100',
  cityName: '重庆',
  dataList: []
}
const actions = {
  async getCinema(store, cityId) {
    // 请求数据
    let result = await getCinemaData(cityId)
    if (result.status == 200) {
      store.commit('SETCINEMADATE', result.data.data.cinemas)
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
}
const mutations = {
  UPDATACITYNAME(state, cityObj) {
    state.cityId = cityObj.cityId
    state.cityName = cityObj.cityName
  },
  // 设置cinema的数据
  SETCINEMADATE(state, cinemaData) {
    state.dataList = cinemaData
  },
  CLEARDATALIST() {
    state.dataList = []
  }
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters
}
