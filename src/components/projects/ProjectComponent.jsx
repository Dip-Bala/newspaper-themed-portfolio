import React from 'react'
import LatestNews from '../../container/LatestNews'

export default function ProjectComponent() {
    return (
        <div className="flex flex-col min-w-fit w-lg h-content m-10 ">
            <div className="w-full h-2 border-t border-gray-400"></div>
            <div className="flex">
                <div className="w-2 border-l border-gray-500"></div>
                <div className="w-xl">
                    <LatestNews/>
                </div>
                <div className="w-2 border-r border-gray-500"></div>
            </div>
            <div className="w-full h-2 border-b border-gray-500"></div>
        </div>
    )
}