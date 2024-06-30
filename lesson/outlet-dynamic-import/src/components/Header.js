import { Link } from "react-router-dom";

export default function (){
    return (
        <div>
            <Link to="/">Home</Link> |  <Link to="/about">About</Link> | <Link to="/faq">FAQ</Link> |  <Link to="/contact">Contact</Link>
        </div>
    )
}