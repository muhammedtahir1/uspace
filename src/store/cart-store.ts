import { ItemProps } from "@/types/validation";
import { Product } from "@prisma/client";
import { create } from "zustand";

type CartItem = {
    item: ItemProps
}

type CartStore = {
    items: CartItem[] | [];
    addToCart: (product: ItemProps) => void;
    // removeFromCart : ()=> void;
    // increaseQuantity : ()=> void;
    // decreaseQuantity : ()=> void;
}



export const useCartStore = create<CartStore>()((set) => ({
    items: [],
    addToCart: (product) => {
        set((state) => ({
            items: [...state.items, {
                item: {
                    id: 2,
                    image: "",
                    name: "",
                    price: 50,
                    quantity: 11
                },
            }]
        }))
    }
}))