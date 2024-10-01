import { AlignJustify, Heart, Search, ShoppingBag, User } from "lucide-react"
import { Input } from "../ui/input"
import Link from "next/link"
import MobileNavbar from "./mobile-navbar"

const Header = () => {
  return (
    <header>
      {/* absolute z-10 left-20 right-20 */}
      <div className=" md:hidden flex items-center justify-center mt-3 ">
        <Link href={"/"} className="text-3xl font-semibold">uspaceus</Link>
      </div>
      <header className="hidden md:flex px-6 py-3 items-center justify-between">
        <div>
          <Link href={"/"} className="text-3xl font-semibold">uspaceus</Link>
        </div>
        <nav className="flex items-center gap-6 opacity-90 text-sm">
          <Link href={'/products/sneakers'} className=" hover:opacity-60 transition">Sneakers</Link>
          <Link href={'/products/sneakers'} className=" hover:opacity-60 transition">Shoes</Link>
          <Link href={'/products/sneakers'} className=" hover:opacity-60 transition">Streetwear</Link>
        </nav>
        <Link href={'/search'} className="flex items-center relative">
          <Input className="md:w-[10rem] lg:w-[34rem] rounded-[6px] px-3 py-5 pl-4 text-sm opacity-75 border-gray-400 focus:border-gray-300 focus:border-1" type="text" placeholder="Search for a brand, a model..." />
          <Search strokeWidth={1} className="absolute right-3 top-2.5 text-gray-600" size={20} />
        </Link>
        <div className="flex items-center gap-10 opacity-75">
          <User strokeWidth={0.9} size={21} />
          <Heart strokeWidth={0.9} size={21} />
          <ShoppingBag strokeWidth={0.9} size={21} />
          <AlignJustify strokeWidth={0.9} size={21} />
        </div>
      </header>
      <MobileNavbar />
    </header>
  )
}

export default Header