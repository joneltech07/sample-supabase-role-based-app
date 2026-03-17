<script setup>
const supabase = useSupabaseClient()

const users = await $fetch('/api/admin/users')

const fetchUsers = async () => {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .in('status', ['pending', 'onboarding'])

  users.value = data || []
}

const approve = async id => {
  await supabase.from('profiles').update({ status: 'approved' }).eq('id', id)

  fetchUsers()
}

const reject = async id => {
  await supabase.from('profiles').update({ status: 'rejected' }).eq('id', id)

  fetchUsers()
}

onMounted(fetchUsers)
</script>

<template>
  <div>
    <h1>Registrants Approval</h1>

    <div v-for="user in users" :key="user.id">
      <p>{{ user.first_name }} {{ user.last_name }}</p>
      <p>Status: {{ user.status }}</p>

      <button @click="approve(user.id)">Approve</button>
      <button @click="reject(user.id)">Reject</button>
    </div>
  </div>
</template>
