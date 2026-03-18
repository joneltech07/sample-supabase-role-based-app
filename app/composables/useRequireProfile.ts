export const useRequireProfile = async () => {
	const supabase = useSupabaseClient()
	const profile = useProfileState()

	if (!profile.value) {
		// ✅ SECURE: verify user with Supabase server
		const { data: { user }, error } = await supabase.auth.getUser()

		if (error || !user) return null

		const { data } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', user.id)
			.single()

		if (!data) return null

		profile.value = data
	}

	return profile.value
}