export const days: string[] = Array.from({ length: 31 }, (_, i) => {
	const result = i + 1
	return result.toString().padStart(2, "0")
})
export const months: string[] = Array.from({ length: 12 }, (_, i) => {
	const result = i + 1
	return result.toString().padStart(2, "0")
})
export const years: number[] = Array.from({ length: 45 }, (_, i) => 1980 + i)
