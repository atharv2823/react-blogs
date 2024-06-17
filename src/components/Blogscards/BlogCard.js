import "../Blogscards/BlogCard.css"

export default function BlogCard({title , content , author , date, categories}) {
  return (
    <div className="Blog-card">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-content">{content}</p>
        <div className="author-card">
           
           <span>{author.name}</span>

        </div>
        
        
    </div>
  )
}
