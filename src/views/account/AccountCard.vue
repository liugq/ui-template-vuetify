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
        <v-row dense
               class="mx-1">
          <v-col v-for="item in props.items"
                 :key="item.accountId"
                 cols="12"
                 sm="4"
                 md="2"
                 lg="2">
            <v-hover v-slot:default="{ hover }">
              <div>
                <v-card :elevation="hover ? 24 : 2"
                        @click="edit(item)"
                        v-show="editAccountId !== item.accountId"
                        :class="{'animate__animated animate__flipInY':currentAccountId === item.accountId}">
                  <v-img :src="item.accountAvatar"></v-img>
                  <v-card-actions class="my-0 py-1">
                    <v-avatar>
                      <img :src="item.accountAvatar" />
                    </v-avatar>
                    <v-card-text class="px-0 py-0">
                      <v-card-title class="my-0 py-0"
                                    :class="{'text--disabled':item.status===-1}">{{ item.accountName }}</v-card-title>
                      <v-card-subtitle class="my-0 py-0">{{item.loginName}}</v-card-subtitle>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-switch v-model.number="item.status"
                              disabled
                              dense
                              :true-value="1"
                              :false-value="-1"
                              single-line
                              hide-details
                              class="mt-0"></v-switch>
                  </v-card-actions>
                  <v-card-subtitle class="pa-3">{{item.description}}</v-card-subtitle>
                </v-card>
                <!-- 编辑card -->
                <v-card :elevation="hover ? 24 : 2"
                        class="animate__animated animate__flipInY"
                        v-if="editAccountId === item.accountId">
                  <v-card-actions class="my-0 py-1">
                    <v-avatar>
                      <img :src="item.accountAvatar" />
                    </v-avatar>
                    <v-card-text class="px-0 py-0">
                      <v-card-title class="my-0 py-0"
                                    :class="{'text--disabled':item.status===-1}">{{ item.accountName }}</v-card-title>
                      <v-card-subtitle class="my-0 py-0">{{item.loginName}}</v-card-subtitle>
                    </v-card-text>
                  </v-card-actions>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-form ref="form"
                            v-model="valid">
                      <v-text-field v-model="item.loginName"
                                    :disabled="disabled"
                                    label="登陆账号"
                                    placeholder="登陆账号"
                                    :rules="fieldRules.loginName"
                                    dense></v-text-field>
                      <v-text-field v-model="item.accountName"
                                    :disabled="disabled"
                                    label="账号名"
                                    placeholder="账号名"
                                    :rules="fieldRules.accountName"
                                    dense></v-text-field>
                      <v-text-field v-model="item.description"
                                    :disabled="disabled"
                                    label="描述"
                                    placeholder="描述信息"
                                    dense></v-text-field>
                      <v-file-input v-model="files"
                                    :disabled="disabled"
                                    small-chips
                                    accept="image/*"
                                    show-size
                                    :multiple="multiple"
                                    :clearable="false"
                                    prepend-icon="mdi-camera"
                                    label="头像"
                                    placeholder="修改头像"
                                    @change="chg"
                                    dense>
                        <template v-slot:selection="{ file, index, text }">
                          <v-chip small
                                  close
                                  @click:close="upLoadFileclear(index)"
                                  class="pl-0">
                            <v-progress-circular :value="uploadFiles[index].uploadPercentage"
                                                 size="24"
                                                 width="1"
                                                 color="primary"
                                                 class="mr-1">{{ uploadFiles[index].uploadPercentage }}</v-progress-circular>
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                      <v-switch v-model.number="item.status"
                                :disabled="disabled"
                                :true-value="1"
                                :false-value="-1"
                                single-line
                                dense
                                hide-details
                                class="mt-0"
                                :label="`状态:${item.status === 1 ? '有效' : '无效'}`"></v-switch>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="disabled"
                           color="blue darken-1"
                           text
                           @click.stop="cancel(item)">
                      <v-icon left>$mycancel</v-icon>取消
                    </v-btn>
                    <v-btn :disabled="disabled && valid"
                           color="blue darken-1"
                           text
                           @click="handleEditSave(selectedAccount.accountName,selectedAccount)">
                      <v-icon left>$ok</v-icon>确定
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
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
      files: [],
      uploadFiles: [],
      formData: null,
      multiple: true,
      fieldRules: {},
      options: {},
      delDialog: { dialog: false, title: '删除' },
      dialog: false,
      formTitle: '创建值列表类型',
      currentAccountId: -1,
      editAccountId: -1,
      disabled: false,
      currentAccount: null, // { accountId: -1 }
      currentAccountBak: null,
      valid: true
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
    edit: function (item) {
      this.currentAccountId = item.accountId
      this.editAccountId = item.accountId
      //Object.assign(this.currentAccountBak, item)
      //console.log(this.currentAccountId)
    },
    cancel: function (item) {
      this.editAccountId = -1
      Object.assign(item, this.currentAccountBak)
    },
    upLoadFileclear: function (idx) {
      if (this.multiple) {
        this.files.splice(idx, 1)
        this.uploadFiles.splice(idx, 1)
      } else {
        this.files = []
        this.uploadFiles = []
      }
    },
    chg: function () {
      this.uploadFiles = []
      if (this.multiple) {
        for (let idx = 0; idx < this.files.length; idx++) {
          console.log(this.files[idx])
          this.upLoadFile(this.files[idx])
        }
      } else {
        this.upLoadFile(this.files)
      }
    },
    upLoadFile: function (file) {
      // 开始上传每一个文件
      var item = {
        name: file.name,
        uploadPercentage: 1,
        size: file.size, // this.formatFileSize(file.size, 0),
        uploadStatus: 0 // -1:上传出错,0:上传中,1:已上传
      }
      // console.log(item)
      this.uploadFiles.push(item)
      // 开始上传文件 新建一个formData
      let param = new FormData()
      param.append('name', 'liugq')
      // 通过append向form对象添加数据
      param.append('file', file)
      // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      // console.log(param.get('file'))
      // 判断大小
      // if (!this.checkFileSize(file.size)) {
      //   item.uploadStatus = -3
      //   return false
      // }
      // if (!this.checkFileType(file.name.split('.')[1])) {
      //   item.uploadStatus = -2
      //   return false
      // }
      // 通过axios上传文件
      // 配置
      let config = {
        // 添加请求头
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        // 添加上传进度监听事件
        onUploadProgress: e => {
          var completeProgress = ((e.loaded / e.total) * 100) | 0 // + '%'
          item.uploadPercentage = completeProgress
        }
      }
      this.$axios
        .post('https://jsonplaceholder.typicode.com/posts/', param, config)
        .then(function (response) {
          console.log(response)
          item.uploadStatus = 1
        })
        .catch(function (error) {
          console.log(error)
          item.uploadStatus = -1
        })
    }
  }
}
</script>
