<template>
  <v-app>
    <v-container fluid
                 class="pa-0">
      <v-content class="topbg pl-0 ml-0 ">
        <v-row no-gutters
               dense>
          <v-col>
            <div class="display-2 white--text pa-8">LOGO</div>
          </v-col>
        </v-row>
        <v-row no-gutters
               dense
               justify="end">
          <v-col cols="12"
                 sm="12"
                 md="4"
                 xs="12">
            <v-card class="elevation-12">
              <v-img :aspect-ratio="8"
                     src="/static/img/material.jpg"
                     class="mb-1">
                <v-card-title class="display-3 white--text">Login Form</v-card-title>
              </v-img>
              <v-card-text>
                <v-form>
                  <v-text-field label="账号"
                                name="login"
                                placeholder="请输入登录账号"
                                prepend-icon="mdi-account"
                                clearable
                                v-model="account"
                                type="text"></v-text-field>
                  <v-text-field id="password"
                                label="密码"
                                name="password"
                                placeholder="请输入密码"
                                prepend-icon="mdi-lock"
                                clearable
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="pl-4 pr-4">
                <v-row dense>
                  <v-col>
                    <v-btn color="success"
                           rounded
                           block
                           @click="login()">
                      登录
                      <v-icon right>mdi-login</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn color="primary"
                           rounded
                           text
                           block>找回密码
                      <v-icon right>mdi-account-search</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12"
                 sm="0"
                 md="1"
                 xs="0"></v-col>
        </v-row>
      </v-content>
    </v-container>
    <v-footer app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showPassword: false,
      account: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // location.href = '/'
      this.$router.push('/', null, null)
    }
  }
}
</script>
<style scoped>
.topbg {
  background-image: url(/static/img/login/top.png);

  background-repeat: no-repeat;
  background-size: cover;
  background-size: 68% 100%;
}
</style>
