export default defineNuxtRouteMiddleware(async () => {
	const user = useSupabaseUser()

	if (!user.value) {
		return navigateTo('/login')
	}

	const profile = await useUserProfile()

	if (!profile) {
		return navigateTo('/pending')
	}

	if (profile.status === 'pending') {
		return navigateTo('/pending')
	}
})