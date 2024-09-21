import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Product } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({product} : {product : Product}) {

  const {name,price,image,slug} = product;
  return (
    <Card className="border-none shadow-none h-80 w-48 rounded-xl md:w-72 mx-1">
      <CardHeader className="overflow-hidden bg-[#F5F5F5] py-12">
        <Link
          href={`/products/${slug}`}
          className="rounded-xl md:mb-2 hover:scale-105 transition-all duration-300"
        >
          <Image
            className="object-cover rounded-t-xl"
            width={300}
            height={300}
            src={image}
            alt= {slug}
            priority={false}
          />
        </Link>
        {/* <CardTitle></CardTitle> */}
        {/* 
        <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="m-0 px-2">
        <div className="mt-1 items-center">
          <h3 className="text-base font-semibold truncate">{name}</h3>
          <p className="text-sm opacity-80">
            From ${price}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
