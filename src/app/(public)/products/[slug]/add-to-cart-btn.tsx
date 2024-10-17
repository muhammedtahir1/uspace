"use client"

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { ItemProps } from '@/types/validation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AddToCartBtn = ({ product }: { product: ItemProps }) => {

    
    const [text, setText] = useState("Add To Cart")
    const router = useRouter()
    
    // const { addToCart, items } = useCartStore((state) => ({ items: state.items, addToCart: state.addToCart }))
    const { addToCart, items } = useCartStore()
    
    // useCartStore.getState()
    
    
    function handleAddToCart(){

        if(text === "Add To Cart"){
            addToCart(product);
            setText("Go to Cart")
        }
        else{
            router.push("/cart")

        }
    }


    return (
        <Button variant={"default"} onClick={() => handleAddToCart()}
        // TODO : add different styles for go to cart & add to cart - use cn
        className={``}
        >
            {text}
        </Button>

    )
}

export default AddToCartBtn