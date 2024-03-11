import MainPage from '../component/MainPage';
import Login from '../component/Login';


const Router = [
    {
        path:"/*",
        element:<MainPage/>
    },
    {
        path:"login",
        element:<Login />
    },
]

export default Router