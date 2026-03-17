export default defineNuxtRouteMiddleware(async () => {
	const user = useSupabaseUser()

	if (!user.value) {
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