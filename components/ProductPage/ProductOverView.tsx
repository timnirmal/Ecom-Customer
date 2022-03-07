import React from "react";
import ReviewDisplay from "./ReviewDisplay";

function ifArray(arr: any) {
    if (Array.isArray(arr)) {
        return arr;
    } else {
        return [arr];
    }
}


function ifArrayDo(arr: any, material: any, setMaterial: any, setMaterialType: any) {
    console.log("Type of arr : ", typeof arr);
    console.log("Material Arr : ", material);
    if (Array.isArray(arr)) {
        return (
            <div>
                <select
                    value={material} onChange={setMaterialType}
                    className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    {
                        arr.map((materialItem, index) => {
                            return (
                                <option
                                    className="text-gray-700"
                                    value={materialItem}
                                    key={index}
                                >
                                    {materialItem}
                                </option>
                            )
                        })
                    }
                </select>
                <span
                    className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </span>
            </div>
        );
    } else {
        console.log("Material : ", material);
        return (
            <span> {arr} </span>
        );
    }
}


export default function ProductOverView({children, className, ...props}) {
    //console.log(props.properties);
    //console.log(props.properties[0].name);
    //console.log(props.properties[0].value);
    //console.log(props.properties[0].value[0]);
    //console.log(props.brandName)
    // find object with name "name"
    // find object with name "value"
    //console.log()
    const [color, setColor] = React.useState(props.properties[1].value[0]);
    const [size, setSize] = React.useState(props.properties[0].value[0]);
    const [material, setMaterial] = !Array.isArray(props.properties[2].value) ? React.useState(props.properties[2].value)
        : React.useState(props.properties[2].value[0]);

    function setSizeRadio(e) {
        setSize(e.target.value);
        console.log(e.target.value);
    }

  
    function setMaterialType(e) {
        setMaterial(e.target.value);
        console.log(e.target.value);
    }

    console.log(color);
    console.log(size);
    console.log(material);

    {
        const grayColor = "gray-700 "
        const redColor = "red-700 "
        const greenColor = "green-700 "
        const blueColor = "blue-700 "
        const yellowColor = "yellow-700 "
        const orangeColor = "orange-700 "
        const purpleColor = "purple-700 "
        const pinkColor = "pink-700 "
        const tealColor = "teal-700 "
        const indigoColor = "indigo-700 "
        const brownColor = "brown-700 "
        const blackColor = "black-700 "
        const whiteColor = "white-700 "
        const lightGrayColor = "gray-300 "
        const darkGrayColor = "gray-900 "
        const lightRedColor = "red-300 "
        const lightGreenColor = "green-300 "
        const lightBlueColor = "blue-300 "
        const lightYellowColor = "yellow-300 "
        const lightOrangeColor = "orange-300 "
        const lightPurpleColor = "purple-300 "
        const lightPinkColor = "pink-300 "
        const lightTealColor = "teal-300 "
        const lightIndigoColor = "indigo-300 "
        const lightBrownColor = "brown-300 "
        const lightBlackColor = "black-300 "
        const lightWhiteColor = "white-300 "
    }


    return (
        <div className={`card ${className}`} {...props}>

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce"
                             className="lg:w-1/2 lg:h-140 object-top md:hover:h-full w-full object-cover object-center rounded border border-gray-200"
                            //src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"]
                             src={props.productImage}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{props.brandName}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {props.productName}
                            </h1>

                            <div className="flex mb-4">
                                {/* Ratings */}
                                <span className="flex items-center">
                                    <ReviewDisplay
                                        rating={props.rating}

                                        color={"text-" + props.color}

                                    />
                                </span>

                                {/* Social Media Share */}
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                             strokeWidth="2" className="w-5 h-5"
                                             viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                             strokeWidth="2" className="w-5 h-5"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                             strokeWidth="2" className="w-5 h-5"
                                             viewBox="0 0 24 24">
                                            <path
                                                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                                        </svg>
                                    </a>
                                </span>
                            </div>

                            <p className="leading-relaxed">{props.productDescription}</p>

                            <div className="flex mt-6 items-center pb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {/*   // Product Color Options
                                        props.properties[1].name === "Color" &&
                                        <span >{props.properties[1].value.map((colorName, index) => {
                                            return (
                                                <button
                                                    //className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 "+ ("bg-"+colorName+"-700") + " focus:outline outline-"+(colorName)+"-700" }/>
                                                    className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 "+ ("bg-"+colorName+"-700") + " focus:outline "+("outline-"+colorName+"-700") }
                                                    onClick={() => {
                                                        setColor(colorName)
                                                        console.log(colorName)
                                                    }}
                                                    key={index}
                                                />
                                                // TODO: Use state get color from button click and set it as the focused color
                                            )
                                        })}</span>
                                    */}
                                    {   // Product Color Options
                                        props.properties[1].name === "Color" &&
                                        <span>{props.properties[1].value.map((colorName, index) => {
                                            return (
                                                <input
                                                    className={"form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 " +
                                                        ("bg-" + colorName + "-700") + " focus:outline " + ("outline-" + colorName + "-700") +
                                                        //"bg-red-700 focus:outline outline-red-700" +
                                                        ("checked:bg-" + colorName + "-600 checked:border-" + colorName + "-600") +
                                                        //"checked:bg-red-600 checked:border-red-600 " +
                                                        "focus:outline-none " +
                                                        "transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}
                                                    //form-radio h-6 w-6 checked:bg-green-500 text-green-500 p-3 my-4
                                                    type="radio"
                                                    name="colorRadio"
                                                    id="colorRadio"
                                                    onClick={() => {
                                                        setColor(colorName)
                                                        console.log(colorName)
                                                    }}
                                                    value={colorName}
                                                    key={index}
                                                    checked={colorName === color}
                                                />
                                                // TODO: Use state get color from button click and set it as the focused color

                                                // TODO: Fix colors
                                            )
                                        })}</span>
                                        //https://stackoverflow.com/questions/70845642/cant-change-radio-button-background-color-on-tailwind-v3/70845747
                                    }

                                </div>

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select
                                            value={size} onChange={setSizeRadio}
                                            className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                            {
                                                props.properties[0].name === "Size" &&
                                                props.properties[0].value.map((sizeItem, index) => {
                                                    return (
                                                        <option
                                                            className="text-gray-700"
                                                            value={sizeItem}
                                                            key={index}
                                                        >
                                                            {sizeItem}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <span
                                            className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2"
                                                 className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Other Properties */}

                            <div className="flex  items-center pb-5 border-b-2 border-gray-200 mb-5">
                                {/*<div className="flex">
                                    <span className="mr-3">Color</span>

                                    {   // Product Color Options
                                        props.properties[1].name === "Color" &&
                                        <span>{props.properties[1].value.map((colorName, index) => {
                                            return (
                                                <input
                                                    className={"form-check-input appearance-none rounded-full h-6 w-6 border border-gray-300 " +
                                                        ("bg-" + colorName + "-700") + " focus:outline " + ("outline-" + colorName + "-700") +
                                                        //"bg-red-700 focus:outline outline-red-700" +
                                                        ("checked:bg-" + colorName + "-600 checked:border-" + colorName + "-600") +
                                                        //"checked:bg-red-600 checked:border-red-600 " +
                                                        "focus:outline-none " +
                                                        "transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}
                                                    //form-radio h-6 w-6 checked:bg-green-500 text-green-500 p-3 my-4
                                                    type="radio"
                                                    name="colorRadio"
                                                    id="colorRadio"
                                                    onClick={() => {
                                                        setColor(colorName)
                                                        console.log(colorName)
                                                    }}
                                                    value={colorName}
                                                    key={index}
                                                    checked={colorName === color}
                                                />
                                                // TODO: Use state get color from button click and set it as the focused color

                                                // TODO: Fix colors
                                            )
                                        })}</span>
                                        //https://stackoverflow.com/questions/70845642/cant-change-radio-button-background-color-on-tailwind-v3/70845747
                                    }

                                </div>*/}

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        {
                                            props.properties[2].name === "Material" &&
                                            ifArrayDo(props.properties[2].value, material, setMaterial, setMaterialType)

                                        }
                                        {/*   // Product Price
                                            props.properties[2].name === "Material" &&
                                            <span
                                                className="title-font font-medium text-2xl text-gray-900">{props.properties[2].value}</span>
                                        */}
                                    </div>
                                </div>
                            </div>


                            {/* Price, Buy Section */}
                            <div className="flex">
                                {   // Product Price
                                    props.productPrice &&
                                    <span
                                        className="title-font font-medium text-2xl text-gray-900">{props.productPrice}</span>
                                }

                                <button
                                    className={"flex ml-auto text-white bg-" + (props.color) + " border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"}>
                                    Add to Cart
                                </button>

                                <button className="rounded-full w-10 h-10 bg-gray-400 p-0 border-0 inline-flex items-center justify-center
                                text-gray-500 ml-4 hover:bg-red-600"
                                >
                                    <svg fill="white" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">

                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                                    </svg>
                                </button>

                                <button className="rounded-full w-10 h-10 bg-gray-400 p-0 border-0 inline-flex items-center justify-center
                                text-gray-500 ml-4 hover:bg-blue-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path
                                            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                                    </svg>
                                        
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {children}
        </div>
    );
}


{/*
Half star

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M 9.049,2.927 C 9.1985626,2.4678429 9.5974148,2.2375949 9.9968701,2.2362559 l -5.9e-6,11.8199721 C 9.7915851,14.056767 9.5864369,14.120358 9.412,14.247 l -2.8,2.034 C 5.828,16.851 4.774,16.084 5.073,15.163 l 1.07,-3.292 C 6.276704,11.45883 6.1297413,11.007444 5.779,10.753 L 2.98,8.72 C 2.197,8.15 2.6,6.91 3.568,6.91 H 7.029 C 7.4619424,6.9101141 7.8457879,6.6316142 7.98,6.22 L 9.05,2.928 Z"/>
                                    </svg>


*/
}

{/*
<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    {product}
</span>
*/
}
