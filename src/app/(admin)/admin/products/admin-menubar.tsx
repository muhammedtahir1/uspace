import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const AdminMenuBar = () => {
  return (
    <div className='md:hidden'>
      <Popover>
        <PopoverTrigger><Menu/></PopoverTrigger>
        <PopoverContent className="w-36 space-y-2">
          <Link href={"/admin/orders"}  className='w-full'>
            <Button variant={"outline"} className='w-full'>
              Orders
            </Button>
          </Link>
          <Link href={"/admin/products"}  className='w-full'>
            <Button variant={"outline"}  className='w-full'>
              Products
            </Button>
          </Link>

        </PopoverContent>
      </Popover>
      
      </div>
  )
}

export default AdminMenuBar