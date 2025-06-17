import React from 'react'

export default function Contacts(){
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <img className="w-20 " src="/assets/images/post.jpeg" />
            <div className="flex gap-2 justify-center items-center">
                <button className="w-5">
                    <img src="/assets/icons/github.svg"/>
                </button>
                <button className="w-5">
                    <img src="/assets/icons/linkedin.svg"/>
                </button>
                <button className="w-5">
                    <img src="/assets/icons/x.jpg"/>
                </button>
            </div>
        </div>
    )
}