import React from "react";

import {useRouter} from 'next/router'

export default function CartCard({children, className, ...props}) {
    const router = useRouter()
    const {id} = router.query
    const title = props.title || 'Card'

    console.log("Printing data", props)

    return (
        <div className={`card ${className}`} {...props}>
            <div
                //className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                //className="bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3"
                className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 shadow-md m-3"
            >

                <div className="flex items-center md:flex-none h-72 w-full md:w-1/2 lg:w-2/5 p-3 relative">
                    <img src={"/Products/WhiteClock.png"} className="inset-0 object-cover w-full h-full rounded-2xl"
                         alt=""/>
                </div>
                <form className="flex-auto p-6 relative">
                    <div className="flex flex-wrap items-baseline">
                        <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                            {props.item.name}
                        </h1>
                        <div className="flex-auto text-lg font-medium text-slate-500">
                            {props.item.price}
                        </div>
                        <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                            {props.item.stock ?
                                <span className="text-green-500"> In Stock </span> :
                                <span className="text-red-500"> Out of Stock</span>
                            }
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-1 flex text-sm font-medium">
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xs" checked/>
                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    SM
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="s"/>
                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    S
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="m"/>
                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    M
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="l"/>
                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    L
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xl"/>
                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    XL
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-5 text-sm font-medium">
                        <div className="flex-auto flex space-x-4 pr-4">
                            <button
                                className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                                type="submit">
                                Select
                            </button>
                            <button
                                className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900 "
                                type="button">
                                Remove
                            </button>
                        </div>
                        <button
                            className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                            type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-slate-500">
                        Free shipping on all continental US orders.
                    </p>
                </form>


                {/*<div className="flex-none lg:h-72 md:h-56 sm:h-28 rounded-lg overflow-hidden relative p-3">
                    <Link href="/product/[id]" as={`/product/${title}`}>
                        <a href="#">
                            <img src={"/Products/WhiteClock.png"} className="object-cover w-full h-full rounded-2xl"
                                 alt=""/>
                        </a>
                    </Link>
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
            */}
            </div>
            {children}
        </div>
    );
}
