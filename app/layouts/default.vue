<!-- layouts/default.vue -->
<script setup>
onMounted(async () => {
  const profile = useProfileState()
  profile.value = await useRequireProfile()
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
