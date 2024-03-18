import { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogDb from "../data/blogDb.json";

const BlogDetails = () => {
  const id = useParams();
  const blogData = blogDb[Number(id.id)];

  console.log(blogData);
  return (
    <div className="h-[150vh] pt-[50px] w-full bg-black flex flex-col items-center gap-y-[50px] sm: px-[15px] md: px-[15px] lg:px-[80px] xl:px-[100px]">
      <img
        src={blogData.img}
        alt=""
        className=" w-full sm: h-[300px] md: h-[300px] lg:h-[450px] xl:h-[450px]"
      />

      <h1 className="text-white text-[2rem] font-bold text-center">
        {blogData.title}
      </h1>

      <div className="flex items-center gap-x-[15px] text-[grey]">
        <img src={blogData.authorImg} alt="" className="h-[40px] w-[40px] rounded-[50%]" />
        <h4 className="font-bold">{blogData.author}</h4>
        <span className="h-[2.5px] w-[2.5px] bg-[grey] rounded-[50%]"></span>
        <h4 className="font-600">{blogData.date}</h4>
        <span className="h-[2.5px] w-[2.5px] bg-[grey] rounded-[50%]"></span>
        <h4 className="font-600"><i className="fa-solid fa-book-open text-[grey] text-[14px] mr-[8px]"></i>{blogData.time} read</h4>
      </div>
    </div>
  );
};

export default BlogDetails;
