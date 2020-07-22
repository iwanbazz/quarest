<template>
  <q-toolbar>
    <q-toolbar-title class="text-center">
      Account
    </q-toolbar-title>
    <q-btn flat label="Logout" />
  </q-toolbar>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      errors: [],
      apiUrl: 'http://35.240.147.181:1337',
    }
  },

  created() {
    axios
      .get(`http://35.240.147.181:1337/products/`)
      .then(response => {
        this.products = response.data
        console.log('product :', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
}
</script>

<style lang="scss">
.my-card {
  width: 100%;
  height: 100%;
  max-width: 650px;
  max-height: 650px;
}
.price {
  bottom: 0;
}
</style>
