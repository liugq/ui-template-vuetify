<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <field-select :fields="headersAll"></field-select>
        <v-card-title class="pl-0">{{ lookupTypeInfo }}{{ keyWord }} Lookup Value</v-card-title>
        <v-spacer></v-spacer>
        <v-btn fab
               x-small
               color="primary"
               @click="handleAddPre()">
          <v-icon fab>$plus</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-data-table :headers="headers"
                    :items="dataList"
                    :items-per-page="page.pageSize"
                    :server-items-length="page.total"
                    :loading="loading"
                    :loading-text="loadingMsg"
                    :no-data-text="noDataText"
                    :options.sync="options"
                    :footer-props="{ itemsPerPageOptions: page.pageSizes }">
        <!-- 自定义各列显示方式,只要是定义编辑行时各列字段显示方式-->
        <template v-slot:item.lookupName="{ item }">
          <v-text-field v-if="editRowIndex === item.lookupId"
                        v-model="item.lookupName"
                        :label="headersAll.find(x => x.value === 'lookupName').text"
                        single-line
                        dense
                        :rules="fieldRules.lookupName"></v-text-field>
          <template v-else><span class="blue--text text--accent-4 font-weight-medium">{{
              item.lookupName
            }}</span></template>
        </template>
        <template v-slot:item.lookupCode="{ item }">
          <v-text-field v-if="editRowIndex === item.lookupId"
                        v-model="item.lookupCode"
                        :label="headersAll.find(x => x.value === 'lookupCode').text"
                        single-line
                        dense
                        :rules="fieldRules.lookupCode"></v-text-field>
          <template v-else><span class="blue--text text--accent-4 font-weight-medium">{{
              item.lookupCode
            }}</span></template>
        </template>
        <template v-slot:item.orderNumber="{ item }">
          <v-text-field v-if="editRowIndex === item.lookupId"
                        v-model.number="item.orderNumber"
                        :label="headersAll.find(x => x.value === 'orderNumber').text"
                        single-line
                        dense
                        :rules="fieldRules.orderNumber"></v-text-field>
          <template v-else>{{ item.orderNumber }}</template>
        </template>
        <template v-slot:item.status="{ item }">
          <v-switch v-model.number="item.status"
                    :true-value="1"
                    :false-value="-1"
                    single-line
                    hide-details
                    class="mt-0"
                    :disabled="editRowIndex != item.lookupId"
                    dense></v-switch>
        </template>
        <template v-slot:item.description="{ item }">
          <v-text-field v-if="editRowIndex === item.lookupId"
                        v-model="item.description"
                        :label="headersAll.find(x => x.value === 'description').text"
                        single-line
                        dense></v-text-field>
          <template v-else>{{ item.description }}</template>
        </template>
        <template v-slot:item.action="{ item }">
          <template v-if="editRowIndex !== item.lookupId">
            <v-icon small
                    class="mr-3"
                    @click="handleEdit(item.lookupId, item)">
              $edit
            </v-icon>
            <v-icon small
                    @click.stop="openModalDialog(delDialog, item)">
              $delete
            </v-icon>
          </template>
          <template v-else>
            <v-icon small
                    class="mr-3 red--text"
                    @click="handleEditCancel(item.lookupId, item)">
              $mycancel
            </v-icon>
            <v-icon small
                    class="red--text"
                    @click="handleEditSave(item.lookupId, item, '', false)">
              $ok
            </v-icon>
          </template>
        </template>
        <!-- /自定义各列显示方式,只要是定义编辑行时各列字段显示方式-->

        <!-- 多行新增 -->
        <template v-slot:body.append="{ headers, isMobile }">
          <tr v-for="(item, index) in appendData"
              :key="index">
            <td v-for="(header, key) in headers"
                :key="key"
                :class="
                isMobile
                  ? 'v-data-table__mobile-row v-data-table__mobile-row__wrapper'
                  : ''
              ">
              <div v-if="isMobile"
                   class="v-data-table__mobile-row__header red--text">
                {{ header.text }}
              </div>
              <div :class="isMobile ? 'v-data-table__mobile-row__cell' : ''">
                <!-- 多行内容 -->
                <template v-if="header.value == 'lookupId'">
                  <span class="red--text">*{{ index + 1 }}</span>
                </template>
                <template v-if="header.value == 'lookupName'">
                  <v-text-field v-model="item.lookupName"
                                :label="headersAll.find(x => x.value === 'lookupName').text"
                                :single-line="!isMobile"
                                dense
                                :rules="fieldRules.lookupName"></v-text-field>
                </template>
                <template v-if="header.value == 'lookupCode'">
                  <v-text-field v-model="item.lookupCode"
                                :label="headersAll.find(x => x.value === 'lookupCode').text"
                                :single-line="!isMobile"
                                dense
                                :rules="fieldRules.lookupCode"></v-text-field>
                </template>
                <template v-if="header.value == 'orderNumber'">
                  <v-text-field v-model.number="item.orderNumber"
                                :label="
                      headersAll.find(x => x.value === 'orderNumber').text
                    "
                                :single-line="!isMobile"
                                dense
                                :rules="fieldRules.orderNumber"></v-text-field>
                </template>
                <template v-if="header.value == 'status'">
                  <v-switch v-model.number="item.status"
                            :true-value="1"
                            :false-value="-1"
                            :single-line="!isMobile"
                            hide-details
                            class="mt-0"
                            dense></v-switch>
                </template>
                <template v-if="header.value == 'description'">
                  <v-text-field v-model="item.description"
                                :label="
                      headersAll.find(x => x.value === 'description').text
                    "
                                :single-line="!isMobile"
                                dense></v-text-field>
                </template>
                <template v-if="header.value == 'action'">
                  <v-icon small
                          class="mr-3 red--text"
                          @click="handleAddDel(index, item)">
                    $delete
                  </v-icon>
                  <v-icon small
                          class="red--text"
                          @click="handleAddSave(index, item)">
                    $ok
                  </v-icon>
                </template>
                <!-- /多行内容 -->
              </div>
            </td>
          </tr>
        </template>
        <!-- /多行新增 -->
      </v-data-table>
    </v-card>

    <!-- 删除提示对话框 -->
    <v-dialog v-model="delDialog.dialog"
              max-width="500px">
      <v-card>
        <v-card-title>
          <v-icon left>$alert</v-icon>{{ keyWord }} {{ delDialog.title }}
        </v-card-title>
        <v-card-text class="text--primary">
          您确定删除该{{ keyWord }}吗？
          <table v-if="singleSelection != null">
            <tr>
              <td>&#10022;</td>
              <td class="text-right">
                {{ headersAll.find(x => x.value === 'lookupId').text }}:
              </td>
              <td class="font-weight-bold pl-1">
                {{ singleSelection.lookupId }}
              </td>
            </tr>
            <tr>
              <td>&#10022;</td>
              <td class="text-right">
                {{ headersAll.find(x => x.value === 'lookupName').text }}:
              </td>
              <td class="font-weight-bold pl-1">
                {{ singleSelection.lookupName }}
              </td>
            </tr>
            <tr>
              <td>&#10022;</td>
              <td class="text-right">
                {{ headersAll.find(x => x.value === 'lookupCode').text }}:
              </td>
              <td class="font-weight-bold pl-1">
                {{ singleSelection.lookupCode }}
              </td>
            </tr>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"
                 text
                 @click.stop="delDialog.dialog = false">
            <v-icon left>$mycancel</v-icon>取消
          </v-btn>
          <v-btn color="blue darken-1"
                 text
                 @click.stop="handleDelete(singleSelection.lookupId, delDialog)">
            <v-icon left>$ok</v-icon>确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- /删除提示对话框 -->
  </div>
