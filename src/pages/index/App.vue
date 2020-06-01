<template>
  <router-view />
</template>
<style lang="scss">
html {
  overflow-y: auto !important;
}

tr.v-data-table__progress {
  div.v-progress-linear {
    top: -1px;
    height: 1px !important;

    /* div.v-progress-linear__background {
      position: relative !important;
    }
    */
  }
}
.theme--light .v-data-table tbody {
  tr:nth-child(odd) {
    background-color: #fafafa;
  }
}
.v-data-table {
  td,
  th {
    height: 41px !important;
  }
  .v-text-field__details {
    min-height: auto !important;
    .v-messages {
      min-height: auto !important;
    }
  }
}
</style>
