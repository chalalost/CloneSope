import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './page/Home/Home'
import Product from './page/Product/Product'
import Login from './page/Login/Login'
import RegisterLayout from './layout/RegisterLayout/RegisterLayout'
import Register from './page/Register'

export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/product',
            element: <Product />
        },
        {
            path: '/login',
            element:
                <RegisterLayout>
                    <Login />
                </RegisterLayout>
        },
        {
            path: '/register',
            element:
                <RegisterLayout>
                    <Register />
                </RegisterLayout>
        }
    ])
    return routeElements
}
