import Image from 'next/image'
import React from "react";

export default function Card({children, className, ...props}) {
    return (
        <div className={`card ${className}`} {...props}>
            <div
                //className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                className="bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                <div className="lg:h-72 md:h-56 sm:h-28 rounded-lg overflow-hidden relative p-3">
                    <a href="#">
                        <img src={"/Products/WhiteClock.png"} className="object-cover w-full h-full rounded-2xl" alt=""/>
                        {/*<Image
                            src="/Products/WhiteClock.png"
                            alt="Picture of the author"
                            layout="responsive"
                            height={12}
                            width={20}
                            objectFit="cover"
                            className="rounded-2xl"
                        />*/}
                    </a>
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                            technology
                            acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                        technology
                        acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#"
                       className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
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