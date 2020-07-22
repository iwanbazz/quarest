<template>
  <q-page>
    <q-tabs>
      <q-tab name="special" label="Special" no-caps />
      <q-tab name="chef-picks" label="Chef Picks" no-caps />
      <q-tab name="soup" label="Soup" no-caps />
      <q-tab name="new" label="New" no-caps />
      <q-tab name="meat" label="Meat" no-caps />
      <q-tab name="appetizer" label="Appetizer" no-caps />
    </q-tabs>
    <q-list class="bg-white" separator bordered>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          class="row my-card"
          v-for="product in products"
          :key="product.id"
        >
          <q-img :src="apiUrl + product.image.url" />
          <q-card-section>
            <p>{{ product.title }}</p>
            <div class="text-subtitle2 price">$ {{ product.price }}</div>
          </q-card-section>
        </q-card>
      </div>
    </q-list>
  </q-page>
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
      .get('http://35.240.147.181:1337/products/')
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
  max-width: 150px;
  max-height: 200px;
}
.price {
  bottom: 0;
}
</style>
