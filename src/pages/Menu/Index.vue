<template>
  <q-page>
    <div>
      <q-tabs elevated>
        <q-tab
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
          :label="category.name"
          no-caps
        />
      </q-tabs>
    </div>
    <div>
      <q-tabs class="bg-white" separator bordered>
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
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      categories: [],
      errors: [],
      apiUrl: 'http://35.240.147.181:1337',
    }
  },

  created() {
    axios
      .get('http://35.240.147.181:1337/products/')
      .then(response => {
        this.products = response.data
        console.log('products :', response.data)
      })
      .catch(e => {
        this.errors.push(e)
      }),
      axios
        .get('http://35.240.147.181:1337/categories/')
        .then(response => {
          this.categories = response.data
          console.log('categories :', response.data)
        })
        .catch(e => {
          this.error.push(e)
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
