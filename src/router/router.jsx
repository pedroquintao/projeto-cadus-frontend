import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../pages/BaseLayout";
import { MainPage } from "../pages/MainPage";
import { UserRegistration } from "../pages/UserRegistration";
import { UserList } from "../pages/UserList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "cadastro",
                element: <UserRegistration />
            },
            {
                path: "lista",
                element: <UserList />
            }
        ]
    }
])