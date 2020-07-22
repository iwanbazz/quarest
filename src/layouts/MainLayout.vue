<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-grey-10">
      <q-toolbar>
        <q-select
          v-model="lang"
          :options="langOptions"
          hide-dropdown-icon
          dense
          borderless
          emit-value
          map-options
          options-dense
          dark
        />
        <q-toolbar-title class="text-center">
          Dinosys
        </q-toolbar-title>

        <q-btn flat dense round icon="restaurant_menu">
          <q-badge color="red" floating>2</q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-grey-1">
      <q-toolbar class="justify-around">
        <div>
          <q-btn
            flat
            color="blue-grey-6"
            icon="restaurant"
            label="Menu"
            no-caps
            no-wrap
            stack
            to="/"
          />
        </div>
        <div>
          <q-btn
            flat
            color="blue-grey-6"
            icon="shopping_cart"
            label="Orders"
            no-caps
            no-wrap
            stack
            to="/orders"
          />
        </div>
        <div>
          <q-btn
            icon="card_giftcard"
            color="blue-grey-6"
            flat
            label="Promotions"
            no-caps
            no-wrap
            stack
            to="/promo"
          />
        </div>
        <div>
          <q-btn
            flat
            color="blue-grey-6"
            icon="person"
            label="Account"
            no-caps
            no-wrap
            stack
            to="/profile"
          />
        </div>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  components: {},

  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'EN' },
        { value: 'zh', label: '中文' },
      ],
    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
    },
  },
}
</script>

<style lang="scss"></style>
