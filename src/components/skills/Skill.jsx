import React from 'react';

export default function Skill() {
    return (
        <div className="group inline-flex items-center p-2 rounded transition-all duration-300">
            {/* Icon Container */}
            <div className="relative w-10 h-10">
                {/* Default Icon */}
                <img
                    src="/assets/icons/react-icon-1.png"
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                    alt="React"
                />
                {/* Hover Icon */}
                <img
                    src="/assets/icons/react-icon-2.png"
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    alt="React Pro"
                />
            </div>

            {/* Text appears on hover */}
            <p className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Proficiency in React
            </p>
        </div>
    );
}
