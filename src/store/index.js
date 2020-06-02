import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbarOption: {
      color: 'error',
      mode: '',
      multiLine: true,
      snackbar: false,
      text: "Hello, I'm a snackbar",
      timeout: 6000,
      x: null,
      y: 'top'
    },
    /* loopup */
    statusMap: {
      '1': '有效',
      '-1': '无效'
    },
    yesOrNo: {
      '1': '是',
      '-1': '否'
    },
    loginAccount: {
      username: 'anonym',
      currentRole: {
        roleName: ''
      },
      accountRoleAssigns: []
    },
    appBar: {
      img: {
        display: false
      },
      color: ''
    },
    leftDrawer: {
      width: 256,
      img: {
        display: false
      },
      color: ''
    },
    /*废弃*/
    leftDrawerImg: {
      display: true
    },
    noLimit: {
      enabled:false
    }
  },
  mutations: {},
  actions: {}
})
