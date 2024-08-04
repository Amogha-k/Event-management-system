import React from "react";
import Card from "./Card";

import img1 from "./event1.png";
import gall from "./gallery1.png";

import Gallery_card from "./Gallery_card";
import Accordian_options from "./Accordian_options";

export default function Event_card() {


    return (
        <div>

            {/* ************************* Start Upcoming Event Section ***********************************  */}
            <div className="pb-6">
                <div className="flex md:flex-row flex-col items-center justify-between">
                    <div><h1 className="font-sans text-2xl mx-5 font-extrabold">
                        Upcoming <span className="text-[#FFD500]">Events</span>
                    </h1>
                    </div>
                    <div className="flex justify-start mx-[300px] mt-8 space-x-6">
                        <Accordian_options option_text="Weekdays" option1="option1" option2="option1" option3="option1" />
                        <Accordian_options option_text="Weekdays" option1="option1" option2="option1" option3="option1" />
                        <Accordian_options option_text="Weekdays" option1="option1" option2="option1" option3="option1" />
                    </div>
                </div>
                <Gallery_card
                    image={img1}
                    location={"ONLINE EVENT - Attend anywhere"}
                    image_text="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
                    date="Saturdat, March 18, 9.30PM"
                />

                <div className="flex justify-center p-11">
                    <button className="mx bg-[#00296B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Load More
                    </button>
                </div>
            </div>
            {/* ************************* End Upcoming Event Section ***********************************  */}

            {/* ************************* Start Make your  Event Section ***********************************  */}

            <div class="font-sans flex flex-col md:flex-row justify-between text-[#F8F8FA] relative w-full h-[140px] md:h-[170px] md:mt-[50px] mb-7 bg-[#00296B]">
                <div class="md:w-1/2 relative">
                    <img
                        class="object-cover md:w-[290px] w-[200px] mt-[10px]   absolute z-10 md:mt-[-20px] mx-auto md:mx-24"
                        src="./images/own_event.png"
                        alt="own-event-page"
                    />
                </div>
                <div class="md:w-1/2 w-1/2 mx-[200px]  md:mx-[750px] absolute mt-5 md:mt-6  text-center md:text-left">
                    <span class="text-lg md:text-2xl font-semibold leading-normal">
                        Make your own Event
                    </span>

                    <p class="text-[10px] md:text-xs leading-normal pb-3 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button class=" md:w-[200px]  mx-auto md:mx-0 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                        Create Events
                    </button>
                </div>
            </div>

            {/* ************************* End Make your  Event Section ***********************************  */}

            {/* ************************* Start Trending CLub Section ***********************************  */}

            <div>
                <div>
                    <h1 className="font-sans text-2xl mx-5  font-extrabold">
                        Trending <span className="text-[#FFD500] ">clubs</span>
                    </h1>
                </div>
                <div className="flex flex-row ">
                    <Card
                        image={img1}
                        club_name="NMIT Hacks"
                        location="NMIT, Bangalore"
                    />
                </div>
                <div className="flex justify-center p-11">
                    <button className="mx bg-[#00296B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Load More
                    </button>
                </div>
            </div>

            {/* ************************* End Trending CLub Section ***********************************  */}
            {/* ************************* Start Our  Galler Section ***********************************  */}
            <div>
                <div>
                    <h1 className="font-sans text-2xl mx-5 font-extrabold">
                        Our <span className="text-[#FFD500]">Gallery</span>
                    </h1>
                </div>
                <Gallery_card
                    image={gall}
                    location={"ONLINE EVENT - Attend anywhere"}
                    image_text="BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow"
                    date="Saturdat, March 18, 9.30PM"
                />
            </div>
            {/* ************************* End Our Gallery Section ***********************************  */}
        </div>
    );
}