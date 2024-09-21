import React from 'react'
import { DataTableDemo } from './data-table'
import AsideNav from './aside'
import { Button } from '@/components/ui/button'

const Products = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <AsideNav />
      <div className='w-full'>
        <Button className='hidden md:block ml-20 mt-10'>Add Product</Button>
        <DataTableDemo />
      </div>
    </div>
  )
}

export default Products