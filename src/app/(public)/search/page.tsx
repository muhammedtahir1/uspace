import Header from "@/components/landingPage/header";
import SearchBar from "./search-bar";
import MobileNavbar from "@/components/landingPage/mobile-navbar";
import DisplayProducts from "./display-products";
import prisma from "@/lib/db";
import Footer from "@/components/landingPage/footer";


export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  console.log(searchParams.q);

  let products
  if (searchParams.q) {
    products = await prisma.product.findMany({
      where: {
        name: {
          contains: searchParams.q as string,
        }
      }
    })

  }
  else {
    products = await prisma.product.findMany({
      where: {
        name: {
          contains: searchParams.q as string,
        }
      },
      take: 6
    })

  }


  return (


    <div>
      <Header />
      <SearchBar />
      <DisplayProducts products={products} />
      <MobileNavbar />
      <Footer/>
    </div>
  )
}
