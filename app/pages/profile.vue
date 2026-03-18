<script setup>
import Authenticated from '~/layouts/authenticated.vue'

const profile = useProfileState()

definePageMeta({
  middleware: 'approved'
})
</script>

<template>
  <Authenticated>
    <div v-if="profile">
      <h1>Profile <span v-if="profile.role === 'admin'">Admin</span></h1>

      <p>{{ profile.first_name }} {{ profile.last_name }}</p>
      <p>{{ profile.email }}</p>
      <p>Status: {{ profile.status }}</p>
    </div>
  </Authenticated>
</template>
