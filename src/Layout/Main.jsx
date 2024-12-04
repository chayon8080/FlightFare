import { Outlet } from "react-router-dom"
import { Footer } from "../Pages/shared/footer/footer"
import Navbar from "../Pages/shared/Navbar/Navbar"



const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Main