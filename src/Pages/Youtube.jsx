import React, { useState } from 'react';
import YouTube from '../assets/youtube.png';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Youtube = () => {
    const [active, setActive] = useState('Buyer');


    const navItems = [
        { name: 'Buyer', path: '/' },
        { name: 'Supplier', path: '/about' }
    ];

    const steps = [
        {
            icon: <IoCheckmarkCircleSharp className='fill-green-600 h-10 w-10' />,
            text: "Post your requirements."
        },
        {
            icon: <IoCheckmarkCircleSharp className='fill-green-600 h-10 w-10' />,
            text: "Sit back for multiple suppliers to contact you."
        },
        {
            icon: <IoCheckmarkCircleSharp className='fill-green-600 h-10 w-10' />,
            text: "Choose among the suppliers based on the ratings and reviews."
        }
    ];


    return (
        <div className='w-full flex py-[10%] px-[7%] bg-[#072F57] space-x-5'>
            <img
                src={YouTube}
                alt="img"
            />
            <div className='flex flex-col p-8 w-full'>
                <nav className="bg-[#072F57] p-4">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name} className='gap-3 flex justify-center'>
                                <a
                                    href={item.path}
                                    className={`text-white text-xl font-bold relative pb-1 ${active === item.name ? 'text-orange-500' : ''}`}
                                    onClick={() => setActive(item.name)} // Update active state on click
                                >
                                    {item.name}
                                    {/* Custom underline */}
                                    {active === item.name && (
                                        <span className="absolute rounded-full left-0 right-0 h-1 bg-orange-500" style={{ width: '150%', margin: '0 auto', bottom: -4 }} />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    {
                        steps.map((item, index) => (
                            <p key={index} className='flex flex-row space-x-2 text-white'>
                                {item.icon}
                                <span className='w-full'>{item.text}</span>
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Youtube