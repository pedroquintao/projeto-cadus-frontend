import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Body } from "../components/Body/Body"

export const BaseLayout = () => {
    return (
        <>
            <Header/>
            <Body>
                <Outlet />
            </Body>
        </>
    )
}