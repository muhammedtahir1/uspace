
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./product-card"
import { getProducts } from "@/actions/action"

async function ProductCarousel() {
    const products = await getProducts()

    return (
        <section className="mt-10 px-4 md:px-24 md:py-12 relative">
            <h3 className="mb-4">Back to Gym</h3>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent >
                    {products.map((item, index) => (
                        <CarouselItem key={index} className="basis-60 md:basis-1/2 lg:basis-1/4">
                            <div className="">
                                {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                                <ProductCard product={item} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </section>
    )
}

export default ProductCarousel