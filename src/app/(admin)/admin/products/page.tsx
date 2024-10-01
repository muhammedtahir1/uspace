import React from 'react'
import { columns, DataTableDemo } from './data-table'
import AsideNav from './aside'
import { getProducts } from '@/actions/action'
import AddEditProductBtn from '@/components/adminPage/add-product-btn'

const Products = async () => {

  const products = await getProducts()

  return (
    <div className='flex flex-col md:flex-row'>
      <AsideNav />
      <div className='w-full'>
        <div className='hidden md:block ml-20 mt-10'>
          <AddEditProductBtn actionType='add' />

        </div>
        <DataTableDemo columns={columns} data={products} />
      </div>
    </div>
  )
}

export default Products