<template>
  <Authenticated>
    <Approval />
  </Authenticated>
</template>

<script setup lang="ts">
import Authenticated from '~/layouts/authenticated.vue'

// pages/admin/users.vue
definePageMeta({
  middleware: 'admin'
})
</script>
