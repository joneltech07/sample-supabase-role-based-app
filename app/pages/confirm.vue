<script setup>
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/dashboard')
  }
})
</script>

<template>
  <p>Signing you in...</p>
</template>
