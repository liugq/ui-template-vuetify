<template>
  <v-menu :close-on-content-click="false"
          dense
          transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn small
             icon
             v-on="on">
        <v-icon color="blue">$filter</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <div class="subtitle-1 pl-1">
        <v-icon>$filter</v-icon> 选择字段
      </div>
      <v-list-item v-for="(item, index) in fields"
                   :key="index"
                   dense>
        <v-checkbox v-model="item.show"
                    :label="item.text"
                    hide-details
                    dense
                    class="px-0 my-0"></v-checkbox>
      </v-list-item>
    </v-list>

  </v-menu>
</template>

<script>
export default {
  props: {
    'fields': {
      type: Array
    }
  }
}
</script>

<style>
</style>
