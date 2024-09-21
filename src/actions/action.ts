"use server";

import prisma from "@/lib/db";

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
    console.log(product); 
    return product
}

export {getProducts, getProductBySlug}