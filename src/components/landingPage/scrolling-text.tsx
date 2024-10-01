import { Award, Banknote, MessageCircle } from "lucide-react";

export default function ScrollingText() {
  return (
    <div className="w-full h-12 md:h-14 overflow-hidden whitespace-nowrap border flex items-center justify-center">
      <p className=" flex text-sm animate-marquee">
      <Banknote className="mr-1" color="#4956ED"/> Payment in 4 installments with Paypal
        <MessageCircle className="ml-6"  color="#4956ED"/>  &nbsp;Dedicated and available customer service
        <Award className="ml-6"  color="#4956ED"/> &nbsp;Authentic, unworn products &nbsp;
      </p>
    </div>
  );
}