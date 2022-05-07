import React from 'react'
import js from '../../../assets/imgs/logo/js.png'
import php from '../../../assets/imgs/logo/php.png'
import css from '../../../assets/imgs/logo/css.png'
import html from '../../../assets/imgs/logo/html.png'
import react from '../../../assets/imgs/logo/react.png'
import mysql from '../../../assets/imgs/logo/mysql.png'
import laravel from '../../../assets/imgs/logo/laravel.png'
import flutter from '../../../assets/imgs/logo/flutter.png'


function Skill() {
    const logos = [
        html, css, js, react, php, mysql, laravel, flutter,
    ];

    return (
        <div className='p-10 pt-4 rounded bg-white mt-80 w-full m-auto z-20 drop-shadow '>
            <h2 className='font-bold text-gray-700 text-2xl' >TOOLS/TECHNOLOGY (Basic)</h2>
            <hr />
            <p className='text-gray-800 mt-2' >The tools/technology that usually used to make applications</p>
            <div className="list-knowledge  flex justify-center flex-wrap">
                {
                    logos.map(item => {
                        return (
                            <div className=' w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12 mt-4' >
                                <img src={item} className="p-" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Skill