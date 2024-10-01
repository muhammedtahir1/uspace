"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

const getProducts =async () =>{
    const products = await prisma.product.findMany({})
    // console.log(products);
    return products
}

const getProductBySlug = async({params} : {params: {slug : string}} ) =>{
    const product = await prisma.product.findUnique({
        where : {
            slug : params.slug
        },
    })
    // console.log(product); 
    return product
}

const addProduct = async(data : Omit<Product, "id" | "slug">) =>{
    try {
        await prisma.product.create({
            data : {
                ...data,
                // price: Number(data.price),
                slug: data.name.toLowerCase().trim().replaceAll(" ","-"),
            }
        })
    } catch (error) {
        // return {
        //     message : "Could not add product"
        // }
        console.log(error);
    }
    revalidatePath('/admin/products')
}

const deleteProduct = async (productId : Product["id"]) =>{
    await prisma.product.delete({
        where: {
            id : productId
        }
    })
    revalidatePath('/admin/products')
}


type EditProps = {
    productId : Product["id"],
    newProduct : Omit<Product, "id" | "slug">
}


const editProduct = async({newProduct, productId} : EditProps)=> {
    // console.log(newProduct, productId);
    console.log(`${newProduct} 🎉🎉`);
    try {
        await prisma.product.update({
            where : {
                id : productId
            },
            data : {
                ...newProduct,
                price: Number(newProduct.price),
                slug : newProduct.name.toLowerCase().trim().replaceAll(" ", "-"),
            }
        })
    } catch (error) {
        console.log(error);
    }
    revalidatePath('/admin/products')
}



export {getProducts, getProductBySlug, addProduct, deleteProduct, editProduct}