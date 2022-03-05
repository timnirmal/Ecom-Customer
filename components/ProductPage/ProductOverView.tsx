import Image from 'next/image'
import React from "react";

export default function FourItemCard({children, className, ...props}) {
    return (
        <div className={`card ${className}`} {...props}>

            <div
                //className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                className="bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">

                <div className="pl-5 pt-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    </a>
                </div>

                <div className="w-full w-1/2 mb-4 p-4 pr-2 pb-0 pt-2">
                    <a href="#">
                        <img src={props.Item1Image} className="object-cover rounded-2xl" alt=""/>
                    </a>
                    <a href="#">
                        <h5 className="text-sm text-gray-900 dark:text-white pt-2 pl-1">{props.Item1}</h5>
                    </a>
                </div>

                <div className="pl-5 pb-6 -mt-1 -ml-1">
                    <a href="#"
                       className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        See More
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
            </div>
            {children}
        </div>
    );
}