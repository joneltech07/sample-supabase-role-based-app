export const useUserProfile = async () => {
	const supabase = useSupabaseClient()
	const user = useSupabaseUser()

	if (!user.value || !user.value.sub) {
		return null
	}

	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.value.sub)
		.maybeSingle()

	if (error) {
		console.error(error)
		return null
	}

	return data
}

export const useInstruments = async () => {
	const supabase = useSupabaseClient()
	const { data, error } = await supabase.from('instruments').select('*')

	if (error) {
		console.error(error)
		return []
	}

	return data
}