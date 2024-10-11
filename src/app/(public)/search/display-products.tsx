"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function DisplayProducts({ products }: { products: Product[] }) {


  return (
    <>
      <p className="text-sm opacity-80 mx-4 md:mx-28 border-y pl-6 py-2 mt-4"><span className='font-semibold text-md'>{products.length}</span>  Results</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-28 py-4 md:py-8 ">
      {products.map((product) => (
        <Link href={`/products/${product.slug}`} key={product.id} className="">
          <Card className="rounded-none border-none shadow-none">
            <CardContent className=" flex flex-col items-center justify-center aspect-square bg-[#F5F5F5] p-0">
              <Image
                src={product.image}
                alt={product.name}
                height={400}
                width={400}
                className="object-contain object-center "
              />
            </CardContent>
          </Card>
          <h2 className="font-light text-base truncate" >{product.name}</h2>

          <p className="text-sm opacity-80">
            From{" "}
            <span className=" font-semibold">{product.price}</span>
          </p>
        </Link>
      ))}
    </div>
    </>
  )
}
