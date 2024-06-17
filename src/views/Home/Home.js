import "./Home.css"
import blogs from "./../../data"
import BlogCard from "../../components/Blogscards/BlogCard"

export default function Home() {

  return (
   <>
   <div className="blogs-container">
   {
    blogs.map((blogObject , i) => {
      
      const {
        title,
        content,
        author,
        date,
        categories
      } = blogObject

      return (
       <BlogCard
       key={i}
       title={title}
       content={content}
       author={author}
       date={date}
       categories={categories}
       />)
    })
   }
   </div>
   
   </>
  )
}

