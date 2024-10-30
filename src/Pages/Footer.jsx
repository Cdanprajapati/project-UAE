import React from 'react';
import Brand from '../assets/fbrand.png';
import linkedin from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/facebook.png';
import Insta from '../assets/insta.png';

const Footer = () => {

    const socialIcons = [
        { src: linkedin, alt: "LinkedIn", href: "https://www.linkedin.com" },
        { src: Twitter, alt: "Twitter", href: "https://www.twitter.com" },
        { src: Facebook, alt: "Facebook", href: "https://www.facebook.com" },
        { src: Insta, alt: "Instagram", href: "https://www.instagram.com" }
    ];

    const links = [
        {
            category: "Company",
            items: [
                { text: "About", href: "/about" },
                { text: "FAQ", href: "/faq" }
            ]
        },
        {
            category: "Legal",
            items: [
                { text: "Terms", href: "/terms" },
                { text: "Data Privacy", href: "/privacy" },
                { text: "Accessibility", href: "/accessibility" }
            ]
        },
        {
            category: "Related",
            items: [
                { text: "Find Buyer", href: "/find-buyer" },
                { text: "Feedback", href: "/feedback" }
            ]
        }
    ];

    return (
        <div className='bg-[#123557] px-[10%] flex justify-between py-[2%] w-full'>
            <div className='border-y border-slate-600 flex w-full justify-between items-center py-4'>
                <div className='flex space-x-5 w-[50%] '>
                    <div className='flex flex-col w-[200px] px-6 items-center justify-center space-y-4'>
                        <img src={Brand} alt="img" className='h-5' />
                        <p className='text-white text-xs'>© R Singhania</p>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                        {links.map((section, index) => (
                            <div key={index} className="mb-6 md:mb-0">
                                <h3 className="text-md font-bold mb-4">{section.category}</h3>
                                <ul>
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="mb-2">
                                            <a href={item.href} className="hover:underline text-sm">{item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-row space-x-3'>
                    {socialIcons?.map((icon, index) => (
                        <div
                            key={index}
                            href={icon.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='border border-slate-600 rounded-full p-2 h-10 w-10 flex cursor-pointer justify-center items-center'>
                            <img src={icon.src} alt={icon.alt} className="h-4 w-4" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer