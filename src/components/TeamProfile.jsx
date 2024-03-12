import { motion } from "framer-motion";

const TeamProfile = (props) => {
  return(
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:0.2}} className="h-[fit-content] w-[fit-content] flex flex-col justify-center items-center gap-y-[8px]">
<img src={props.img} alt="" className="h-[125px] w-[125px] rounded-[50%]"  />

<h3 className="text-[#f9a826] font-bold text-[1rem] font-montserrat">{props.name}</h3>

<h5 className="text-[dimgrey] text-[0.8rem] font-montserrat">{props.bio}</h5>

</motion.div>
  )
}

export default TeamProfile;