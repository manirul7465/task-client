import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../layout/Main";
import ProfileUpdate from "../result/ProfileUpdate";
import Result from "../result/Result";

// ------- router------ // 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/sectors')
            },
            {
                path: '/result',
                element: <Result></Result>,
                loader: () => fetch('http://localhost:5000/profiles')
            },
            {
                path: '/update/:id',
                element: <ProfileUpdate></ProfileUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)

            }
        ]

    }
]);

export default router;

// ----------------------------------End------------------------------------// 