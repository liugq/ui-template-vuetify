<template>
  <v-list-item dense>
    <v-list-item-avatar class="mt-1 mb-1">
      <v-img src="/static/img/liuxy.jpg" />
    </v-list-item-avatar>
    <!-- 当前职责 -->
    <v-list-item-content>
      <v-list-item-title class="mt-0 mb-0 font-weight-bold blue--text ">{{ loginAccount.username }}
        {{ loginAccount.description }}</v-list-item-title>
      <v-list-item-subtitle class="blue--text text--lighten-2">{{
        loginAccount.currentRole.roleName
      }}</v-list-item-subtitle>
    </v-list-item-content>
    <!-- 切换职责 -->
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon
               v-on="on"
               title="切换职责"
               color="blue">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-subheader>
          <v-icon small
                  left>mdi-account-convert</v-icon>切换职责
        </v-subheader>
        <v-list-item-group v-model="loginAccount.currentRoleId">
          <v-list-item v-for="(item, i) in loginAccount.accountRoleAssigns"
                       :key="i"
                       @click="roleChange(item)"
                       :disabled="loginAccount.currentRoleId == item.id.roleId">
            <template v-if="loginAccount.currentRoleId !== item.id.roleId">
              <v-list-item-avatar>
                <v-icon>mdi-account</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{
                item.fndPrvRole.roleName
              }}</v-list-item-title>
                <v-list-item-subtitle>{{
                item.fndPrvRole.roleDesc
              }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-avatar>
                <v-icon>mdi-account-check</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.fndPrvRole.roleName }} [当前职责]</v-list-item-title>
                <v-list-item-subtitle>{{
                item.fndPrvRole.roleDesc
              }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-btn icon
           @click.stop="miniClk()"
           color="blue">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CurrentUser',
  props: {
    'mini-variant': Boolean
  },
  data () {
    return {}
  },
  mounted () {
    this.$axios.all([this.getLoginAccount()])
  },
  computed: {
    ...mapState(['loginAccount'])
  },
  methods: {
    miniClk: function () {
      this.$emit('update:mini-variant', !this.miniVariant)
    },
    roleChange: function (item) {
      console.log(item)
      location.reload()
    },
    getLoginAccount: function () {
      const _self = this
      return _self.$http
        .get(_self.$baseURL + '/login/account')
        .then(function (res) {
          // console.log(res)
          _self.$store.state.loginAccount = res.data
        })
        .catch(function (error) {
          console.log(error)
          // _self.$message({ showClose: true, message: error.message, type: 'error' })
        })
    }
  }
}
</script>
