<template>
  <v-app>
    <!-- v-app-bar -->
    <v-app-bar app
               dense
               clipped
               elevate-on-scroll
               :color="appBar.color"
               :dark="appBar.img.display">
      <template v-slot:img>
        <v-img v-if="appBar.img.display"
               :src="appBarImgScr"
               height="100%"
               width="100%"></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"
                          color="blue"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase font-weight-bold">
        <v-img :src="require('../assets/img/tsingtao-logo.png')"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon
             @click.stop="null"
             title="帮助"
             class="hidden-xs-only">
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
      <v-divider vertical
                 class="hidden-xs-only"></v-divider>
      <v-btn icon
             @click.stop="
          rightDrawer = !rightDrawer
          tab = 'Message'
        "
             title="消息">
        <v-badge color="red"
                 overlap
                 dense
                 :value="messageCount"
                 :content="messageCount">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon
             @click.stop="
          rightDrawer = !rightDrawer
          tab = 'Setting'
        "
             title="设置">
        <v-icon>mdi-settings</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>
      <v-btn icon
             @click="logout()"
             title="退出">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- /v-app-bar -->

    <!-- v-navigation-drawer clipped-->
    <v-navigation-drawer v-model="drawer"
                         :width="leftDrawer.width"
                         app
                         :mini-variant.sync="mini"
                         left
                         :floating="noLimit.enabled"
                         :dark="leftDrawer.img.display"
                         :color="leftDrawer.color">
      <template v-slot:img>
        <v-img v-if="leftDrawer.img.display"
               :src="leftDrawerImgScr"
               height="100%"
               width="100%"></v-img>
      </template>
      <!-- current login user info -->
      <current-user :mini-variant.sync="mini"></current-user>
      <!-- /current login user info -->
      <v-divider v-if="!noLimit.enabled"></v-divider>

      <Menu />
    </v-navigation-drawer>
    <!-- /v-navigation-drawer clipped-->

    <!-- v-content -->
    <v-content>
      <router-view />
    </v-content>
    <!-- /v-content -->

    <!-- v-navigation-drawer for setting & message -->
    <v-navigation-drawer app
                         temporary
                         right
                         v-model="rightDrawer"
                         width="380"
                         style="width:380px;">
      <setting-message :message-count.sync="messageCount"
                       :tab-value="tab"></setting-message>
    </v-navigation-drawer>
    <!-- /v-navigation-drawer for setting & message -->

    <!-- snackbar for public prompt message -->
    <v-snackbar v-model="snackbarOption.snackbar"
                :color="snackbarOption.color"
                :timeout="snackbarOption.timeout"
                :multi-line="snackbarOption.mode === 'multi-line'"
                :vertical="snackbarOption.mode === 'vertical'"
                :top="snackbarOption.y === 'top'"
                :bottom="snackbarOption.y === 'bottom'"
                :left="snackbarOption.x === 'left'"
                :right="snackbarOption.x === 'right'">
      <span v-html="snackbarOption.text"></span>
      <v-btn icon
             @click="snackbarOption.snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <!-- /snackbar for public prompt message -->
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import CurrentUser from "../components/CurrentUser"
import Menu from "../components/Menu"
import SettingMessage from "../components/SettingMessage"

export default {
  name: "App",
  components: {
    CurrentUser,
    Menu,
    SettingMessage
  },
  data () {
    return {
      drawer: null,
      rightDrawer: false,
      appBarImgScr: "",
      leftDrawerImgScr: "",
      mini: false,
      tab: "Message",
      messageCount: 0,
      items: [
        {
          icon: "mdi-inbox",
          text: "Inbox"
        },
        {
          icon: "mdi-star",
          text: "Star"
        },
        {
          icon: "mdi-send",
          text: "Send"
        },
        {
          icon: "mdi-email-open",
          text: "Drafts"
        }
      ]
    }
  },
  mounted: function () {
    this.leftDrawerImgScr =
      "/static/img/left-drawer-bg/" +
      Math.floor(Math.random() * 30 + 1) +
      ".jpg"
    this.appBarImgScr =
      "/static/img/app-bar-bg/" + Math.floor(Math.random() * 3 + 1) + ".jpg"
  },
  computed: {
    ...mapState(["snackbarOption", "appBar", "leftDrawer", "noLimit"])
  },
  methods: {
    clk: function (n) {
      console.log(n)
    },
    logout: function () {
      // this.$http.get('/menu/')
      this.$router.push("/login", null, null)
      // location.href = '/login'
    }
  }
}
</script>
