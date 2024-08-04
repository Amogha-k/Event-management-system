
import React, { useState, useEffect, useRef } from 'react';

export default function Accordian_options(props) {
    const [dropdownToggle, setDropdownToggle] = useState(true);
    const ToggleButton = (props) => {

        console.log(dropdownToggle)

        if (dropdownToggle == false)

            setDropdownToggle(true);
        else
            setDropdownToggle(false);

    }
    let{option_text,option1,option2,option3}=props;
    return (
        <div className=" ">
            <div className=" bg-gray-100 flex items-center justify-center">
                <div className="relative inline-block text-left">
                    <button onClick={ToggleButton} id="dropdown-button" className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500`}>
                    {option_text}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div id="dropdown-menu" className={`${dropdownToggle ? 'hidden' : ''}  origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                            <a className="flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                {option1}
                            </a>
                            <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                {option2}
                            </a>
                            <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                 {option3}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

