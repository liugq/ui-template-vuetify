<template>
  <div>
    <v-row dense
           class="mt-1 mx-1">
      <v-col cols="12"
             sm="12"
             md="6"
             xs="12">
        <v-alert tile
                 dense
                 border="left"
                 colored-border
                 color="blue-grey lighten-2"
                 icon="mdi-account-group"
                 class="py-1 my-0 font-weight-bold blue-grey--text text--lighten-2">
          用户维护 Account Managerment
        </v-alert>
      </v-col>
    </v-row>
    <v-data-iterator :items="dataList"
                     :items-per-page="page.pageSize"
                     :server-items-length="page.total"
                     :loading="loading"
                     :loading-text="loadingMsg"
                     :options.sync="options"
                     :footer-props="{ itemsPerPageOptions: [] }">
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items"
                 :key="item.accountId"
                 cols="12"
                 sm="4"
                 md="2"
                 lg="2">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 24 : 2"
                      @click="test(item)">
                <v-img :src="item.accountAvatar"></v-img>
                <div class="d-flex align-center ma-1">
                  <v-avatar>
                    <img :src="item.accountAvatar" />
                  </v-avatar>
                  <div>
                    <v-card-title class="my-0 py-0">{{ item.accountName }}</v-card-title>
                    <v-card-subtitle class="my-0 py-0">{{item.loginName}}</v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </div>
</template>
<script>
/*import AccountList from './AccountList'
import AccountInfo from './AccountInfo'*/
import { mixinQuery } from '@/lib/Mixin'
export default {
  name: 'account-list',
  mixins: [mixinQuery],
  props: {
    selectedAccount: Object
  },
  components: {
    /*AccountList,
    AccountInfo*/
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
      currentAccountId: -1,
      disabled: true,
      currentAccount: null // { accountId: -1 }
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
    edit: function () {
      this.disabled = !(this.disabled)
    },
    test: function (item) {
      console.log(item)
    }
  }
}
</script>
