export type ProductType = {
    id: number,
    name: string,
    sku: string,
    category_id: string,
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
    user_id: string,
    quantity: string,
    price: string,
    status: string,
}
