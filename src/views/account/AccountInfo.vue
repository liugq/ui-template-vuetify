<template>
  <v-card>
    <template v-if="!!selectedAccount">
      <v-toolbar flat>
        <v-card-title>
          <v-avatar>
            <img :src="selectedAccount.accountAvatar" />
          </v-avatar>
          <span class="font-weight-bold ml-2">{{
            selectedAccount.loginName
          }}</span>
          <v-divider vertical
                     inset
                     class="mx-2"></v-divider>
          <span class="subtitle-2">{{ selectedAccount.accountName }}</span>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn fab
               x-small
               color="primary"
               :disabled="!disabled"
               @click.stop="edit">
          <v-icon fab>$edit</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="form"
                v-model="valid">
          <v-text-field v-model="selectedAccount.loginName"
                        :disabled="disabled"
                        label="登陆账号"
                        placeholder="登陆账号"
                        :rules="fieldRules.loginName"></v-text-field>
          <v-text-field v-model.number="selectedAccount.employeeId"
                        :disabled="disabled"
                        label="账号ID"
                        placeholder="账号ID"></v-text-field>
          <v-text-field v-model="selectedAccount.accountName"
                        :disabled="disabled"
                        label="账号名"
                        placeholder="账号名"
                        :rules="fieldRules.accountName"></v-text-field>
          <v-text-field v-model="selectedAccount.description"
                        :disabled="disabled"
                        label="描述"
                        placeholder="描述信息"></v-text-field>
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
                        @change="chg">
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
          <v-switch v-model.number="selectedAccount.status"
                    :disabled="disabled"
                    :true-value="1"
                    :false-value="-1"
                    single-line
                    hide-details
                    class="mt-0"
                    :label="`状态:${selectedAccount.status === 1 ? '有效' : '无效'}`"></v-switch>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="disabled"
               color="blue darken-1"
               text
               @click.stop="cancel">
          <v-icon left>$mycancel</v-icon>取消
        </v-btn>
        <v-btn :disabled="disabled && valid"
               color="blue darken-1"
               text
               @click="handleEditSave(selectedAccount.accountName,selectedAccount)">
          <v-icon left>$ok</v-icon>确定
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
import { mixinQuery } from '@/lib/Mixin'
export default {
  name: 'zccount-infp',
  mixins: [mixinQuery],
  props: {
    selectedAccount: {}
  },
  data () {
    return {
      keyWord: '用户信息',
      urlMap: {
        getUrl: '/login/account/',
        postUrl: '/login/account/',
        putUrl: '/login/account/',
        deleteUrl: '/login/account/'
      } /* --Crud需要用到的 Url,具体实例要实现 */,
      disabled: true,
      files: [],
      uploadFiles: [],
      formData: null,
      multiple: true,
      selectedAccountBak: { accountId: -1 },
      valid: true,
      rules: {
        accountId: [{ required: true, message: '账号ID不能为空' }],
        loginName: [
          { required: true, message: '登录账号不能为空', trigger: 'blur' },
          { min: 3, max: 20, message: '登录账号长度为3-20' }
        ],
        accountName: [
          { required: true, message: '账号名不能为空', trigger: 'blur' },
          { min: 2, max: 30, message: '账号名长度为10-30' }
        ]
      },
      fieldRules: {},
    }
  },
  mounted: function () {
    this.asyncValidatorToVuetifyValidator(this.rules, this.fieldRules)
  },

  watch: {
    selectedAccount: function (newVal, oldVal) {

      if (this.selectedAccountBak.accountId !== this.selectedAccount.accountId) {
        // oldVal = Object.assign({}, this.selectedAccountBak)
        Object.assign(this.selectedAccountBak, newVal)
        this.disabled = true
      }
    }
  },
  methods: {
    edit: function () {
      this.disabled = !(this.disabled)
    },
    cancel: function () {
      //this.selectedAccount = {}
      Object.assign(this.selectedAccount, this.selectedAccountBak)
      this.disabled = true
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
        for (let idx = 0;idx < this.files.length;idx++) {
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
    // formatFileSize: function (fileSize, idx) {
    //   var units = ['B', 'KB', 'MB', 'GB']
    //   idx = idx || 0
    //   if (fileSize < 1024 || idx === units.length - 1) {
    //     return fileSize.toFixed(1) +
    //       units[idx]
    //   }
    //   return this.formatFileSize(fileSize / 1024, ++idx)
    // },
    // checkFileType: function (fileType) {
    //   const acceptTypes = ['xls', 'doc', 'jpg', 'png']
    //   for (var i = 0;i < acceptTypes.length;i++) {
    //     if (fileType === acceptTypes[i]) {
    //       return true
    //     }
    //   }
    //   return false
    // },
    // checkFileSize: function (fileSize) {
    //   // 2M
    //   const MAX_SIZE = 2 * 1024 * 1024
    //   if (fileSize > MAX_SIZE) {
    //     return false
    //   }
    //   return true
    // }
  }
}
</script>
