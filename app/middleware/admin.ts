// middleware/admin.ts
export default defineNuxtRouteMiddleware(async () => {
	const profile = useProfileState()

	if (!profile.value) return navigateTo('/login')

	if (profile.value.role !== 'admin') {
		return navigateTo('/dashboard')
	}
})