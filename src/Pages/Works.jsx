import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import User from '../assets/user.png';
import Note from '../assets/note.png';
import Search from '../assets/search.png';
import profile from '../assets/profile.png';
import Edit from '../assets/edit.png';
import Hands from '../assets/handshake.png';

const Works = () => {

    const styIcon = "text-black h-12 w-12"

    const steps = [
        {
            text: "Select Your Role and Sign Up",
            icon: <img src={User} className={styIcon} />,
            bgColor: "#E8FBFE"
        },
        {
            text: "Buyers: Post Your Requirements",
            icon: <img src={Note} className={styIcon} />
        },
        {
            text: "Review, Select, and Contact the Best Suppliers",
            icon: <img src={Search} className={styIcon} />,
            bgColor: "#E8FBFE"
        },
        {
            text: "Suppliers: Complete your profile and get notified for opportunities",
            icon: <img src={profile} className={styIcon} />
        },
        {
            text: "Contact Buyers and Share your Quote for the service",
            icon: <img src={Edit} className={styIcon} />,
            bgColor: "#E8FBFE"
        },
        {
            text: "Both Parties can Connect and Make Business. Leave a Feedback.",
            icon: <img src={Hands} className={styIcon} />
        }
    ];

    return (
        <div className='p-[7%] flex flex-col justify-center text-center'>
            <h1 className='text-3xl font-bold mb-4'>How it works?</h1>
            <p className='mb-8 text-sm w-[60%] break-words mx-auto'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-4xl mx-auto'>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center space-y-4 justify-center p-4 transition duration-200 h-[200px] ${step.bgColor ? `bg-[${step.bgColor}]` : 'bg-white'} ${step.highlight ? 'border-2 border-blue-500' : 'border border-transparent'}`}
                    >
                        {step.icon}
                        <span className='mt-2 text-sm text-gray-800 text-center w-[70%]'>{step.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;