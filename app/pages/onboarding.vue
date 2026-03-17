<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const firstName = ref('')
const lastName = ref('')
const birthDate = ref('')
const invitedBy = ref('')
const sex = ref('')
const maritalStat = ref('')
const attendanceStat = ref('')

// Pre-fill from Google
onMounted(() => {
  firstName.value = user.value?.user_metadata?.given_name || ''
  lastName.value = user.value?.user_metadata?.family_name || ''

  if (profile.first_name && profile.last_name) {
    navigateTo('/pending')
  }
})

const isValid = computed(
  () =>
    firstName.value &&
    lastName.value &&
    birthDate.value &&
    sex.value &&
    maritalStat.value &&
    attendanceStat.value
)

const submit = async () => {
  const { error } = await supabase
    .from('profiles')
    .update({
      first_name: firstName.value,
      last_name: lastName.value,
      birth_date: birthDate.value,
      invited_by: invitedBy.value,
      sex: sex.value,
      marital_stat: maritalStat.value,
      attendance_stat: attendanceStat.value,
      status: 'pending'
    })
    .eq('id', user.value.sub)

  if (!error) {
    navigateTo('/pending')
  }
}
</script>

<template>
  <div>
    <h1>Complete Your Profile</h1>

    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />

    <input v-model="birthDate" type="date" />

    <input v-model="invitedBy" placeholder="Invited By" />

    <select v-model="sex">
      <option value="">Select Sex</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    <select v-model="maritalStat">
      <option value="">Marital Status</option>
      <option value="single">Single</option>
      <option value="married">Married</option>
      <option value="widowed">Widowed</option>
      <option value="separated">Separated</option>
    </select>

    <select v-model="attendanceStat">
      <option value="">Attendance</option>
      <option value="new">New</option>
      <option value="regular">Regular</option>
      <option value="irregular">Irregular</option>
    </select>

    <button @click="submit">Submit</button>
  </div>
</template>
