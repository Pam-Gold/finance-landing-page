import { Link } from "react-router-dom";

const BlogBox = (props) => {
  return(
    <div className="h-[fit-content] gap-y-[20px] w-full">
<img src={props.img} alt=""  className="h-[250px] w-full"/>
<div className="flex flex-col gap-y-[15px] p-[8px] ">
  <h2 className="font-bold text-[1.4rem]"><Link to={props.id.toString()}>{props.title}</Link></h2>
  <p className="text-[dimgrey]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis amet repellendus sed voluptas reprehenderit aliquid.</p>
  <span className="flex items-center gap-x-[12px]">
    <img src="https://i.pinimg.com/236x/33/ed/84/33ed84e135b83ad2eef65c3f8316a0e8.jpg" alt="" className="h-[40px] w-[40px] rounded-[50%]"/>

<span>{props.author} . 14 Mar 24</span>

  </span>
</div>
    </div>
  )
}

export default BlogBox;