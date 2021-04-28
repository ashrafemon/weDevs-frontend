export type ProductType = {
    id: number,
    name: string,
    sku: string,
    category_id: string,
    category_name: string,
    price: string,
    image: string
}

export type CategoryType = {
    id: number,
    name: string
}

export type OrderType = {
    id: number,
    product_id: string,
    product_name: string,
    user_id: string,
    user_name: string,
    user_email: string,
    quantity: string,
    price: string,
    status: string,
}
