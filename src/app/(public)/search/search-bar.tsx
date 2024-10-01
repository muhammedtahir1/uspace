import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'


export default function SearchBar() {
    return (
        <form className="flex items-center relative mt-10 md:hidden mx-10">
            <Input className="md:w-[10rem] lg:w-[34rem] rounded-[6px] px-3 py-5 pl-4 text-sm opacity-75 border-gray-400 focus:border-gray-300 focus:border-1" type="text" placeholder="Search for a brand, a model..." />
            <Search strokeWidth={1} className="absolute right-3 top-2.5 text-gray-600" size={20} />

        </form>
    )
}
