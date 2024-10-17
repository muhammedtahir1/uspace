import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getProductBySlug } from "@/actions/action";
import { notFound } from "next/navigation";
import AddToCartBtn from "./add-to-cart-btn";

export default async function ProductsPage({ params }: {
  params: {
    slug: string;
  };
}) {
  // console.log(params);

  if (!params.slug) return notFound();
  const product = await getProductBySlug({ params })
  if (!product) return notFound();

  return (
    <main className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
      <section className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="py-10 col-span-2 bg-[#F5F5F5]">
            <Image
              src={product?.image as string}
              alt="product image"
              width={600}
              height={400}
              priority={false}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="py-5 bg-[#F5F5F5]">
            <Image
              src={product?.image as string}
              alt="product image"
              width={400}
              height={300}
              priority={false}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-[#F5F5F5] py-5">
            <Image
              src={product?.image as string}
              alt="product image"
              width={400}
              height={300}
              priority={false}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="flex-1 space-y-4 px-10">
        <div className="mb-6 md:mb-20 opacity-75">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Sneakers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Air Jordans</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product?.slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className=" text-3xl font-bold">{product?.name}</h1>
        <p className="text-xl">From ${product?.price}</p>
        <div>
          <AddToCartBtn product={{
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price, 
            quantity: 1
          }} />
        </div>
      </div>
    </main>
  )
}
