import { ProductBlock } from "../ProductBlock";


export const ProductRow = ()=>{
    const services = [
        {id:1,title:"TEMPUS FEUGIAT", content:"Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu.",icon:"fa-laptop", href:"#"},
        {id:2,title:"ALIQUAM NULLA", content:"Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed.",icon:"fa-diamond",href:"#"},
        {id:3,title:"SED MAGNA", content:"Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.",icon:"fa-laptop",href:"#"},
       
    ];
    return (  <section id="three">
        <div className="inner">
            {
                services.map(item=><ProductBlock key={item.id} title={item.title} content={item.content} icon={item.icon} href={item.href}  />)
            }
        
      </div>
    </section> )
}