"use client"

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { ItemProps } from '@/types/validation'

const AddToCartBtn = ({ product }: { product: ItemProps }) => {

    // const { addToCart, items } = useCartStore((state) => ({ items: state.items, addToCart: state.addToCart }))
    const { addToCart, items } = useCartStore()
    console.log(items)
    // console.log(items)
    // useCartStore.getState()

    return (
        <Button variant={"default"} onClick={() => addToCart(product)}>Add To Cart</Button>

    )
}

export default AddToCartBtn