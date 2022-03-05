import React from "react";
import classNames from "classnames";
import {AiFillHeart} from "react-icons/ai";
import {BsChatSquareFill} from "react-icons/bs";
import Image from 'next/image'


const CardLikeComment = ({title, likes, order, image}) => {
    return (
        <div
            className="bg-white hover:bg-gray-800 shadow-xl hover:shadow-none cursor-pointer w-80 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
            <div className="relative mt-2 mx-2;">
                <div className="h-56 rounded-2xl overflow-hidden">
                    <a href="#">
                        <img src={image} className="object-cover w-full h-full" alt=""/>
                        {/*
                         <Image
                            src="/Products/WhiteClock.png"
                            alt="Picture of the author"
                            layout="responsive"
                            height={100}
                            width={200}
                            objectFit="cover"
                        />
                        */}
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
                    <div
                        className="h-10 w-10 flex items-center justify-center text-xl bg-white hover:bg-red-500 text-red-500 hover:text-white rounded-2xl shadow-xl transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        <AiFillHeart/>
                    </div>
                    <div
                        className=
                            "h-10 w-16 ml-2 bg-white hover:bg-blue-600 flex items-center justify-center font-medium text-blue-600 hover:text-white rounded-2xl shadow-xl text-gray-800 ml-2 group"
                    >
                        <BsChatSquareFill/>
                        <span
                            className={classNames(["text-gray-800 ml-2", "group-hover:text-white"])}
                        >
              {likes}
            </span>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-6 w-full px-4">
                <h1 className="font-medium leading-none text-base tracking-wider text-gray-400">{`${order}. ${title}`}</h1>
            </div>
        </div>
    );
};

export default CardLikeComment;