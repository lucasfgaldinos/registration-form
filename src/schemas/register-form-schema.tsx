import { z } from "zod"

export const formSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: "Must be 2 or more characters long." })
		.max(40),
	lastName: z
		.string()
		.min(2, { message: "Must be 2 or more characters long." })
		.max(40),
	email: z.string().email({ message: "This doesn't look like an email." }),
	company: z
		.string()
		.min(2, { message: "Must be 2 or more characters long." })
		.max(40),
	address: z.string().min(2, { message: "Must be 2 or more characters long." }),
	dateOfBirth: z.object({
		month: z.string().min(2, { message: "Required." }),
		day: z.string().min(2, { message: "Required." }),
		year: z.string().min(2, { message: "Required." })
	})
})

export type FormData = z.infer<typeof formSchema>
