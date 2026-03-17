<!-- layouts/default.vue -->
<script setup>
onMounted(async () => {
  const supabase = useSupabaseClient()
  const profile = useProfileState()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) return

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  profile.value = data
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
