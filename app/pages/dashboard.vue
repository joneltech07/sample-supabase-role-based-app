<script setup>
import Authenticated from '~/layouts/authenticated.vue'

const user = useSupabaseUser()

definePageMeta({
  middleware: 'approved'
})
</script>

<template>
  <Authenticated>
    <div v-if="user">Welcome {{ user.user_metadata.full_name }}</div>
  </Authenticated>
</template>
