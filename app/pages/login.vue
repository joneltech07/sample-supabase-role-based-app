<script setup>
const supabase = useSupabaseClient()

const loginWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/confirm'
    }
  })
}
</script>

<template>
  <button @click="loginWithGoogle">Login with Google</button>
</template>
