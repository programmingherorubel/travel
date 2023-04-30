import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import BannerSlider from "../Layout/BannerSlider";
import Home from "../Pages/Home";
import BookingSingleTravel from "../Pages/BookingSingleTravel";
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<BannerSlider></BannerSlider>,
                loader:()=> fetch('http://localhost:5000/travel')
            },
            {
                path:'/travel/:id',
                element:<BookingSingleTravel></BookingSingleTravel>,
                loader:({params})=> fetch(`http://localhost:5000/travel/${params.id}`)
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/reg',
        element:<Reg></Reg>
    }
])

export default router