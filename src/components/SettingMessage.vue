<template>
  <div>
    <v-img :aspect-ratio="16 / 4"
           :src="require('../assets/img/material.jpg')"
           class="mb-1">
      <v-row class="lightbox pl-2 pt-2 pb-0 fill-height white--text"
             align="end"
             dense>
        <v-col class="pb-0">
          <div class="title">Setting & Message</div>
          <div class="subtitle-2">系统设置与消息</div>
          <v-tabs background-color="transparent"
                  v-model="tab"
                  class="pa-0 ma-0"
                  height="40">
            <v-tab v-for="item in tabItems"
                   :key="item.id"
                   :href="`#${item.id}`"
                   class="pa-0 ma-0">
              <v-icon left>{{ item.icon }}</v-icon>
              <span class="font-weight-bold">{{ item.text }}</span>
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-img>
    <v-tabs-items v-model="tab">
      <v-tab-item value="Message">
        <v-card flat
                tile
                class="pa-2">
          <v-data-iterator :items="messages"
                           :items-per-page.sync="itemsPerPage"
                           :footer-props="{ itemsPerPageOptions }"
                           dense>
            <template v-slot:default="{ items }">
              <v-alert transition="scale-transition"
                       dismissible
                       dense
                       elevation="1"
                       close-label="$delete"
                       v-for="(item, n) in items"
                       :key="n"
                       class="mb-2 pt-1 pb-1 body-2"
                       @input="al(item)">{{ item }}</v-alert>
            </template>
          </v-data-iterator>
        </v-card>
      </v-tab-item>

      <v-tab-item value="Setting">
        <v-card flat
                tile
                class="pa-2 body-2">
          <v-alert tile
                   border="left"
                   dense
                   colored-border
                   color="blue lighten-1"
                   class="py-0 my-0 blue--text text--lighten-1 font-weight-bold">
            样式设置
          </v-alert>
          <v-list subheader>
            <v-list-item :key="1"
                         @click="null">
              <v-list-item-icon>
                <v-icon>mdi-invert-colors</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>暗黑模式(Dark)</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch v-model="$vuetify.theme.dark"
                          class="mt-0 pt-0 float-right"
                          dense
                          hide-details></v-switch>
              </v-list-item-action>
            </v-list-item>
            <v-list-item :key="2"
                         @click="null">
              <v-list-item-icon>
                <v-icon>mdi-invert-colors</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>暗黑模式(Dark)2</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch v-model="$vuetify.theme.dark"
                          class="mt-0 pt-0 float-right"
                          dense
                          hide-details></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-row>
            <v-col cols="6">
              <v-icon>mdi-invert-colors</v-icon>
              暗黑模式(Dark)
            </v-col>
            <v-col cols="6">
              <v-switch v-model="$vuetify.theme.dark"
                        class="mt-0 pt-0 float-right"
                        dense
                        hide-details></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-icon>mdi-border-none-variant</v-icon>
              无界模式
            </v-col>
            <v-col cols="6">
              <v-switch v-model="noLimit.enabled"
                        class="mt-0 pt-0 float-right"
                        dense
                        hide-details></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-icon>mdi-application</v-icon>
              显示应用栏背景
            </v-col>
            <v-col cols="6">
              <v-switch v-model="appBar.img.display"
                        class="mt-0 pt-0 float-right"
                        dense
                        hide-details></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-icon>mdi-dock-left</v-icon>
              显示导航栏背景
            </v-col>
            <v-col cols="6">
              <v-switch v-model="leftDrawer.img.display"
                        class="mt-0 pt-0 float-right"
                        dense
                        hide-details></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-icon>mdi-application</v-icon>
              应用栏颜色
            </v-col>
            <v-col cols="6"
                   class="pt-0">
              <v-select :items="colors"
                        v-model="appBar.color"
                        class="mx-2"
                        dense
                        single-line
                        hide-details></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-icon>mdi-dock-left</v-icon>
              导航栏栏颜色
            </v-col>
            <v-col cols="6"
                   class="pt-0">
              <v-select :items="colors"
                        v-model="leftDrawer.color"
                        class="mx-2"
                        dense
                        single-line></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col col="6">
              <v-icon>mdi-move-resize-variant</v-icon>
              导航栏尺寸
            </v-col>
            <v-col col="6">
              <v-slider v-model="leftDrawer.width"
                        :max="600"
                        :min="200"
                        hide-details
                        dense
                        thumb-label
                        :thumb-size="23">
              </v-slider>
            </v-col>
          </v-row>
          <v-divider></v-divider><br />
          <v-alert tile
                   border="left"
                   dense
                   colored-border
                   color="blue"
                   class="py-0 my-0 blue--text text--lighten-1 font-weight-bold">
            页面信息
          </v-alert>
          <v-row dense>
            <v-col cols="6">
              <span class="pl-2">breakpoint</span>
            </v-col>
            <v-col cols="6">
              <span class="float-right pr-2">{{
                this.$vuetify.breakpoint.name
              }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="6">
              <span class="pl-2">height</span>
            </v-col>
            <v-col cols="6">
              <span class="float-right pr-2">{{
                this.$vuetify.breakpoint.height
              }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="6">
              <span class="pl-2">width</span>
            </v-col>
            <v-col cols="6">
              <span class="float-right pr-2">{{
                this.$vuetify.breakpoint.width
              }}</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  props: {
    "message-count": null,
    tabValue: {
      default: "Message"
    }
  },
  data () {
    return {
      tab: "Message",
      tabItems: [
        { id: "Message", text: "消息", icon: "mdi-bell" },
        { id: "Setting", text: "设置", icon: "mdi-settings" }
      ],
      itemsPerPageOptions: [10],
      itemsPerPage: 10,
      messages: [
        "关于青啤大厦在重大活动期间加强安保管控工作的通知",
        "关于信息系统培训需求收集的通知",
        "【青啤国旅】秋意渐浓，一起特惠出行",
        "关于营销中心健康饮品事业总部相关岗位内部招聘的通知",
        "关于组织开展2019工程技术和经济系列高级专业技术职务资格评审的通知",
        "公司纪委警示教育简报（2019-18）",
        "关于开展2019年述责述廉工作的通知",
        "关于开展总部及三大中心员工安装使用ETC工作的通知",
        "关于加快推进青啤公司安装使用ETC有关工作的通知",
        "关于举行青啤集团第七届职工运动会预赛的通知",
        "关于青啤大厦因电力系统施工电梯停止运行的通知",
        "关于10月12日晚21:00-13日0:00系统停机的通知",
        "【青啤国旅】秋意渐浓，一起特惠出行~",
        "关于青啤大厦因电力系统施工分时段停电的通知",
        "关于青啤大厦餐厅公众号提升服务功能的通知",
        "关于青啤大厦1905会议室暂停预定及使用的通知",
        "青啤公司深化运用监督执纪【第一种形态】实施办法",
        "青啤公司关于鼓励担当作为，建立容错免责、澄清保护机制的实施意见",
        "关于加强国庆节期间值班值守工作的通知",
        "关于转发《关于2019年度质量专业高级工程师资格评价考试有关问题的通知》的通知"
      ],
      colors: [{ text: "default", value: "" },
      { text: "primary", value: "primary" },
      { text: "orange", value: "orange" },
      { text: "yellow", value: "yellow" },
      { text: "green", value: "green" },
      { text: "blue", value: "blue" },
      { text: "white", value: "white" }
      ]
    }
  },
  watch: {
    tabValue: function () {
      this.tab = this.tabValue
      return this.tab
    }
  },
  methods: {
    al: function (it) {
      // 真实环境应该读写数据库
      var index = this.messages.indexOf(it)
      console.log(index)
      if (index > -1) {
        this.messages.splice(index, 1)
      }
      this.$emit("update:message-count", this.messages.length)
    }
  },
  mounted () {
    // console.log(this.$vuetify.breakpoint)
    this.$emit("update:message-count", this.messages.length)
  },
  computed: {
    ...mapState(["appBar", "leftDrawer", "noLimit"])
  }
}
</script>

<style></style>
