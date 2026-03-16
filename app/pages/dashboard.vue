<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const profile = await useUserProfile()
const instruments = await useInstruments()

const logout = async () => {
  await supabase.auth.signOut()
}

definePageMeta({
  middleware: 'approved'
})
</script>

<template>
  <div v-if="user">Welcome {{ user.user_metadata.full_name }}</div>

  <div>
    <button @click="logout">Logout</button>
  </div>
</template>
