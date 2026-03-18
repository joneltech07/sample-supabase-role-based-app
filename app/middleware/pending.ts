export default defineNuxtRouteMiddleware(async () => {
	const profile = await useRequireProfile()

	if (!profile) return navigateTo('/login')

	if (profile.status === 'approved') {
		return navigateTo('/dashboard')
	}
})