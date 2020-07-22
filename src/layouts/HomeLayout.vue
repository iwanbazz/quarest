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
