import React from "react";

const routes = [
    {
        path: '/',
        exact: true,
        component: React.lazy(() => import('../components/Home'))
    },
    {
        path: '/login',
        exact: true,
        component: React.lazy(() => import('../components/Auth/Login'))
    },
    {
        path: '/register',
        exact: true,
        component: React.lazy(() => import('../components/Auth/Register'))
    },
    {
        path: '/admin/products',
        exact: true,
        component: React.lazy(() => import('../components/Admin/ProductManagement/Products'))
    },
    {
        path: '/admin/products/add',
        exact: true,
        component: React.lazy(() => import('../components/Admin/ProductManagement/CreateProduct'))
    },
    {
        path: '/admin/orders',
        exact: true,
        component: React.lazy(() => import('../components/Admin/OrderManagement/Orders'))
    },
    {
        path: '*',
        exact: true,
        component: React.lazy(() => import('../components/NotFound'))
    }
]

export default routes
