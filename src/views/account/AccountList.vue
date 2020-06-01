<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <v-card-title class="pl-0">{{ keyWord }} Account List</v-card-title>
        <v-spacer></v-spacer>
        <v-btn fab
               x-small
               color="primary"
               @click="add">
          <v-icon fab>$plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>

      <v-data-iterator :items="dataList"
                       :items-per-page="page.pageSize"
                       :server-items-length="page.total"
                       :loading="loading"
                       :loading-text="loadingMsg"
                       :options.sync="options"
                       :footer-props="{ itemsPerPageOptions: [] }">
        <template v-slot:default="props">
          <v-list subheader
                  dense
                  three-line>
            <v-list-item-group v-model="currentAccountId"
                               color="primary">
              <v-list-item v-for="item in props.items"
                           :key="item.accountId"
                           @click.stop="selected(item)"
                           three-line>
                <v-list-item-avatar>
                  <v-img :src="item.accountAvatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title :class="{'grey--text text--lighten-1':item.status===-1}">
                    <span class="subtitle-1 font-weight-bold">{{ item.loginName }}</span>
                    <v-divider vertical
                               class="mx-2"
                               style="height:1rem;"></v-divider>
                    <span>{{ item.accountName }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                  <v-list-item-subtitle>状态:{{item.status===1?'有效':'无效'}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </template>
      </v-data-iterator>
    </v-card>
  </div>
</template>
<script>
import { mixinQuery } from '@/lib/Mixin'
export default {
  name: 'account-list',
  mixins: [mixinQuery],
  props: {
    selectedAccount: Object
  },
  data () {
    return {
      keyWord: '用户列表',
      urlMap: {
        getUrl: '/login/account/',
        postUrl: '/login/account/',
        putUrl: '/login/account/',
        deleteUrl: '/login/account/'
      } /* --Crud需要用到的 Url,具体实例要实现 */,
      headersAll: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'lookupTypeId',
          width: 100,
          show: true
        },
        { text: '类型名', value: 'lookupTypeName', show: true },
        { text: '状态', value: 'status', width: 80, show: true },
        { text: '描述', value: 'description', show: true },
        {
          text: '操作',
          value: 'action',
          sortable: false,
          width: 100,
          show: true
        }
      ],
      rules: {
        lookupTypeName: [
          { required: true, message: '值列表类型名不能为空', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名长度为3-10' }
        ],
        description: [
          { required: true, message: '描述不能为空', trigger: 'blur' },
          { min: 10, max: 30, message: '描述长度为10-30' }
        ]
      },
      fieldRules: {},
      options: {},
      delDialog: { dialog: false, title: '删除' },
      dialog: false,
      formTitle: '创建值列表类型',
      currentAccountId: -1
    }
  },
  mounted: function () {
    this.getDataList(this.page.pageSize, this.page.currentPage)
  },
  watch: {
    options: {
      handler: function () {
        this.page.pageSize = this.options.itemsPerPage
        this.page.currentPage = this.options.page
        this.getDataList(this.page.pageSize, this.page.currentPage)
      },
      deep: true
    }
  },
  methods: {
    add: function () {
      console.log('add')
    },
    selected: function (row) {
      this.currentAccountId = row.accountId
      this.$emit('update:selected-account', row)
    },
    edit: function (item) {
      console.log(item)
    }
  }

}
</script>
