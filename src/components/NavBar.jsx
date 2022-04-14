// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const pages = ['Home', 'About', 'Contact', 'Blog'];
// const medsosIcons = [
//     <svg className="w-4 h-4 md:hover:text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>,
// ]

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="bg-white px-16 shadow "  >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                {/* <a href="/#" className="flex items-center">
                    <span className="self-center text-xl font-bold whitespace-nowrap " ></span>

                </a> */}

                <button onClick={() => setShowMenu(!showMenu)} className="inline-flex items-center p-2 ml-3 text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${!showMenu ? "hidden" : ""} w-full md:block md:w-auto`} >
                    <ul className="flex flex-col py-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" >
                        {
                            pages.map(page => {

                                return (<li>
                                    <a href={`/${page.toLowerCase()}`} className="block py-2 pr-4 pl-3 text-gray-700 text-base font-semibold border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-none transition-all md:hover:border-b-2  md:hover:text-blue-700 md:p-0  ">{page}  </a>
                                </li>)
                            })
                        }
                        {/* <li>
                            <a href="" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">About</a>
                        </li>
                        <li>
                            <a href="" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Services</a>
                        </li>
                        <li>
                            <a href="" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  ">Pricing</a>
                        </li>
                        <li>
                            <a href="" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Contact</a>
                        </li> */}
                    </ul>
                </div>

                <div className={`w-full md:block md:w-auto`} >
                    <ul className="flex flex-col py-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" >
                        {/* {
                            medsosIcons.map(icon => {

                                return (<li>
                                    <a href="" className="block text-lg py-2 pr-4 pl-3 text-gray-700 text-base font-semibold border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-none transition-all md:hover:border-b-2  md:hover:text-blue-700 md:p-0">{icon}  </a>
                                </li>)
                            })
                        } */}

                    </ul>
                </div>
            </div>
        </nav>
    )
}
