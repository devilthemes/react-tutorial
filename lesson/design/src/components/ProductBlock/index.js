export const ProductBlock = ({ title="Title", icon="fa-laptop", content="Something", href="#" }) => {
  return <article>
      <div className="content">

        <span className={`icon ${icon}`}></span>
        
        <header><h3>{title}</h3> </header>
        <div className="image fit">
          <p>{content}</p>
          <ul className="actions"><li><a href={href} className="button alt">Learn More</a></li>
          </ul>
        </div>
      </div>
  </article>
}

