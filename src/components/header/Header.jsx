import React from 'react'
import Navbar from './Navbar'
export default function Header(){
    return(
        <div className="border-b flex flex-col gap-5">
            <div className="font-typoSemibold text-6xl flex justify-center items-end gap-2 font-Bold p-2">
                <h1 >DIPANWITA</h1>
                <div className="flex flex-col font-serif text-xs font-medium items-center">
                    <img className="w-40 h-full border-b" src="/public/assets/images/car-svg.png"/>
                    <p>the portfolio</p>
                </div>
                <h1>BALA</h1>
            </div>
            <Navbar/>
        </div>
    )
}