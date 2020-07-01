<template>
  <v-app>
    <v-container>
      <v-content>
        <div class="py-12">
          <div class="text-center">
            <h1 class="error-title error--text">404</h1>
            <h3>没有发现您请求的页面 PAGE NOT FOUND !</h3>
            <v-btn rounded
                   color="primary"
                   href="/home"
                   class="mt-4">返回主页面 Go to Home</v-btn>
          </div>
        </div>
      </v-content>
    </v-container>
  </v-app>
</template>
<style scoped>
.error-title {
  font-size: 200px;
  font-weight: 900;
  text-shadow: 4px 4px 0 #fff, 6px 6px 0 #343a40;
  line-height: 210px;
}
</style>
