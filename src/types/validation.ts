import { Product } from "@prisma/client"

export type ItemProps = Omit<Product, "description" | "slug"> & {
    quantity: number
}