// composables/useProfile.ts
export const useProfileState = () => {
	return useState('profile', () => null)
}