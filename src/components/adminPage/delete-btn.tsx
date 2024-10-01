"use client"
import { Product } from "@prisma/client";
import { Button } from "../ui/button";
import { deleteProduct } from "@/actions/action";

export default function DeleteBtn({ id }: { id: Product['id'] }) {
    // console.log(id);

    const handleDelete = async()=> {
        await deleteProduct(id)
    }

    return (
        <Button className="w-full h-full" variant={"destructive"} onClick={handleDelete}>Delete</Button>
    )
}
