<!-- components/Navbar.vue -->
<script setup>
const profile = useProfileState()

const links = computed(() => {
  if (!profile.value) return []

  if (profile.value.role === 'admin') {
    return [
      { name: 'Dashboard', to: '/dashboard' },
      { name: 'Profile', to: '/profile' },
      { name: 'Users', to: '/admin/users' }
    ]
  }

  return [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Profile', to: '/profile' }
  ]
})
</script>

<template>
  <nav>
    <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>
