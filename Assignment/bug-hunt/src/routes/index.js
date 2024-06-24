import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { EditBug } from "../pages/EditBug";
import { AddBug } from "../pages/AddBug";
import { Resolve } from "../pages/Resolve";

export default (
    <Router basename="">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<EditBug />} />
            <Route path="/add" element={<AddBug />} />
            <Route path="/add" element={<Resolve />} />
        </Routes>
    </Router>
)