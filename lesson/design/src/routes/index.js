import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Generic } from '../pages/Generic';
import { Elements } from '../pages/Elements';
export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generic" element={<Generic />} />
            <Route path="/elements" element={<Elements />}  />
         
        </Routes>
    </Router>
)
