import React from 'react'
import bg from "../../../assets/imgs/homepage_bg.png";

const introJob = "Web Developer";

export default function introduction() {
    return (
        <section className="text-center">
            <p className=" w-full relative text-gray-700 " >
                <img className="z-0 opacity-20 absolute" src={bg} alt="" />
                <div className=" z-10 pt-16 w-full absolute text-center" >
                    <span className="block cursor-default mb-4 " >Hi, my name is <span className=" inline-block font-semibold transition-all duration-75  hover:text-blue-700 hover:scale-105">Ridwan</span> and i'm a</span>
                    {/* <span className="block text-7xl py-6 font-extrabold" >Web Developer</span> */}
                    <span className="block" >
                        {introJob.split('').map((item, index) => {
                            if (index === 2) {
                                return (
                                    <span className=" mr-4 cursor-default transition-all text-7xl font-extrabold inline-block duration-200 hover:text-blue-700 hover:scale-125">{item}</span>
                                )
                            }
                            return (
                                <span className="transition-all cursor-default text-8xl font-extrabold inline-block duration-200 hover:text-blue-700 hover:scale-110">{item}</span>
                            )
                        })}
                    </span>
                </div>
            </p>
        </section>
    )
}
