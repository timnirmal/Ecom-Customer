import React from "react";

export default function ChatModal({children, className, ...props}) {

    return (

            <div
                className=" fade fixed top-0 left-0  w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black"
                id="exampleModalScrollable" tabIndex="-1" aria-labelledby="exampleModalScrollableLabel"
                aria-hidden="false">

            </div>

);
}

