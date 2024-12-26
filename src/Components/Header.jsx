import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setTaggleMenu] = useState(false)

    return <header className="flex justify-between px-5 py-2 bg-primary text-xl ">
        <a className="font-bold text-black font-portfolio-font" href="#" >Portfolio</a>
        <nav className="hidden md:block">
            <ul className="flex text-white ">
                <li className="px-2 font-portfolio-font" ><a href="/">Home</a></li>
                <li className="px-2 font-portfolio-font"><a href="#about">About</a></li>
                <li className="px-2 font-portfolio-font"><a href="#projects">Projects</a></li>
                <li className='px-2 font-portfolio-font'><a href="#resume">Resume</a></li>
                <li className="px-2 font-portfolio-font"><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        {toggleMenu && <nav className="block md:hidden fixed top-10 left-0  bg-mobileMenu  w-full h-1/4  text-center ">
            <ul onClick={() => setTaggleMenu(!toggleMenu)} className="flex flex-col text-white h-full">

                <li className="px-2  h-full"><a href="/">Home</a></li>
                <li className="px-2  h-full"><a href="#about">About</a></li>
                <li className="px-2  h-full"><a href="#projects">Projects</a></li>
                <li className="px-2  h-full"><a href="#resume">Resume</a></li>
                <li className="px-2  h-full"><a href="#contact">Contact</a></li>

            </ul>
        </nav>}
        <button className='block md:hidden' onClick={() => setTaggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5' /></button>
    </header>

}