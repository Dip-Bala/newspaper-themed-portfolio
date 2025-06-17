import React from 'react'
import Contact from '../components/contacts/Contact'
export default function Contacts(){
    return (
        <div className="flex flex-col h-content w-40 m-10">
                    <div className="w-full h-2 border-t border-gray-400"></div>
                    <div className="flex">
                        <div className="w-2 border-l border-gray-500"></div>
                        <div className="font-typoMedium flex flex-col items-center justify-center gap-4">
                            <h2>How to contact Dipanwita? </h2>
                            <Contact />
                        </div>
                        <div className="w-2 border-r border-gray-500"></div>
                    </div>
                    <div className="w-full h-2 border-b border-gray-500"></div>
                </div>
    )
}