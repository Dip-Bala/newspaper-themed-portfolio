import React from 'react'
import {useNavigation} from 'react-router-dom'

export default function Navbar(){
    return(
        <div className="flex justify-center items-center gap-10 font-typoMedium p-1 text-lg">
            <button className="text-Black px-4 rounded-xs">
                Projects
            </button >
            <button className="text-Blackpx-4 rounded-xs">
                Skill Set
            </button>
            <button className="text-Black px-4  rounded-xs">
                About
            </button>
            <button className=" text-Black px-4  rounded-xs">
                Education
            </button>
            <button className=" text-Black px-4 rounded-xs">
                Contacts
            </button>

        </div>
    )
}