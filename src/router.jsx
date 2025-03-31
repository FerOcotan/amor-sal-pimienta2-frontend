import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Layout from "./layouts/Layout";   // 'Layout' con 'L' mayúscula
import AuthLayout from "./layouts/AuthLayout";  // 'AuthLayout' con 'A' mayúscula
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';  // Asegúrate de que 'Registro' esté importado



import AdminLayout from "./layouts/AdminLayout";
import Productos from "./views/Productos";
import Ordenes from "./views/Ordenes";  // Asegúrate de que 'Ordenes' esté importado

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{
            index: true,
            element: <Inicio />
        }]
    },
    {
        path: '/auth',  // La ruta base para Auth
        element: <AuthLayout />,
        children: [
            {
                path: 'login',  // La ruta es relativa, no es necesario "/auth"
                element: <Login />
            },
            {
                path: 'registro',  // Ruta relativa bajo "/auth"
                element: <Registro />
            }
            
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [{
            index: true,
            element: <Ordenes />
        },{
            path: 'productos',
            element: <Productos />
        }    
    
    ]
    }
]);

export default router;
