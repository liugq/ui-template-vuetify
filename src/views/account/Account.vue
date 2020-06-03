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
    <v-row dense
           class="mt-1 mx-1">
      <v-col sm="6"
             md="3"
             xs="12">
        <account-list :selected-account.sync="currentAccount"></account-list>
      </v-col>
      <v-col sm="6"
             md="3"
             xs="12">
        <account-info :selected-account.sync="currentAccount"></account-info>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AccountList from './AccountList'
import AccountInfo from './AccountInfo'
export default {
  components: {
    AccountList,
    AccountInfo
  },
  data () {
    return {
      currentAccount: null // { accountId: -1 }
    }
  }
}
</script>
