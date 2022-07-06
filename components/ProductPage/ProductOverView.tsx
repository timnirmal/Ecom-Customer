import React from "react";
import ReviewDisplay from "./ReviewDisplay";
import PropTypes from "prop-types";
import {useAuth} from "../../lib/auth";
import {supabaseClient} from "../../lib/supabase";


export default function ProductOverView({children, className, ...props}) {
    const {loading, signIn, signUp, users, signInWithGithub, userData} = useAuth()

    console.log("ProductOverView props : ", props);
    console.log("ProductOverView User : ", users);
    console.log("ProductOverView UserData : ", userData);

    const [color, setColor] = React.useState(props.properties && props.properties.color && props.properties.color.value ? props.properties.color.value[0] : "");
    const [size, setSize] = React.useState(props.properties && props.properties.size && props.properties.size.value ? props.properties.size.value[0] : "");

    const [material, setMaterial] = props.properties && props.properties.material && props.properties.material.value ?
        (!Array.isArray(props.properties.material.value) ? React.useState(props.properties.material.value)
            : React.useState(props.properties.material.value[0])) : React.useState("");

    const [priceWithoutDiscount, setPriceWithoutDiscount] = React.useState(parseFloat(props.price.substring(1)));
    const [price, setPrice] = React.useState(Number((priceWithoutDiscount - (priceWithoutDiscount * props.discount / 100)).toFixed(2)));

    const [quantity, setQuantity] = React.useState(1);
    const [wishlistStatus, setWishlistStatus] = React.useState(props.wishliststatus);
    const [likedProductStatus, setLikedProductStatus] = React.useState(props.likedproductstatus);

    function setSizeRadio(e) {
        setSize(e.target.value);
        console.log("Set Size Radio Key", e.target.selectedIndex);
        if (props.properties && props.properties.size && props.properties.size.price) {
            setPrice(parseFloat(props.properties.size.price[e.target.selectedIndex].substring(1)));
        }
        console.log("Price ", price);
    }

    function setMaterialType(e) {
        setMaterial(e.target.value);
        console.log(e.target.value);
        if (props.properties && props.properties.material && props.properties.material.price) {
            setPrice(parseFloat(props.properties.material.price[e.target.selectedIndex].substring(1)));
        }
    }

    console.log(color);
    console.log(size);
    console.log(material);
    console.log("Price ", price);


    // Colors
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

                        {/* Product Image */}
                        <img alt="ecommerce"
                             className="lg:w-1/2 lg:h-140 object-top md:hover:h-full w-full object-cover object-center rounded border border-gray-200"
                            //src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"]
                             src={props.productimage}
                        />

                        {/* Product Details */}
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            {/* Brand Name and Product Name */}
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{props.brandname}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
                                {props.productname}
                            </h1>

                            {/*Rating, Review, Orders and Social*/}
                            <div className="flex mb-4">
                                {/* Ratings && Reviews*/}
                                <span className="flex items-center">
                                    <ReviewDisplay
                                        rating={props.rating}
                                        color={"text-" + props.color}
                                    />
                                    <span className="text-gray-600 ml-3 text-center">{props.reviews}
                                        <div className={"text-gray-600 text-sm "}>Reviews</div>
                                    </span>
                                    <span className="text-gray-600 ml-3 text-center">{props.orders}
                                        <div className={"text-gray-600 text-sm"}>Orders</div>
                                    </span>
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

                            {/*Price*/}
                            {props.price ?
                                <div className="flex items-center mb-4">
                                    <div className="text-gray-500 text-sm mt-2 mb-2">Price
                                        {/*If a Discount Exists*/}
                                        {props.discount ?
                                            //TODO: Add Variants
                                            // Stroked gray text with striked price
                                            <span
                                                className="text-gray-900 text-xl font-bold ml-2">${price}
                                                <span
                                                    className="text-gray-400 ml-3 text-base align-baseline line-through">${priceWithoutDiscount}</span>
                                                    <span
                                                        className="bg-red-300 text-red-800 ml-2 text-base align-top text-sm rounded">-{props.discount}%</span>
                                            </span>

                                            :
                                            <span className="text-gray-900 text-xl font-bold ml-2">${price}</span>
                                        }
                                    </div>
                                </div>
                                :
                                <div className="flex items-center mb-4">
                                    <div className="text-gray-500 text-sm">Price not mentioned</div>
                                </div>
                            }


                            {/*Color and Size*/}
                            <div className="flex mt-6 items-center pb-5">
                                {/*Color*/}
                                <div className="flex">
                                    {props.properties && props.properties.color && props.properties.color.value && <span className="mr-3">Color</span>}
                                    {
                                        props.properties && props.properties.color && props.properties.color.value ?
                                            <span>{props.properties.color.value.map((colorName, index) => {
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
                                            :
                                            props.properties.color ? null : null

                                        //https://stackoverflow.com/questions/70845642/cant-change-radio-button-background-color-on-tailwind-v3/70845747
                                    }

                                </div>

                                {/*Size*/}
                                <div className="flex ml-6 items-center">
                                    {props.properties && props.properties.size && props.properties.size.value && <span className="mr-3">Size</span>}
                                    <div className="relative">
                                        {props.properties && props.properties.size && props.properties.size.value &&
                                            <select
                                                value={size} onChange={setSizeRadio}
                                                className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                {
                                                    props.properties.size.value.map((sizeItem, index) => {
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
                                        }
                                        {props.properties && props.properties.size && props.properties.size.value &&
                                            <span
                                                className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2"
                                                 className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"/>
                                            </svg>
                                        </span>
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* Other Properties */}
                            <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5">

                                <div className="flex items-center">
                                    <span className="mr-3">Material</span>
                                    <div className="relative">
                                        {
                                            props.properties && props.properties.material && props.properties.material.value &&
                                            ifArrayDo(props.properties.material.value, material, setMaterial, setMaterialType)
                                        }
                                        {/*   // Product Price
                                            props.properties[2].name === "Material" &&
                                            <span
                                                className="title-font font-medium text-2xl text-gray-900">{props.properties[2].value}</span>
                                        */}
                                    </div>
                                </div>
                            </div>

                            {/*Description*/}
                            {/*flex items-center pt-5 border-t-2 border-gray-200 mb-5*/}
                            <p className="leading-relaxed pb-5 border-b-2 border-gray-200 mb-5">{props.productdescription}</p>

                            <div className="flex items-center mb-5">
                                <span className="mr-3">Quantity</span>
                                {/*Text box */}
                                <div className="relative mr-4">
                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => {
                                            setQuantity(e.target.value)
                                        }
                                        }
                                        min="1"
                                        max={props.stock}
                                        step="1"
                                    />

                                </div>
                                {/*Show red color message "Stock is reached"*/}
                                {parseInt(props.stock) === parseInt(quantity) ?
                                    <span className="text-red-500 text-sm">
                                        {console.log(parseInt(props.stock))}
                                        {console.log(parseInt(quantity))}
                                        <span>Stock is reached</span>
                                    </span>
                                    :
                                    <span className=" text-sm">
                                    <span>{props.stock} available</span>
                                </span>
                                }
                            </div>

                            {/* Price, Buy Section */}
                            <div className="flex">

                                <button
                                    className={"flex ml-auto text-white bg-" + (props.color) + " border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"}
                                    onClick={() => {
                                        console.log("ID", parseInt(props.id))
                                        console.log("Price", price)
                                        console.log("Color", color)
                                        console.log("Size", size)
                                        console.log("Material", material)
                                        console.log("Quantity", quantity)
                                        console.log("Users", users)
                                        addToCart(parseInt(props.id), Number(price), color, size, material, quantity, users)
                                    }}
                                >
                                    Add to Cart
                                </button>

                                {/* Wishlist */}
                                <button className={"rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-red-600" + (wishlistStatus ? " bg-red-500" : " bg-gray-400")}

                                    onClick={() => {
                                        console.log("ID", parseInt(props.id))
                                        console.log("Users", users)
                                        addToWishlist(parseInt(props.id), users)
                                        setWishlistStatus(!wishlistStatus)
                                    }
                                    }
                                >
                                    <svg fill="white" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                                    </svg>
                                </button>

                                <button className={"rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-blue-600"  + (likedProductStatus ? " bg-blue-500" : " bg-gray-400")}
                                    onClick={() => {
                                        console.log("ID", parseInt(props.id))
                                        console.log("Users", users)
                                        addToLikedProducts(parseInt(props.id), users)
                                        setLikedProductStatus(!likedProductStatus)
                                    }
                                    }
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


ProductOverView.propTypes = {
    productid: PropTypes.string.isRequired,
    productname: PropTypes.string.isRequired,
    productprice: PropTypes.string.isRequired,
}

ProductOverView.defaultProps = {
    productid: "",
    productname: "",
    productprice: "",
}


/**
 * @param arr
 * If not array, convert it to array.
 */
function ifArray(arr: any) {
    if (Array.isArray(arr)) {
        return arr;
    } else {
        return [arr];
    }
}

/**
 * If array DO have a list of items (an array), then turn it into an option element.
 * If not show it as string.
 */
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

/**
 *
 * @param productid
 * @param price
 * @param color
 * @param size
 * @param material
 * @param quantity
 * @param users
 */
function addToCart(productid: number, price: number, color: string | undefined, size: string | undefined, material: string | undefined, quantity: number, users: any) {

    // Prepare properties json

    // empty properties json object
    let properties = {}
    // if color exists, add to properties
    if (color) {
        properties["color"] = color
    }
    // if size exists, add to properties
    if (size) {
        properties["size"] = size
    }
    // if material exists, add to properties
    if (material) {
        properties["material"] = material
    }
    console.log("Properties", properties)

    const datalist = {
        id: productid,
        properties: properties,
        quantity: quantity,
        created_at: new Date().toISOString(),
    }
    console.log("DataList ", datalist)

    async function getData() {
        let {data: cart, errors} = await supabaseClient
            .from('cart')
            .select('items')

        if (errors) {
            console.log(errors)
            if (toString(errors).includes("Cannot read properties of undefined (reading 'items')")) {
                console.log("Unauthorized")
                return
            }
        }
        console.log("Wishlist kkkkkkk", cart[0].items)
        return cart[0].items
    }

    async function postData() {

        let prevData = [];
        try {
            prevData = await getData()
        } catch (errors) {
            console.log("Err", errors)
        }

        console.log("Prev Data", prevData)

        prevData.push(datalist)

        console.log("New Array", prevData)

        const {data, error} = await supabaseClient
            .from('cart')
            .insert([{id: users.id, items: prevData}], {upsert: true})

        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
        console.log("Data added", data)
    }

    postData()

    return

}


/**
 *
 * @param productid
 * @param users
 */
function addToWishlist(productid: number, users: any) {
    let valueAdded = false;

    const datalist = {
        id: productid,
        created_at: new Date().toISOString(),
    }
    console.log("DataList ", datalist)

    async function getData() {
        let {data: cart, errors} = await supabaseClient
            .from('wishlist')
            .select('items')
            //.eq('items.id', productid)

        if (errors) {
            console.log(errors)
            if (toString(errors).includes("Cannot read properties of undefined (reading 'items')")) {
                console.log("Unauthorized")
                return
            }
        }
        console.log("Wishlist kkkkkkk", cart[0].items)
        return cart[0].items
    }

    async function postData() {

        let prevData = [];
        try {
            prevData = await getData()
        } catch (errors) {
            console.log("Err", errors)
        }

        console.log("Prev Data", prevData)

        // if productid already exists, remove it, else add it
        if (prevData.find(item => item.id === productid)) {
            prevData = prevData.filter(item => item.id !== productid)
            valueAdded = false;
        }
        else {
            prevData.push(datalist)
            valueAdded = true;
        }

        console.log("New Array", prevData)

        const {data, error} = await supabaseClient
            .from('wishlist')
            .insert([{id: users.id, items: prevData}], {upsert: true})

        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
        console.log("Data added", data)
    }

    postData()

    return valueAdded

}

/**
 *
 * @param productid
 * @param users
 * */
function addToLikedProducts(productid: number, users: any) {
    let valueAdded = false;

    let productidArray = []
    productidArray.push(productid)


    async function getData() {
        console.log("kkkkkkkkkkkkkkkkkkk")

        let { data: likedproduct, errors } = await supabaseClient
            .from('likedproduct')
            .select('productids')
            .eq('id', users.id)
            // .contains('productids', `(${productidArray}]` )

        if (errors) {
            console.log(errors)
            if (toString(errors).includes("Cannot read properties of undefined (reading 'items')")) {
                console.log("Unauthorized")
                return
            }
        }
        console.log("Wishlist kkkkkkk", likedproduct[0].productids)
        return likedproduct[0].productids
    }

    async function postData() {
        let prevData = [];
        try {
            prevData = await getData()
        } catch (errors) {
            console.log("Err", errors)
        }

        console.log("Prev Data", prevData)

        // if productid already exists, remove it, else add it

        if (prevData.find(item => item === productid)) {
            prevData = prevData.filter(item => item !== Number(productid))
            valueAdded = false;
        } else {
            prevData.push(Number(productid))
            valueAdded = true;
        }

        console.log("New Array", prevData)

        const {data, error} = await supabaseClient
            .from('likedproduct')
            .insert([{id: users.id, productids: prevData}], {upsert: true})

        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
        console.log("Data added", data)
    }

    postData()

    return valueAdded

}
