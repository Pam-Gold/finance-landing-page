const Review = (props) => {
  return (
    <div className=" h-[200px] w-[400px] bg-white text-black flex flex-col justify-between p-[12px] rounded-lg review">
      <p className="text-md text-[dimgrey]">
        {props.body}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-[8px]">
          <img src={props.img} alt="" className="h-[50px] w-[50px] rounded-[50%]" />
          <span className="flex flex-col gap-y-[4px]">
            <h4 className="text-black">{props.name}</h4>
            <h5 className="text-[grey]">{props.occupation}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
