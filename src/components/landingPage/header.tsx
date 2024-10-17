"use client"

import { AlignJustify, Heart, Search, ShoppingBag, User } from "lucide-react"
import Link from "next/link"
import MobileNavbar from "./mobile-navbar"
import SearchBarHeader from "./search-bar-header"
import { Button } from "../ui/button"
import { useCartStore } from "@/store/cart-store"

const Header = () => {


  // This below line is not working 
  // const items = useCartStore.getState().items 


  const items = useCartStore((state) => state.items)
  console.log(items);

  return (
    <>
      {/* Mobile nav bar - company name below */}
      {/* <div className=" md:hidden flex items-center justify-center mt-3 ">
        <Link href={"/"} className="text-3xl font-semibold">uspaceus</Link>
      </div> */}
      <header className="hidden md:flex px-6 py-3 items-center justify-between">
        <div>
          <Link href={"/"} className="text-3xl font-semibold">uspaceus</Link>
        </div>
        <nav className="flex items-center gap-6 opacity-90 text-sm">
          <Link href={'/products/sneakers'} className=" hover:opacity-60 transition">Sneakers</Link>
          <Link href={'/products/shoes'} className=" hover:opacity-60 transition">Shoes</Link>
          <Link href={'/products/streetwear'} className=" hover:opacity-60 transition">Streetwear</Link>
        </nav>
        {/* <Link href={''} > */}
        <SearchBarHeader />
        {/* </Link> */}
        <div className="flex items-center gap-10 opacity-75">
          <User strokeWidth={0.9} size={21} />
          <Heart strokeWidth={0.9} size={21} />

          <Link href={"/cart"} className="relative">
            <Button variant={"link"} className=" px-2" >
              <ShoppingBag strokeWidth={0.9} size={21} />
              {items.length > 0 && (
                <span className="absolute right-0 top-0 text-xs size-4 font-bold bg-black rounded-full text-white px-1">{items.length}</span>
              )}
              
            </Button>
          </Link>

          <AlignJustify strokeWidth={0.9} size={21} />
        </div>
      </header>
      <MobileNavbar />
    </>
  )
}

export default Header