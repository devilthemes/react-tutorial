import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(()=>import("../components/Home"))
const About = lazy(()=>import("../components/About"))
export default  (
<Router >
    <Routes>       
        <Route path="/"  element={<Home />} ></Route>      
        <Route path="/about"  element={<About />} ></Route>      
    </Routes>
</Router>)