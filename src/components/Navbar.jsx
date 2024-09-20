import React, { useState } from 'react'
import SideBar from './Sidebar'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputIcon from '@mui/icons-material/Input';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    let menuItems = ['Products', 'Start selling', 'Tools and apps', 'Pricing', 'Resources', 'Pro sellers', 'GelatoConnect']

    const toggleNav = function () {
        setSidebar(!sidebar)
    }

    return (
        <>
            <header className="sticky top-0 z-20">
                <nav className="bg-slate-200/95 sticky top-0 z-20 px-4 py-2 md:px-auto min-h-20">
                    <>
                        <div className="flex md:justify-between justify-center items-center">

                            <button className=" md:hidden flex duration-200"
                                onClick={toggleNav}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-black" viewBox="0 0 24 24" fill="currentColor"
                                    width="44" height="44">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                                </svg>
                            </button>

                            <img className=' h-8 w-72' src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" alt="Gelato" />

                            <div className="flex justify-center items-center gap-4">
                                <div className='md:flex gap-2 hidden cursor-pointer hover:text-slate-600'>
                                    <SupportAgentIcon />
                                    <p>Contact</p>
                                </div>
                                <div className='md:flex gap-2 hidden cursor-pointer hover:text-slate-600'>
                                    <LanguageIcon />
                                    <p>IN/INR</p>
                                </div>
                                <div className='sm:flex gap-2 hidden cursor-pointer hover:text-slate-600'>
                                    <ShoppingCartIcon />
                                    <p>Cart</p>
                                </div>
                                <div className='md:flex gap-2 hidden cursor-pointer hover:text-slate-600'>
                                    <InputIcon />
                                    <p>Log in</p>
                                </div>
                                <button className='bg-slate-800 hover:text-blue-300 m-2 text-yellow-50 rounded-xl text-xs p-2'>Sign Up for Free</button>
                            </div>
                            {/* <div className="md:flex items-center mt-2 hidden">
                                <input type="search" 
                                    className="block outline-none w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Search " />
                            </div> */}
                        </div>
                    </>
                    <div className="mx-8 md:flex hidden justify-center items-center">
                        <ul
                            className="flex font-semibold md:justify-between justify-center items-center md:flex-row flex-col gap-5">
                            {menuItems.map(i => (
                                <li className="text-black cursor-pointer hover:text-indigo-400 relative group">{i}
                                    <ul
                                        className="absolute rounded-xl hidden hover:block group-hover:block bg-gray-200 text-black py-2 shadow-lg">
                                        <li className="px-4 w-80 py-2 hover:bg-indigo-400">Clothings</li>
                                        <li className="px-4 w-80 py-2 hover:bg-indigo-400">Cards</li>
                                        <li className="px-4 w-80 py-2 hover:bg-indigo-400">Photobooks</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
            <SideBar sidebar={sidebar} toggleNav={toggleNav} />
           
        </>
    )
}

export default Navbar