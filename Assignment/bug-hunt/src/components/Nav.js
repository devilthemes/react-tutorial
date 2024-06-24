import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from "../img/logo.png";


export const Nav = ()=>   <Navbar>
<NavbarBrand>
    <img src={logo} height="60" width="60" />
 
  <p className="font-bold text-inherit">Bug Hunter</p>
</NavbarBrand>
<NavbarContent className=" sm:flex gap-4" justify="center">
  <NavbarItem>
    <Link color="foreground" href="/">
      Home
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link href="/add" aria-current="page">
      Add
    </Link>
  </NavbarItem>
 
</NavbarContent>

</Navbar>