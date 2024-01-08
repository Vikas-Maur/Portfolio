import { useRef, useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="z-10 transition-all flex flex-col gap-8 sticky top-4 mt-4 backdrop-blur-md bg-amber-400/30 shadow-xl max-w-full mx-auto px-8 lg:px-10 py-6 lg:py-8 rounded-full ">
            <div className="flex">
                <div id="nav_logo"><a className='block max-w-16 max-h-16' href="#"><img src="/logo.svg" alt="" /></a></div>
                <ul className='hidden lg:flex gap-6 justify-end items-center ml-auto flex-1'>
                    <li><a className='rounded-md px-5 py-2 font-medium hover:bg-amber-500 hover:text-white' href="#portfolio">Portfolio</a></li>
                    <li><a className='rounded-md px-5 py-2 font-medium hover:bg-amber-500 hover:text-white' href="#skills">Skills</a></li>
                    <li><a className='rounded-md px-5 py-2 font-medium hover:bg-amber-500 hover:text-white' href="#contact">Contact Me</a></li>
                </ul>
                <button onClick={() => { setMenuOpen((prev) => (!prev)) }} className='ml-auto lg:hidden'>{menuOpen?<X size={25}/> :<Menu size={25} />}</button>
            </div>
            {menuOpen && <ul className='lg:hidden flex flex-col gap-4'>
                <li><a className='text-sm rounded-md py-2 font-medium' href="#portfolio">Portfolio</a></li>
                <li><a className='text-sm rounded-md py-2 font-medium' href="#skills">Skills</a></li>
                <li><a className='text-sm rounded-md py-2 font-medium' href="#contact">Contact Me</a></li>
            </ul>}
        </nav>
    )
}

export default Navbar