export default defineNuxtRouteMiddleware(async () => {
	const user = useSupabaseUser()
	const supabase = useSupabaseClient()
	const { data: { session } } = await supabase.auth.getSession()

	// ⛔ WAIT until user is resolved
	if (user.value === null) {
		return
	}

	if (!session) {
		return navigateTo('/login')
	}

	const profile = await useUserProfile()

	if (!profile) return navigateTo('/login')

	if (profile.status === 'onboarding') {
		return navigateTo('/onboarding')
	}

	if (profile.status === 'pending') {
		return navigateTo('/pending')
	}
})