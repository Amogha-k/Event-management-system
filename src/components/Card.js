import React from "react";


export default function Card(props) {
  let { image, club_name, location } = props;
  return (
    <div className="">
     

      <div className=" mx-5 my-5  mt-11 w-72 transform overflow-hidden rounded-lg   shadow-lg duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center " src={image} alt="event1" />
        <div className="p-4">


          <div className=" py-4">
            <div className="font-bold text-xl mb-2">{club_name}</div>
          </div>

          <div className=" pt-4 pb-2 flex align-bottom text-[#000] leading-normal text-[14px] font-normal font-[Roboto] font-semibold">
            {location}
          </div>

        </div>
      </div>


    </div>
  );
}

// line-height: normal;
