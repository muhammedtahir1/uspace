import { AlignJustify, Heart, Search, ShoppingBag, User } from "lucide-react"
import { Input } from "../ui/input"
import Link from "next/link"
import MobileNavbar from "./mobile-navbar"
import SearchBarHeader from "./search-bar-header"

const Header = () => {
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
          <SearchBarHeader/>
        {/* </Link> */}
        <div className="flex items-center gap-10 opacity-75">
          <User strokeWidth={0.9} size={21} />
          <Heart strokeWidth={0.9} size={21} />
          <ShoppingBag strokeWidth={0.9} size={21} />
          <AlignJustify strokeWidth={0.9} size={21} />
        </div>
      </header>
      <MobileNavbar />
    </>
  )
}

export default Header