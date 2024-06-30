import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import { Suspense, lazy } from "react";
const Home = lazy(()=>import('../components/Home'));
const About = lazy(()=>import('../components/About'));
const Contact = lazy(()=>import('../components/Contact'));
const FAQ = lazy(()=>import('../components/FAQ'));
export default  (<Router>
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
        </Route>

    </Routes>
</Router>)