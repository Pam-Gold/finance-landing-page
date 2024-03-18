import { Link } from "react-router-dom";

const BlogBox = (props) => {
  return(
    <div className="h-[fit-content] gap-y-[20px] w-full">
      <Link to={props.id.toString()}>
<img src={props.img} alt=""  className="h-[250px] w-full"/>
      </Link>
<div className="flex flex-col gap-y-[15px] p-[8px] ">
  <h2 className="font-bold text-[1.4rem] font-montserrat"><Link to={props.id.toString()}>{props.title}</Link></h2>

  <span className="flex items-center gap-x-[12px]">
    <img src={props.authorImg} alt="" className="h-[40px] w-[40px] rounded-[50%]"/>

<span className="flex items-center gap-x-[6px] font-montserrat"><h4>{props.author}</h4>  <span className="h-[3px] w-[3px] bg-[#111] rounded-[50%]"></span> <h4>{props.date}</h4></span>

  </span>
</div>
    </div>
  )
}

export default BlogBox;