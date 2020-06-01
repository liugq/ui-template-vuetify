<template>
  <div>
    <v-row dense
           class="mt-1 mx-1">
      <v-col cols="=12"
             sm="12"
             md="5"
             xs="12">
        <v-alert border="left"
                 colored-border
                 color="cyan"
                 elevation="2"
                 dense
                 icon="mdi-account-group"
                 class="font-weight-black mb-0">
          用户维护 Account Managerment
        </v-alert>
      </v-col>
    </v-row>
    <v-row dense
           class="mt-1 mx-1">
      <v-col cols="12"
             sm="12"
             md="3"
             xs="12">
        <account-list :selected-account.sync="currentAccount"></account-list>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="3"
             xs="12">
        <account-info :selected-account.sync="currentAccount"></account-info>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="6"
             xs="12"> </v-col>
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
