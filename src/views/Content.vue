<template>
  <v-row dense
         class="mx-1">
    <v-col cols="12"
           sm="12"
           md="8"
           xs="12">
      <v-card>
        <v-img class="white--text align-end"
               :aspect-ratio="21 / 6"
               src="https://picsum.photos/1920/1080?random">
          <v-card-title>Random Photo</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Random Photo</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>https://picsum.photos/1920/1080?random</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange"
                 text>
            Share
          </v-btn>

          <v-btn color="orange"
                 text>
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12"
           sm="12"
           md="4"
           xs="12">
      <v-card>
        <v-img class="white--text align-end"
               :aspect-ratio="21 / 6"
               :src="require('../assets/img/tea.jpg')">
          <v-card-title>Tea</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Tea</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Tea</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12"
           sm="12"
           md="2"
           xs="12">
      <v-card>
        <v-img class="white--text align-end"
               :src="require('../assets/img/fu.png')">
          <v-card-title>Tea</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Tea</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Tea</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {}
}
</script>
