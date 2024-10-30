import React from 'react';
import brand from '../assets/brand.png'

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap px-10 py-4 flex-col md:flex-row items-center">
                <img src={brand} alt="img" />
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Find Suppliers</a>
                    <select className="mr-5 p-2 bg-transparent focus:outline-none">
                        <option disabled selected>Find Service Tags</option>
                        <option value="tag1">Tag 1</option>
                        <option value="tag2">Tag 2</option>
                        <option value="tag3">Tag 3</option>
                        <option value="tag4">Tag 4</option>
                    </select>
                </nav>
                <button className="inline-flex items-center bg-transparent border border-green-600 py-2 px-4 focus:outline-none rounded text-xs text-green-600 mt-4 md:mt-0 font-semibold">
                    Login / Sign Up
                </button>
            </div>
        </header>
    )
}

export default Navbar