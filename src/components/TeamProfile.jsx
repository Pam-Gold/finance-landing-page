import { motion } from "framer-motion";

const TeamProfile = (props) => {
  return(
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:0.2}} className="h-[fit-content] w-[fit-content] flex flex-col justify-center items-center gap-y-[8px]">
<img src={props.img} alt="" className="h-[150px] w-[150px] rounded-[50%]"  />

<h3 className="text-[#f9a826] font-bold text-[1rem]">{props.name}</h3>

<h5 className="text-[dimgrey] text-[1rem]">{props.bio}</h5>

</motion.div>
  )
}

export default TeamProfile;