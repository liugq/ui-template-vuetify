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
                 icon="mdi-view-list"
                 class="font-weight-black mb-0">
          值列表维护 Lookup Value Managerment
        </v-alert>
      </v-col>
    </v-row>
    <v-row dense
           class="mt-1 mx-1">
      <v-col cols="12"
             sm="12"
             md="5"
             xs="12">
        <v-type :selected-lookup-type.sync="selectedRow"></v-type>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="7"
             xs="12">
        <v-value :lookup-type="selectedRow"></v-value>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VType from './LookupType'
import VValue from './LookupValue'
export default {
  components: {
    VType,
    VValue
  },
  data () {
    return {
      selectedRow: null
    }
  }
}
</script>
