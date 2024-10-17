import { ItemProps } from "@/types/validation";
import { Product } from "@prisma/client";
import { create } from "zustand";

type CartItem = {
    item: ItemProps
    // id: number,
    // name: string,
    // image: string,
    // price: number,
    // quantity: number
}

type CartStore = {
    items: CartItem[] | [];
    addToCart: (product: ItemProps) => void;
    removeFromCart : (id: number)=> void;
    // increaseQuantity : ()=> void;
    // decreaseQuantity : ()=> void;
}



export const useCartStore = create<CartStore>()((set) => ({
    items: [],

    addToCart: (product)=> 
        set((state) => {

            const existingItem = state.items.find((item) => item.item.id === product.id);
            if(existingItem) {
                return {
                    items: [...state.items]
                }
            }
         
            return {
                items: [...state.items, {
                    // item: {
                    //     id: product.id,
                    //     name: product.name,
                    //     image: product.image,
                    //     price: product.price,
                    //     quantity: product.quantity
                    // }
                    item: product
                }]    
            } 
        }),
    

    removeFromCart: (id) => {
        set((state) => ({
            items : state.items.filter((item)=> item.item.id !== id)
        }))
    }
}))