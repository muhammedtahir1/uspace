"use client";
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation';

export default function SearchBarHeader() {

    const [searchProduct, setSearchProduct] = useState("")
    // console.log(searchProduct);
    const router = useRouter()
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        
        if(!searchProduct) return;

        router.push(`/search/?q=${searchProduct}`)

    }

  return (
    <form className="flex items-center relative" 
        onSubmit={handleSubmit}>
        <Input className="md:w-[10rem] lg:w-[34rem] rounded-[6px] px-3 py-5 pl-4 text-sm opacity-75 border-gray-400 focus:border-gray-300 focus:border-1" 
            value={searchProduct}
            type="text" 
            placeholder="Search for a brand, a model..." 
            onChange={(e)=> setSearchProduct(e.target.value)}    
        />
        
        <Button type='submit' variant={"secondary"} className="absolute right-3 top-1 bg-transparent hover:bg-transparent px-2 py-1">
                <Search strokeWidth={1} size={20} type='submit' />
        </Button>
    </form>
  )
}
