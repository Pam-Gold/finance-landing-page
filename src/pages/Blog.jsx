import BlogBox from "../components/BlogBox";

import blogDb from '../data/blogDb.json';

const Blog = () => {
  return(
<main className="h-[fit-content] w-full grid  gap-[25px]  pt-[50px] sm: p-[12px] md: p-[12px]  lg:p-[50px] lg:grid-cols-3  xl:p-[50px] ">
{blogDb.map(blog=><BlogBox {...blog}/>)}

</main>
  )
}

export default Blog;