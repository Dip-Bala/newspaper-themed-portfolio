import React from 'react'

export default function Header(){
    return(
        <div className="p-5 border-b">
            <div className="font-typography text-6xl flex justify-center items-end gap-2 font-Bold">
                <h1>DIPANWITA</h1>
                <div className="flex flex-col font-sans text-xs font-medium items-center">
                    <img className="w-40 h-full border-b" src="/public/assets/images/car-svg.png"/>
                    <p>the portfolio</p>
                </div>
                <h1>BALA</h1>
            </div>
        </div>
    )
}