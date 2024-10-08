"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import AdminForm from './admin-form'
import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'

type Props = {
	actionType?: "add" | "edit",
	className?: string
	data?: Product
}

export default function AddEditProductBtn({ actionType, className, data }: Props) {
	
	const [isFormOpen, setIsFormOpen]= useState(false)

	return (

		<Dialog open={isFormOpen} onOpenChange={setIsFormOpen} > 
			<DialogTrigger asChild>
				<Button className={cn('', className)}>
					{actionType === "add" ? "Add Product" : "Edit"}
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{actionType === "add" ? "Add New Product" : "Edit Product"}
					</DialogTitle>

				</DialogHeader>

				<DialogDescription asChild>

					<AdminForm actionType={actionType} data={actionType == "edit" ? data : undefined} onFormSubmission={()=> {
						setIsFormOpen(false)
					}}  />
				</DialogDescription>

			</DialogContent>

		</Dialog>
	)
}
