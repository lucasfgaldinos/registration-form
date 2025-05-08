import { z } from "zod"

export const formDataSchema = z.object({
	firstName: z
		.string()
		.regex(/^(?!\s*$).+$/, { message: "Cannot be empty or just spaces." })
		.min(2, { message: "Must be 2 or more characters long." })
		.max(40),
	lastName: z
		.string()
		.regex(/^(?!\s*$).+$/, { message: "Cannot be empty or just spaces." })
		.min(2, { message: "Must be 2 or more characters long." })
		.max(40),
	email: z.string().email({ message: "This doesn't look like an email." }),
	company: z
		.string()
		.regex(/^(?!\s*$).+$/, { message: "Cannot be empty or just spaces." })
		.min(3, { message: "Must be 3 or more characters long." })
		.max(40),
	address: z
		.string()
		.regex(/^(?!\s*$).+$/, { message: "Cannot be empty or just spaces." })
		.min(5, { message: "Must be 5 or more characters long." }),
	dateOfBirth: z.object({
		month: z.string().min(2, { message: "Required." }),
		day: z.string().min(2, { message: "Required." }),
		year: z.string().min(2, { message: "Required." })
	})
})
