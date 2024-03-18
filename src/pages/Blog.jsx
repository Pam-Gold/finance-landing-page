import BlogBox from "../components/BlogBox";

import blogDb from '../data/blogDb.json';

const Blog = () => {
  return(
<main className=" h-[fit-content] w-full flex flex-col pt-[50px] p-[10px]  ">

<h1 className="text-[2rem] font-bold font-madimi-one">Recent Posts</h1>
  
  <div className=" h-[fit-content] w-full grid   gap-[25px]   sm: p-x-[12px] md: p-x-[12px]  lg:p-x-[50px] lg:grid-cols-3  xl:p-x-[50px]">

{blogDb.map(blog=><BlogBox {...blog}/>)}
  </div>

</main>
  )
}

export default Blog;