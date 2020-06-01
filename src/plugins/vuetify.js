import Vue from 'vue';
import Vuetify from 'vuetify/lib';

const MY_ICONS = {
  edit: 'mdi-pencil',
  mydelete: 'mdi-delete',
  plus: 'mdi-plus',
  minus: 'mdi-minus',
  listCheckbox: 'mdi-format-list-checkbox',
  filter: 'mdi-filter-variant',
  ok: 'mdi-check-bold',
  mycancel: 'mdi-cancel',
  alert: 'mdi-bell-alert',
  dotsV: 'mdi-dots-vertical',
  dotsH: 'mdi-dots-horizontal'
}

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: MY_ICONS
  },
  theme: {
    dark: false
  }
});
