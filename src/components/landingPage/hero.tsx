import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="relative">
      <div className="w-full min-h-[80vh] md:hidden bg-[url('/bgimg.png')]  bg-cover bg-center bg-no-repeat">
        {/* <Image
          src={'/bgimg.png'}
          alt="hero image"
          width={300}
          height={300}
          quality={100}
          priority={true}
          className="w-full h-[80vh]"
        /> */}
        <div className="bg-white text-black absolute sm: bottom-5 left-8 right-8 px-4 py-3 rounded-[8px]">
          <h4 className="font-semibold">Back to Gym</h4>
          <p className="text-xs opacity-60 mt-2 mb-4 font-medium">Discover our selection of sneakers for back-to-gym!</p>
          <Button variant={"default"} className="bg-black text-white px-8 py-6 rounded-[4px]">Discover</Button>
        </div>
      </div>

      <div className="relative hidden md:flex min-h-[80vh] bg-[url('/bgmd.png')]  bg-cover bg-center bg-no-repeat">
        {/* <Image 
          src={'/bgmd.png'}
          alt="Hero image"
          width={800}
          height={800}
          quality={100}
          priority={false}
          className="w-full"
        /> */}
        <div className="bg-white text-black absolute bottom-48 md:right-10 lg:right-36 px-8 pr-16 py-6 rounded-[6px]">
          <h4 className="font-semibold">Back to Gym</h4>
          <p className="text-xs opacity-60 mt-2 mb-4 font-medium">Discover our selection of sneakers for back-to-gym!</p>
          <Button className="bg-black text-white px-8 py-6 rounded-[4px] hover:bg-black/70">Discover</Button>
        </div>
      </div>
    </main>
  )
}