</template>
<script>
import { mixinQuery } from '@/lib/Mixin'
import FieldSelect from '../../components/FieldSelect.vue'
export default {
  name: 'lookup-value',
  mixins: [mixinQuery],
  components: {
    FieldSelect
  },
  props: {
    lookupType: Object
  },
  data () {
    return {
      keyWord: '值列表',
      urlMapOriginal: {
        getUrl: '/lookup/lookupvalue/',
        postUrl: '/lookup/lookupvalue/',
        putUrl: '/lookup/lookupvalue/',
        deleteUrl: '/lookup/lookupvalue/'
      },
      urlMap: {
        getUrl: '/lookup/lookupvalue/',
        postUrl: '/lookup/lookupvalue/',
        putUrl: '/lookup/lookupvalue/',
        deleteUrl: '/lookup/lookupvalue/'
      } /* --Crud需要用到的 Url,具体实例要实现 */,
      rules: {
        lookupName: [
          { required: true, message: '值列表名不能为空', trigger: 'blur' }
        ],
        lookupCode: [
          { required: true, message: '值列表值不能为空', trigger: 'blur' }
        ],
        orderNumber: [
          {
            type: 'number',
            required: true,
            message: '顺序不能为空,且必须为数字',
            trigger: 'blur'
          }
        ],
        status: [
          {
            type: 'number',
            required: true,
            message: '值列表状态不能为空,且必须为数字',
            trigger: 'blur'
          }
        ]
      },
      headersAll: [
        {
          text: 'ID',
          value: 'lookupId',
          width: 100,
          align: 'left',
          sortable: false,
          show: true
        },
        {
          text: '值列表名',
          value: 'lookupName',
          show: true,
          sortable: false
        },
        {
          text: '值列表值',
          value: 'lookupCode',
          show: true,
          sortable: false
        },
        {
          text: '顺序',
          value: 'orderNumber',
          width: 80,
          show: true,
          sortable: false
        },
        {
          text: '状态',
          value: 'status',
          width: 80,
          show: true,
          sortable: false
        },
        { text: '描述', value: 'description', show: true, sortable: false },
        {
          text: '操作',
          value: 'action',
          width: 100,
          sortable: false,
          show: true
        }
      ],
      fieldRules: {},
      options: {},
      delDialog: { dialog: false, title: '删除' },
      lookupTypeInfo: ''
    }
  },
  computed: {
    // v-data-table 使用的表头字段,之所以采用计算得到，是为了控制字段的界面显示（把headersAll中show:true过滤到headers）
    headers: function () {
      return this.headersAll.filter(x => x.show === true)
    }
  },
  mounted: function () {
    // async-validator 验证规则 转换为 vuetify默认使用的规则，便于vuetify使用
    this.asyncValidatorToVuetifyValidator(this.rules, this.fieldRules)
  },
  watch: {
    options: {
      handler: function () {
        this.page.pageSize = this.options.itemsPerPage
        this.page.currentPage = this.options.page
        this.getDataListHelp()
      },
      deep: true,
      immediate: false
    },
    lookupType: {
      handler: function (val, oldVal) {
        if (val) {
          if (val.lookupTypeId && val.lookupTypeId !== -1) {
            this.lookupTypeInfo =
              '"' + val.lookupTypeName + '[ID:' + val.lookupTypeId + ']" 的'
          }
          this.getDataListHelp()
        } else {
          this.lookupTypeInfo = ''
          this.dataList = []
        }
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    getDataListHelp: function () {
      this.urlMap.getUrl = this.urlMapOriginal.getUrl
      if (this.lookupType) {
        let lookupTypeId = this.lookupType.lookupTypeId
        if (lookupTypeId !== -1) {
          this.urlMap.getUrl += lookupTypeId + '/'
          this.dataList = []
          this.getDataList(this.page.pageSize, this.page.currentPage)
        }
      }
    },
    handleAddPre: function () {
      this.appendData.push({
        /* "lookupId": 0, */
        description: '',
        lookupCode: '',
        lookupName: '',
        orderNumber: 10,
        status: 1,
        fndLookupType: this.lookupType
      })
    }
  }
}
</script>
