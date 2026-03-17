<!-- layouts/default.vue -->
<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const profile = useProfileState()

onMounted(async () => {
  if (!user.value) return

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.value.sub)
    .single()

  profile.value = data
})
</script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>
