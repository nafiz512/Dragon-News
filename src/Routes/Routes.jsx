import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Home/Home";
import CategoryNews from "../Components/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            { path: "/", element: <Home></Home> },
            {
                path: "categories/:id",
                loader: () => fetch("/news.json"),
                element: <CategoryNews></CategoryNews>,
            },
        ],
    },
    {
        path: "/auth",
        element: <h2>Auths</h2>,
    },
]);

export default router;
