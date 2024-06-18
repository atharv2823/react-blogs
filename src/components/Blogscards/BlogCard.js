import "../Blogscards/BlogCard.css"

export default function BlogCard({title , content , author, date, categories}) {
  return (
    <div className="Blog-card">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-content">
          {content.substring(0,50)}...
          </p>
        <div className="author-card">
            <img src={author.avatar} alt="author-img" className="author-img"/>
           <span className="author-name">{author.name}</span>

           <span className="blog-date">{date}</span>

        </div>
        <br></br>
        {categories.map ((categories, i)=>{
          return <span key={i} className="blog-categories">{categories}</span>

          })}
        
        
        
    </div>
  )
}
