
const StoreButton = (props) => {
  return(
    <a href={props.link} target="_Blank">
    <button className="h-[52px] w-[fit-content] flex justify-between items-center p-[10px] bg-black text-white rounded-lg gap-x-[5px] ">
<img className="h-[30px] w-[30px] sm: h-[20px] w-[25px]" src={props.image}/>
<div className="flex flex-col">
  <h5 className="text-sm sm: text-[9px]">{props.downloadTag}</h5>
  <h3 className="text-md font-bold sm: text-[12px]">{props.store}</h3>
</div>
    </button>
    </a>
  )
}

export default StoreButton;