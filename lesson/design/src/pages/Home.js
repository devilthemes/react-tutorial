import { SiteHeader } from "../components/SiteHeader";
import {SiteBanner} from "../components/SiteBanner";
import { ServiceRow } from "../components/ServiceRow";
import { ProductRow } from "../components/ProductRow";
import { GetTouch } from "../components/GetTouch";
import { SiteFooter } from "../components/SiteFooter";

export const Home = ()=>{
    return <>
    <SiteHeader />
    <SiteBanner />
    <ServiceRow />
    <ProductRow />
    <GetTouch />
    <SiteFooter />
    </>
}