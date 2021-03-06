import React from "react";
import {RouteType} from "../types";

const routes: RouteType[] = [
    {
        path: '/login',
        exact: true,
        requiresAuth: false,
        component: React.lazy(() => import('../components/Auth/Login'))
    },
    {
        path: '/register',
        exact: true,
        requiresAuth: false,
        component: React.lazy(() => import('../components/Auth/Register'))
    },
    {
        path: '/',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Home'))
    },
    {
        path: '/admin/categories',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/CategoryManagement/Categories'))
    },
    {
        path: '/admin/categories/add',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/CategoryManagement/CreateCategory'))
    },
    {
        path: '/admin/categories/:id/edit',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/CategoryManagement/EditCategory'))
    },
    {
        path: '/admin/products',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/ProductManagement/Products'))
    },
    {
        path: '/admin/products/add',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/ProductManagement/CreateProduct'))
    },
    {
        path: '/admin/products/:id/edit',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/ProductManagement/EditProduct'))
    },
    {
        path: '/admin/orders',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/OrderManagement/Orders'))
    },
    {
        path: '/admin/orders/:id/edit',
        exact: true,
        requiresAuth: true,
        component: React.lazy(() => import('../components/Admin/OrderManagement/EditOrder'))
    },
    {
        path: '*',
        exact: true,
        requiresAuth: false,
        component: React.lazy(() => import('../components/NotFound'))
    }
]

export default routes
