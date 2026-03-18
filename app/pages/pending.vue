<template>
  <div>
    <h1>Account Pending Approval</h1>
    <p>Your account is waiting for admin approval.</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'pending'
})
</script>
