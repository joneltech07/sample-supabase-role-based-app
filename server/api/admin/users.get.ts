// server/api/admin/users.get.ts
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const supabase = await serverSupabaseClient(event)

	const { data, error } = await supabase
		.from('profiles')
		.select('*')

	if (error) return error

	return data
})