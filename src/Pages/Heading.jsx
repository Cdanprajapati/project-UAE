import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const Heading = () => {

    const locations = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah & Ajman",
        "Fujairah",
        "Ras Al Khaimah",
        "Umm Al Quwain"
    ];


    return (
        <div className='w-full flex flex-row p-[8%] space-x-8'>
            <div className='w-[50%] space-y-4'>
                <h1 className='text-2xl font-bold text-black'>Ready to dive into HABOT?</h1>
                <p className='break-words text-md font-normal'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                <button className='flex flex-row space-x-2 bg-green-700 rounded-[3px] text-sm font-semibold text-white px-7 py-2 gap-2 items-center'>
                    Sign up today! <BsArrowRight />
                </button>
            </div>
            <div className="w-[50%] flex flex-wrap gap-3 justify-center h-[30%] items-center">
                {locations.map((item) => (
                    <button
                        key={item}
                        className="border border-orange-300 text-black rounded-[3px] flex justify-center text-sm py-3 w-[180px]"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Heading