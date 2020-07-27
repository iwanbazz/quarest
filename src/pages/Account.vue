<template>
  <q-page>
    <q-toolbar separator>
      <q-toolbar-title class="text-center title">
        Account
      </q-toolbar-title>
      <q-btn flat no-caps dense label="Logout" size="md" class="btn-logout" />
    </q-toolbar>

    <q-separator />

    <q-item>
      <q-item-section side>
        <q-avatar size="70px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Jane Doe</q-item-label>
        <q-item-label caption>+6281365654390</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="img:qr-code.svg" size="md" clickable v-ripple />
      </q-item-section>
    </q-item>

    <q-chip color="deep-orange" text-color="white" class="chip">
      Member
    </q-chip>

    <q-separator />

    <q-list bordered separator>
      <q-item clickable v-ripple to="/profile/detail">
        <q-item-section>My Profile</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>My Store Credits</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Change Mobile Number</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Change Password</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {}
</script>

<style lang="scss">
.title {
  margin-left: 40px;
}
.btn-logout {
  color: #ff4500;
}
.chip {
  margin: 15px;
}
</style>
