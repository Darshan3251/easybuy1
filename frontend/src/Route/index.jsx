import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Searchpage from "../pages/Searchpage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import ProductDetails from "../components/ProductDetails";
import AdminPanel from "../pages/AdminPanel";
import SeeAll from "../components/SeeAll";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/search',
                element: <Searchpage />
            },{
                path:'/login',
                element:<Login/>
            },{
                path:"/register",
                element:<Register/>
            },{
                path:'/cart',
                element:<Cart/>
            },{
                path: "/productDetails/:id",
                element: <ProductDetails />
            },{
                path:'/admin',
                element:<AdminPanel/>
            },{
                path:'/cart',
                element:<Cart/>
            },{
                path:'/atta',
                element:<SeeAll/>
            }

        ]
    }
]);
export default router;