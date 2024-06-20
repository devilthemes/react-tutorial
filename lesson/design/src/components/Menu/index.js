import { Link } from "react-router-dom"

export const Menu = ()=>{
    return ( <nav id="nav">
        <Link to="/" >Home</Link>
        <Link to="/generic" >Generic</Link>
        <Link to="/elements" >Elements</Link>
        
    </nav>)
}