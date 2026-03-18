<template>
  <Approval />
</template>

<script setup lang="ts">
// pages/admin/users.vue
definePageMeta({
  layout: 'authenticated',
  middleware: ['approved', 'admin']
})
</script>
