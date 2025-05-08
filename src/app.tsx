import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { Toaster } from "@/components/ui/sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ModeToggle } from "./components/mode-toggle.tsx"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card.tsx"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "./components/ui/form.tsx"
import { Input } from "./components/ui/input"
import { days, months, years } from "./utils/dates.ts"
import { formDataSchema } from "./validators/schemas.ts"
import type { formData } from "./validators/types.ts"

export function App() {
	const form = useForm<formData>({
		resolver: zodResolver(formDataSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			company: "",
			address: "",
			dateOfBirth: {
				month: "",
				day: "",
				year: ""
			}
		}
	})

	function onSubmit(data: formData) {
		if (data) {
			toast.success(
				<div>
					<p>
						<strong>Thanks for testing the form!</strong> Everything was
						validated properly.
					</p>
					<p>Take a look at your data 👇</p>
					<ul style={{ marginTop: "1rem" }}>
						<li>
							<strong>Full name:</strong> {data.firstName} {data.lastName}
						</li>
						<li>
							<strong>Email:</strong> {data.email}
						</li>
						<li>
							<strong>Company:</strong> {data.company}
						</li>
						<li>
							<strong>Address:</strong> {data.address}
						</li>
						<li>
							<strong>Date of birth:</strong>{" "}
							{`${data.dateOfBirth.day}-${data.dateOfBirth.month}-${data.dateOfBirth.year}`}
						</li>
					</ul>
				</div>
			)
		}
	}

	return (
		<div className="w-full min-h-screen flex items-center justify-center p-4 py-24">
			<ModeToggle />

			<Card className="w-full max-w-2xl rounded-sm p-4 sm:p-8">
				<h1 className="text-xl font-bold text-center">Registration</h1>

				<Form {...form}>
					<form
						className="flex flex-col gap-6 mt-8 sm:mt-14 sm:gap-4"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<div className="flex flex-col gap-6 sm:grid grid-cols-2 sm:gap-4">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First name</FormLabel>
										<FormControl>
											<Input
												autoComplete="on"
												placeholder="First name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last name</FormLabel>
										<FormControl>
											<Input
												autoComplete="on"
												placeholder="Last name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="flex flex-col gap-6 sm:grid grid-cols-2 sm:gap-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input autoComplete="on" placeholder="Email" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="company"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Company</FormLabel>
										<FormControl>
											<Input
												autoComplete="on"
												placeholder="Company"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className="flex flex-col sm:grid grid-cols-2 sm:gap-4">
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address</FormLabel>
										<FormControl>
											<Input
												autoComplete="on"
												placeholder="Address"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div />
						</div>

						<div className="flex flex-row gap-4 w-full items-end mb-9 [@media(max-width:359px)]:flex-col">
							{months.length > 0 && (
								<FormField
									control={form.control}
									name="dateOfBirth.month"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Date of birth</FormLabel>
											{months.length > 0 && (
												<Select onValueChange={field.onChange}>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Month" />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															<SelectLabel>Month</SelectLabel>
															{months.map((month: string) => {
																return (
																	<SelectItem key={month} value={month}>
																		{month}
																	</SelectItem>
																)
															})}
														</SelectGroup>
													</SelectContent>
												</Select>
											)}
											<FormMessage />
										</FormItem>
									)}
								/>
							)}

							{days.length > 0 && (
								<FormField
									control={form.control}
									name="dateOfBirth.day"
									render={({ field }) => (
										<FormItem className="w-full">
											<Select onValueChange={field.onChange}>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Day" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Day</SelectLabel>
														{days?.map((day: string) => {
															return (
																<SelectItem key={day} value={day}>
																	{day}
																</SelectItem>
															)
														})}
													</SelectGroup>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}

							{years.length > 0 && (
								<FormField
									control={form.control}
									name="dateOfBirth.year"
									render={({ field }) => (
										<FormItem className="w-full">
											<Select onValueChange={field.onChange}>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Year" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Year</SelectLabel>
														{years?.map((year: number) => {
															return (
																<SelectItem key={year} value={String(year)}>
																	{year}
																</SelectItem>
															)
														})}
													</SelectGroup>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							)}
						</div>

						<Button type="submit">Register</Button>
					</form>
				</Form>
			</Card>

			<Toaster closeButton duration={5000} position="bottom-center" />
		</div>
	)
}
