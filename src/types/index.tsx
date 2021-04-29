// RouteType
import React from "react";

export type RouteType = {
    path: string,
    exact: boolean,
    requiresAuth: boolean,
    component: React.Component | any,
}

// AuthType
export type LoginFormType = {
    email: string,
    password: string
}

export type RegisterFormType = {
    name: string,
    email: string,
    password: string
}

// CategoryType
export type CategoryType = {
    id: number,
    name: string,
    status: string
}
export type CategoryFormType = {
    name: string,
}
export type CategoryParamType = {
    id: string
}

export interface CategoryStateType {
    categories: CategoryType[],
    category: CategoryType
}

// ProductType
export type ProductType = {
    id: number,
    name: string,
    sku: string,
    category_id: string,
    category_name: string,
    price: string,
    image: string
}
export type ProductFormType = {
    name: string,
    price: string,
    description: string,
    category_id: string,
    category_name: string,
    image: string
}
export type ProductParamType = {
    id: string
}

export interface ProductStateType {
    products: ProductType[];
    product: ProductType;
    showDialog: boolean;
    image_url: string
}

// OrderType
export type OrderType = {
    id: number,
    product_id: string,
    product_name: string,
    user_id: string,
    user_name: string,
    user_email: string,
    shipping_address: string,
    quantity: string,
    price: string,
    status: string,
}
export type OrderParamType = {
    id: string
}
export type OrderPlaceFormType = {
    product_id: string,
    product_name: string,
    quantity: string,
    price: number,
    shipping_address: string
}
export type OrderFormType = {
    product_id: string,
    product_name: string,
    user_id: string,
    user_name: string,
    user_email: string,
    shipping_address: string,
    quantity: string,
    price: string,
    status: string
}

export interface OrderStateType {
    orders: OrderType[];
    order: OrderType;
}
