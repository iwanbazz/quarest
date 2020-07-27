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

    <div class="q-pa-sm q-pt-md row">
      <div class="q-pa-sm col">
        <q-input
          outlined
          clearable
          v-model="firstName"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please input firstname']"
          label="First Name *"
        />
      </div>
      <div class="q-pa-sm col">
        <q-input
          outlined
          clearable
          v-model="lastName"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please input lastname']"
          label="Last Name *"
        />
      </div>
    </div>
    <div class="q-px-sm row">
      <div class="q-px-sm col">
        <q-input
          outlined
          clearable
          v-model="email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please input lastname']"
          label="Email *"
        />
      </div>
    </div>
    <div class="q-pa-sm row">
      <div class="q-px-sm col">
        <q-select outlined v-model="day" :options="days" label="Date" />
      </div>
      <div class="q-px-sm col">
        <q-select outlined v-model="month" :options="months" label="Month" />
      </div>
      <div class="q-px-sm col">
        <q-select outlined v-model="year" :options="years" label="Year" />
      </div>
    </div>
    <div class="q-pa-sm row">
      <div class="q-pa-sm col text-center">
        <q-btn color="primary" size="30px" label="Male" no-caps class="btn" />
      </div>
      <div class="q-pa-sm col text-center">
        <q-btn color="primary" size="30px" label="Female" no-caps class="btn" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@gmail.com',
      day: 21,
      month: 'September',
      year: 1988,
      days: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
      ],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      years: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1990],
    }
  },
}
</script>

<style lang="scss">
.btn-logout {
  color: #ff4500;
}
.btn {
  width: 100%;
}
</style>
