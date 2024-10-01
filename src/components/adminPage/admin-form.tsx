"use client"

import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from "react-hook-form"
import { Button } from '../ui/button';
import { addProduct, editProduct } from '@/actions/action'
import { Product } from '@prisma/client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'


// zod validation
const formSchema = z.object({
	name: z.string().min(2, {
		message: "It must be atleast 2 characters"
	}).max(30, {
		message: "It should not exceed 30 characters"
	}),

	image: z.union([z.literal(''), z.string().trim().url({
		message: "Invalid URL"
	})]),

	price: z.coerce.number().min(1, {
		message: "Price should be atleast 1"
	}),

	description: z.optional(
		z.string().min(2, {
			message: "It should be atleast 2 characters"
		}).max(200, {
			message: "It should not exceed 200 characters"
		})
	)
})

type AdminFormProps = {
	actionType?: "add" | "edit"
	data?: Product
}


export default function AdminForm({ actionType, data }: AdminFormProps) {

	let productId: number
	if (data) {
		productId = data.id
	}

	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// 	getValues,
	// } = useForm({
	// 	defaultValues: {
	// 		name: actionType === "edit" ? data?.name : undefined,
	// 		image: actionType === "edit" ? data?.image : undefined,
	// 		price: actionType === "edit" ? data?.price : undefined,
	// 		description: actionType === "edit" ? data?.description : undefined
	// 	}
	// });

	// Omit<Product, "id" | "slug">





	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: actionType === "edit" ? data?.name : undefined,
			image: actionType === "edit" ? data?.image : undefined,
			price: actionType === "edit" ? data?.price : undefined,
			description: actionType === "edit" ? data?.description as string: undefined
		},
	})

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		// console.log(data);

		if (actionType === "add") {

			await addProduct(data)
		}

		else if (actionType === "edit") {
			// const newProduct = getValues();
			const newProduct = form.getValues()
			
			await editProduct({newProduct, productId})

		}
	}

	return (

		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Product name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input placeholder="Image url" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input placeholder="Price" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea rows={3} placeholder="" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">
					{actionType === "add" ? "Add Product" : "Edit product"}
				</Button>
			</form>
		</Form>
	)
}


/*

<div>
				<Label htmlFor='image'>Image URL</Label>
				<Input id='image' type='url' {...register("image")} />
			</div>
			<div>
				<Label htmlFor='price'>Price</Label>
				<Input id='price' type='number' {...register("price")} />
			</div>
			<div>
				<Label htmlFor='description'>Description</Label>
				<Textarea id='description' rows={3} {...register("description")} />
			</div>


*/

