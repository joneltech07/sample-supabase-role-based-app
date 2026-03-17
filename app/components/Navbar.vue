<!-- components/Navbar.vue -->
<script setup>
const supabase = useSupabaseClient()
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

const logout = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <nav>
    <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
      {{ link.name }}
    </NuxtLink>
  </nav>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>
