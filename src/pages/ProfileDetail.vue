<template>
  <q-page>
    <q-toolbar separator>
      <q-btn flat dense icon="chevron_left" to="/profile" />
      <q-toolbar-title class="text-center">
        Details
      </q-toolbar-title>
      <q-btn flat no-caps dense label="Logout" size="md" class="btn-logout" />
    </q-toolbar>

    <q-separator />

    <div class="row">
      <div class="q-ma-md q-pt-sm col text-center">
        <q-chip color="deep-orange" text-color="white">
          Member
        </q-chip>
      </div>
      <div class="q-ma-sm col text-center">
        <q-avatar size="70px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
      <div class="q-ma-md q-pt-sm col text-center">
        <q-icon name="img:qr-code.svg" size="md" clickable v-ripple />
      </div>
    </div>

    <q-separator />

    <div class="q-pa-md row">
      <div class="q-pt-md col">
        <q-input
          outlined
          v-model="text"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please input firstname']"
          label="First Name *"
        />
      </div>
      <div class="q-pt-md col">
        <q-input
          outlined
          v-model="text"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please input lastname']"
          label="Last Name *"
        />
      </div>
    </div>
    <div class="q-pa-md row">
      <div class="q-pa-sm col">
        <q-input
          outlined
          v-model="text"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please input lastname']"
          label="Last Name *"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style lang="scss">
.btn-logout {
  color: #ff4500;
}
</style>
