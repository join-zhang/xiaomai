const state = {
  // 控制tableBar 显示与隐藏的
  isShow: true
}
const actions = {}
const mutations = {
  CHANGGENOTSHOW(state) {
    state.isShow = false
  },
  TABBLEISSHOW(state) {
    state.isShow = true
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
