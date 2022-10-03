import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import NotificationDropdown from "/components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "/components/Dropdowns/UserDropdown.js";

export default function Sidebar({children, className, ...props}) {

    const [collapseShow, setCollapseShow] = React.useState("hidden");

    // search by name, category, brand, price(min, max), min rating, color, gender
    const [categories, setCategories] = React.useState("");
    const [name, setName] = React.useState("");
    const [brand, setBrand] = React.useState("");
    const [priceMin, setPriceMin] = React.useState(0);
    const [priceMax, setPriceMax] = React.useState(999999);
    const [rating, setRating] = React.useState(0);
    const [color, setColor] = React.useState("");
    const [gender, setGender] = React.useState("");

    const categoryList = ['None', 'T-shirt', 'Dress', 'Heels', 'Sweatshirt', 'Sneaker', 'Watch', 'Jumpsuit', 'Wallet', 'Trousers', 'Shirt', 'Kurta', 'Top', 'Jean', 'Jacket', 'Bra', 'Shorts', 'Belt', 'Suit', 'Flat', 'Sweater', 'Churidar', 'Bag', 'Dupatta', 'Skirt', 'Pant', 'Sandal', 'Legging', 'Shoe', 'Saree', 'Blazer', 'Flip-Flops', 'Short', 'Cream', 'Sunglasses', 'Perfume', 'Loafer', 'Mask', 'Other']

    const brandList = ['None', 'Park Avenue', 'Karmic Vision', 'Signature Sole', 'Minions by Kook N Keech', 'Puma', 'Indian Terrain', 'Chumbak', 'Cottinfab', 'CALFNERO', 'DOROTHY PERKINS', 'Oxolloxo', 'Parx', 'Indo Era', 'Titan', 'GAS', 'Style Quotient', 'Natilene', 'AND', 'Palm Tree', 'Roadster', 'Carlton London', 'DressBerry', 'WROGN', 'Soie', 'Urban Dog', 'Flying Machine', 'Next Look', 'DENNISON', 'Fastrack', 'MBE', 'Pepe Jeans', 'Femmora', 'HERE&NOW', 'Calvin Klein Jeans', 'Louis Philippe', 'BERING', 'Kraft Cellar', 'Arrow Sport', 'Saadgi', 'Ginger by Lifestyle', 'Libas', 'Veni Vidi Vici', 'DEYANN', 'Zivame', 'ZHEIA', 'Gini and Jony', 'GAP', 'Madame', 'Levis', 'Van Heusen Woman', 'UCLA', 'ColorPlus', 'Lavie', 'AURELIA', 'Basics', 'Disney by Wear Your Mind', 'ID', 'U.S. Polo Assn. Kids', 'Geox', 'GNIST', 'Kittens', 'Tokyo Talkies', 'LOCOMOTIVE', 'Sonari', 'Sera', 'W', 'YWC', 'MSC', 'BuckleUp', 'LA LOFT', 'Woodland', 'Jompers', 'Bodycare', 'Annabelle by Pantaloons', 'Kraus Jeans', 'Kvsfab', 'Canary London', 'Crocs', 'Alena', 'Zink London', 'Global Desi', 'Rocia', 'Chkokko', 'MomToBe', 'amraoo', 'STREET 9', 'United Colors of Benetton', 'Mast & Harbour', 'URBANE', 'Friskers', 'ONLY', 'MISH', 'Moda Rapido', 'Hypernation', 'Calvin Klein', 'KazarMax', 'Inc 5', 'HIGHLANDER', 'Force 10', 'GERUA', 'Mitera', 'FableStreet', 'MANGO', 'Belle Fille', 'Shoetopia', 'AHIKA', 'Reebok', 'Raymond', 'Wintage', 'IMYOUNG', 'Biba', 'People', 'Duke', 'RANGMANCH BY PANTALOONS', 'Lapis O Lupo', 'YASH GALLERY', 'CODE by Lifestyle', 'Campus', 'FAUSTO', 'HIROLAS', 'Anouk', 'Melange by Lifestyle', 'Van Heusen', 'Campus Sutra', 'Louis Philippe Sport', 'Sonata', 'The Indian Garage Co', 'KLEIO', 'SOJANYA', 'Cherry Crumble', 'Naari', 'ADORENITE', 'Ed Hardy', 'NBA', 'fungus', 'Newport', 'Xpose', 'RARE', 'Teakwood Leathers', 'Varanga', 'GIORDANO', 'Zoop', 'SUITLTD', 'Kappa', 'Kazo', 'DODO & MOA', 'Blackberrys', 'FIDO DIDO', 'Bitiya by Bhama', 'Vishudh', 'Vero Moda', 'Alcis', 'OFF LIMITS', 'Blissta', 'RAISIN', 'French Connection', 'U.S. Polo Assn.', 'Globus', 'Fame Forever by Lifestyle', 'GIO COLLECTION', 'Bhama Couture', 'Mufti', 'PARFAIT', 'ether', 'AKKRITI BY PANTALOONS', 'Franco Leone', 'Shaily', 'Baggit', 'Clovia', 'Red Tape', 'Bonjour', 'Sergio Tacchini', 'E2O', 'Van Heusen Sport', 'Wild stone', 'Superdry', 'Harvard', 'PUMA Motorsport', 'Organic Harvest']

    const colorList = ['None', ' Green', ' Red', ' Yellow', 'Blue', ' Grey', ' Black', ' Brown', ' Purple', ' Beige', ' White', ' Burgundy', ' Pink', ' Maroon', ' Orange', ' Silver', ' Gold', ' Charcoal', ' Khaki', ' Navy']

    const genderList = ['None', 'Male', 'Female', 'Unisex']

    console.log(categories)
    console.log(name)
    console.log(brand)
    console.log(priceMin)
    console.log(priceMax)
    console.log(rating)
    console.log(color)
    console.log(gender)

    console.log(props)




    const router = useRouter();


    return (
        <>
            <nav
                className="md:left-0 md:block  md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div
                    className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/*/!* Toggler *!/*/}
                    {/*<button*/}
                    {/*    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}*/}
                    {/*>*/}
                    {/*    <i className="fas fa-bars"></i>*/}
                    {/*</button>*/}
                    {/*/!* Brand *!/*/}
                    {/*<Link href="/">*/}
                    {/*    <a*/}
                    {/*        href="#pablo"*/}
                    {/*        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"*/}
                    {/*    >*/}
                    {/*        Ecom*/}
                    {/*    </a>*/}
                    {/*</Link>*/}

                    {/*Search Button*/}
                    <div className="relative flex w-full flex-wrap items-stretch mb-4">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            defaultValue={props.name}
                            type="text"
                            placeholder="Search"
                            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/*Button to Submit*/}
                    <button
                        className="border-gray-900 mb-5 text-black opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={
                        () => {
                            router.push({
                                pathname: '/search',
                                query: {
                                    name: name,
                                    brand: brand,
                                    priceMin: priceMin,
                                    priceMax: priceMax,
                                    rating: rating,
                                    color: color,
                                    gender: gender,
                                    category: categories
                                }})
                            // query to text
                            let query = '?'
                            if (name) {
                                query += 'name=' + name + '&'
                            }
                            if (brand) {
                                query += 'brand=' + brand + '&'
                            }
                            if (priceMin) {
                                query += 'priceMin=' + priceMin + '&'
                            }
                            if (priceMax) {
                                query += 'priceMax=' + priceMax + '&'
                            }
                            if (rating) {
                                query += 'rating=' + rating + '&'
                            }
                            if (color) {
                                query += 'color=' + color + '&'
                            }
                            if (gender) {
                                query += 'gender=' + gender + '&'
                            }
                            if (categories) {
                                query += 'category=' + categories + '&'
                            }
                            // remove last &
                            query = query.slice(0, -1)
                            // set Filter
                            props.searchFilters(query)

                        }
                    }
                    >
                        <i className="fas fa-search"></i>
                    </button>

                    <hr className="my-4 md:min-w-full"/>

                    {/*List to select from for category*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Category
                        <select
                            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={
                                (e) => setCategories(e.target.value)
                            }>
                            {categoryList.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    {/*List to select from for brand*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Brand
                        <select
                            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={
                                (e) => setBrand(e.target.value)
                            }
                        >
                            {brandList.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    {/*text box to min price*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Min Price
                        <input type="text"
                               className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                               defaultValue={0}
                               onChange={
                                   (e) => setPriceMin(e.target.value)
                               }
                        />
                    </div>

                    {/*text box to max price*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Max Price
                        <input type="text"
                               className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                               defaultValue={999999}
                               onChange={
                                   (e) => setPriceMax(e.target.value)
                               }
                        />
                    </div>

                    {/*text box to min rating*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Min Rating
                        <input type="text"
                               className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                               defaultValue={0}
                               onChange={
                                   (e) => setRating(e.target.value)
                               }
                        />
                    </div>

                    {/*list to Color*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Color
                        {/*<input type="color"*/}
                        {/*       className="w-full p-2.5 h-10 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"*/}
                        {/*       onChange={*/}
                        {/*           (e) => setColor(e.target.value)*/}
                        {/*       }*/}
                        {/*/>*/}
                        <select
                            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={
                                (e) => setColor(e.target.value)
                            }
                        >
                            {colorList.map((color) => (
                                <option key={color} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>

                    {/*list to Gender*/}
                    <div className="relative w-full lg:max-w-sm pb-5">
                        Gender
                        <select
                            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                            onChange={
                                (e) => setGender(e.target.value)
                            }
                        >
                            {genderList.map((gender) => (
                                <option key={gender} value={gender}>{gender}</option>
                            ))}
                        </select>
                    </div>


                </div>
            </nav>
        </>
    );
}
