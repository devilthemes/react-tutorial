import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import {School} from "../pages/School";
import { DynamicProduct } from '../pages/DynamicProduct';
import { List } from '../pages/list';
export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/school" element={<School name="google" />} />
            <Route path="/products/:id" element={<DynamicProduct />} />         
            <Route path="/list" element={<List />} />
        </Routes>
    </Router>
)
