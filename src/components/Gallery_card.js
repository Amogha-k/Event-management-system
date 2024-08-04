import React from "react";


export default function Gallery_card(props) {
  let { image, location, image_text, date } = props;
  return (
    <div className="">
  
        <div className="p-4 mx-5 my-5  mt-11 w-80 transform overflow-hidden rounded-lg   shadow-lg duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center " src={image} alt="event1" />
        <div className="p-4">

          
          
          <div className="font-normal font-sans text-[16px] mb-2 font-semibold">{image_text}
          <div className="text-[#7848F4]  font-normal leading-normal font-sans text-[12px] font-medium">{date}</div>
        </div>

        <div className=" pt-4 pb-2  flex align-bottom text-[#7E7E7E] leading-normal text-[12px] font-normal font-sans font-semibold">
          {location}
        </div>

        </div>
      </div>

    </div>


  );
}
