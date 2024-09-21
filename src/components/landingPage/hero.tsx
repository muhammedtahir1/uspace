import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="relative">
      <div className="w-full md:hidden ">
        <Image
          src={'https://a.storyblok.com/f/200283/1000x1250/3f340b1cb6/img_9374.webp/m/1940x0/filters:quality(80)'}
          alt="hero image"
          width={300}
          height={300}
          quality={100}
          priority={true}
          className="w-full h-[80vh]"
        />
        <div className="bg-white text-black absolute sm: bottom-5 left-8 right-8 px-4 py-3 rounded-[8px]">
          <h4 className="font-semibold">Back to Gym</h4>
          <p className="text-xs opacity-60 mt-2 mb-4 font-medium">Discover our selection of sneakers for back-to-gym!</p>
          <Button variant={"default"} className="bg-black text-white px-8 py-6 rounded-[4px]">Discover</Button>
        </div>
      </div>

      <div className="relative hidden md:flex">
        <Image 
          src={'https://a.storyblok.com/f/200283/2000x800/23437c0740/img_9372.webp/m/1940x0/filters:quality(80)'}
          alt="Hero image"
          width={800}
          height={800}
          quality={100}
          priority={false}
          className="w-full"
        />
        <div className="bg-white text-black absolute bottom-48 right-32 px-8 pr-16 py-6 rounded-[6px]">
          <h4 className="font-semibold">Back to Gym</h4>
          <p className="text-xs opacity-60 mt-2 mb-4 font-medium">Discover our selection of sneakers for back-to-gym!</p>
          <Button className="bg-black text-white px-8 py-6 rounded-[4px] hover:bg-black/70">Discover</Button>
        </div>
      </div>
    </main>
  )
}
