import React from 'react';

const Baner = () => {
    return (
        <div className='w-full flex flex-row justify-between px-[10%] py-[7%] bg-[#E8FBFE]'>
            <h1 className='text-slate-950 font-bold text-2xl relative'>
                Let Suppliers <span className='relative inline-block pb-1'>Find You</span>
                <span className='absolute left-[80%] transform -translate-x-1/2 h-[3px] bg-orange-500 rounded-full' style={{ width: '40%', bottom: 0 }} />
            </h1>
            <button className='bg-[#EB7150] text-white font-semibold text-sm w-[180px] rounded-md'>Get Verified</button>
        </div>

    )
}

export default Baner