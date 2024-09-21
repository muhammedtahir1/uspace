import { Heart, User, ShoppingBag, AlignJustify, Search } from "lucide-react"
import Link from "next/link"

const MobileNavbar = () => {
    return (
        <div className="fixed bottom-5 left-5 right-5 z-10 justify-between bg-white shadow-lg gap-9 md:hidden flex items-center px-5 py-4 rounded-full ">
            <button>
                <AlignJustify strokeWidth={0.9} size={21} />
            </button>
            <button>
                <User strokeWidth={0.9} size={21} />
            </button>
            <Link href={'/search'} className="bg-[#4956ED] p-4 rounded-full -mt-6 shadow-lg" >
                <Search color="white" size={24} strokeWidth={0.9} />
            </Link>
            <button>
                <Heart strokeWidth={0.9} size={21} />
            </button>
            <button>
                <ShoppingBag strokeWidth={0.9} size={21} />
            </button>
        </div>
    )
}

export default MobileNavbar