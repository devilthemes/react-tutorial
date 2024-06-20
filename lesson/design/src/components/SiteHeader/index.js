import { Menu } from "../Menu"

export const SiteHeader = () => {
    return (<>
        <header id="header"><div className="inner">
            <a href="index.html" className="logo">introspect</a>
           <Menu />
           </div>
        </header><a href="#menu" className="navPanelToggle"><span className="fa fa-bars"></span></a>
    </>)
}