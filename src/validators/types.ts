import type { z } from "zod"
import type { formDataSchema } from "./schemas"

export type formData = z.infer<typeof formDataSchema>
