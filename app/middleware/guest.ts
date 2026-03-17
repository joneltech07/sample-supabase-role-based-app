// middleware/guest.ts
export default defineNuxtRouteMiddleware(async () => {
	const supabase = useSupabaseClient()

	const { data: { session } } = await supabase.auth.getSession()

	// If already logged in → redirect away from login page
	if (session) {
		return navigateTo('/dashboard')
	}
})