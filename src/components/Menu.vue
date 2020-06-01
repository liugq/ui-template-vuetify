<template>
  <v-list dense>
    <v-list-item
      v-for="item in menu_items"
      :key="item.title"
      link
      :to="item.url"
    >
      <v-list-item-icon>
        <v-icon dense>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      menu_items: [
        { title: 'Home', icon: 'mdi-home-city', url: '/' },
        { title: 'Look Up', icon: 'mdi-view-list', url: '/home/lookup' },
        { title: 'Account', icon: 'mdi-account-group', url: '/home/account' },
        { title: 'Login', icon: 'mdi-login', url: '/login' }
      ]
    }
  }
}
</script>
