export const ServiceBlock = ({title,imgsrc,content})=>{
    return <article><div className="content">
    <header><h3>{title}</h3>
    </header><div className="image fit">
      <img src={imgsrc} alt="" width="473" height="220" /></div>
    <p>{content}</p>
  </div>
</article>
}