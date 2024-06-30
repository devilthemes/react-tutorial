import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Suspense } from "react";
function MainLayout (){
    return (
        <>
        <Header />
            <Suspense fallback={<div><h1>Loading.....</h1></div>}>
                <Outlet />
            </Suspense>            
        <Footer />
        </>
    )
}
export default MainLayout;