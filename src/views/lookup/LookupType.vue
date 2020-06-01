<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <field-select :fields="headersAll"></field-select>
        <v-card-title class="pl-0">{{ keyWord }} Lookup Type</v-card-title>
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
                    :options.sync="options"
                    :footer-props="{ itemsPerPageOptions: page.pageSizes }"
                    @click:row="clk">
        <!-- 自定义各列显示方式,只要是定义编辑行时各列字段显示方式-->
        <template v-slot:item.lookupTypeName="{ item }">
          <v-text-field v-if="editRowIndex === item.lookupTypeId"
                        v-model="item.lookupTypeName"
                        :label="headersAll.find(x => x.value === 'lookupTypeName').text"
                        single-line
                        dense
                        :rules="fieldRules.lookupTypeName"></v-text-field>
          <template v-else>{{ item.lookupTypeName }}</template>
        </template>
        <template v-slot:item.status="{ item }">
          <v-switch v-model.number="item.status"
                    :true-value="1"
                    :false-value="-1"
                    single-line
                    hide-details
                    class="mt-0"
                    :disabled="editRowIndex != item.lookupTypeId"
                    dense></v-switch>
        </template>
        <template v-slot:item.description="{ item }">
          <v-text-field v-if="editRowIndex === item.lookupTypeId"
                        v-model="item.description"
                        label="描述"
                        single-line
                        dense
                        :rules="fieldRules.description"></v-text-field>
          <template v-else>{{ item.description }}</template>
        </template>
        <template v-slot:item.action="{ item }">
          <template v-if="editRowIndex !== item.lookupTypeId">
            <v-icon small
                    class="mr-3"
                    @click="handleEdit(item.lookupTypeId, item)">
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
                    @click="handleEditCancel(item.lookupTypeId, item)">
              $mycancel
            </v-icon>
            <v-icon small
                    class="red--text"
                    @click="handleEditSave(item.lookupTypeId, item, '', false)">
              $ok
            </v-icon>
          </template>
        </template>
        <!-- /自定义各列显示方式,只要是定义编辑行时各列字段显示方式-->

        <!-- 多行新增 -->
        <template v-slot:body.append="{ headers, isMobile }">
          <tr v-for="(item, index) in appendData"
              :key="index">
            <v-form ref="form"> </v-form>
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
                <template v-if="header.value == 'lookupTypeId'">
                  <span class="red--text">*{{ index + 1 }}</span>
                </template>
                <template v-if="header.value == 'lookupTypeName'">
                  <v-text-field v-model="item.lookupTypeName"
                                :label="
                      headersAll.find(x => x.value === 'lookupTypeName').text
                    "
                                :single-line="!isMobile"
                                dense
                                :rules="fieldRules.lookupTypeName"></v-text-field>
                </template>
                <template v-if="header.value == 'status'">
                  <v-switch v-model.number="item.status"
                            :true-value="1"
                            :false-value="-1"
                            single-line
                            hide-details
                            class="mt-0"
                            dense
                            required></v-switch>
                </template>
                <template v-if="header.value == 'description'">
                  <v-text-field v-model="item.description"
                                :label="
                      headersAll.find(x => x.value === 'description').text
                    "
                                :single-line="!isMobile"
                                dense
                                required
                                :rules="fieldRules.description"></v-text-field>
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
                {{ headersAll.find(x => x.value === 'lookupTypeId').text }}:
              </td>
              <td class="font-weight-bold pl-1">
                {{ singleSelection.lookupTypeId }}
              </td>
            </tr>
            <tr>
              <td>&#10022;</td>
              <td class="text-right">
                {{ headersAll.find(x => x.value === 'lookupTypeName').text }}:
              </td>
              <td class="font-weight-bold pl-1">
                {{ singleSelection.lookupTypeName }}
              </td>
            </tr>
            <tr>
              <td>&#10022;</td>
              <td class="text-right">
                {{ headersAll.find(x => x.value === 'description').text }}:
              </td>
              <td class="font-weight-bold pl-1">
                {{ singleSelection.description }}
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
                 @click.stop="handleDelete(singleSelection.lookupTypeId, delDialog)">
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
  name: 'lookup-type-query',
  mixins: [mixinQuery],
  components: {
    FieldSelect
  },
  props: {
    selectedLookupType: Object
  },
  data () {
    return {
      keyWord: '值列表类型',
      urlMap: {
        getUrl: '/lookup/lookuptype/',
        postUrl: '/lookup/lookuptype/',
        putUrl: '/lookup/lookuptype/',
        deleteUrl: '/lookup/lookuptype/'
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
      formTitle: '创建值列表类型'
    }
  },
  computed: {
    // v-data-table 使用的表头字段,之所以采用计算得到，是为了控制字段的界面显示（把headersAll中show:true过滤到headers）
    headers: function () {
      return this.headersAll.filter(x => x.show === true)
    }
  },
  mounted: function () {
    this.asyncValidatorToVuetifyValidator(this.rules, this.fieldRules)
    // this.getDataList(this.page.pageSize, this.page.currentPage)
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
    handleAddPre: function () {
      this.appendData.push({
        lookupTypeId: 0,
        description: '',
        lookupTypeName: '',
        status: 1
      })
    },
    clk: function (row) {
      // this.selectedLookupType = row
      this.$emit('update:selected-lookup-type', row)
    }
  }
}
</script>
