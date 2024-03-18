import { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogDb from "../data/blogDb.json";

const BlogDetails = () => {
  const id = useParams();
  const blogData = blogDb[Number(id.id)];

  console.log(blogData);
  return (
    <div className="h-[150vh] pt-[50px] w-full bg-black flex flex-col items-center gap-y-[50px] sm: px-[10px] md: px-[15px] lg:px-[80px] xl:px-[100px]">
      <img
        src={blogData.img}
        alt=""
        className=" w-full sm: h-[300px] md: h-[300px] lg:h-[450px] xl:h-[450px]"
      />

      <h1 className="text-white  font-bold text-center sm: text-[1.2rem] md: text-[1.6rem] lg:text-[2rem] xl:text-[2rem] ">
        {blogData.title}
      </h1>

      <div className="flex items-center gap-x-[12px] text-[grey] [&>h4]:sm: text-[11.8px] [&>h4]:md: text-[14px] [&>h4]:lg:text-[1rem] [&>h4]:xl:text-[1rem]">
        <img
          src={blogData.authorImg}
          alt=""
          className="h-[40px] w-[40px] rounded-[50%]"
        />
        <h4 className="font-bold">{blogData.author}</h4>
        <span className="h-[3px] w-[3px] bg-[grey] rounded-[50%]"></span>
        <h4 className="font-600">{blogData.date}</h4>
        <span className="h-[3px] w-[3px] bg-[grey] rounded-[50%]"></span>
        <h4 className="font-600">
          <i className="fa-solid fa-book-open text-[grey] text-[14px] mr-[8px]"></i>
          {blogData.time} read
        </h4>
      </div>

      <p className="text-[grey]">
      </p>
    </div>
  );
};

export default BlogDetails;
