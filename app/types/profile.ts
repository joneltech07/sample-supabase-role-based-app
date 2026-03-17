export interface Profile {
	id: string
	email: string
	first_name: string
	last_name: string
	birth_date: string
	invited_by: string
	sex: 'male' | 'female'
	marital_stat: 'single' | 'married' | 'widowed' | 'separated'
	attendance_stat: 'regular' | 'irregular' | 'new'
	role: string
	status: 'onboarding' | 'pending' | 'approved' | 'rejected'
}