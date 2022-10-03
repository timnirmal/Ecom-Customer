import {NextPage} from 'next'
import {NextAppProductIDPageProps} from '../../types/app'
import Layout from '../../components/Layout'
import Carousel from "../../components/Carousel/Carousel";
import ProductOverView from "../../components/ProductPage/ProductOverView";
import {supabaseClient} from "../../lib/supabase";
import Card from "../../components/Card/card";
import {useEffect, useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import useSWR from 'swr'
import {array} from "prop-types";


let CategoryPage: NextPage<NextAppProductIDPageProps> = ({
                                                           search_term,
                                                           children,
                                                           ...props
                                                       }) => {
    console.log("Search Term", search_term)


    const [searchTerm, setSearchTerm] = useState(search_term)
    const [searchTermFilters, setSearchTermFilters] = useState("?category=" + searchTerm)

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const payload = 17 // ID is 17

    const {data, errorss} = useSWR('http://127.0.0.1:8000/search/' + searchTermFilters, fetcher)

    console.log('http://127.0.0.1:8000/search/' + searchTermFilters)
    console.log('http://127.0.0.1:8000/search/' + searchTermFilters)
    console.log('http://127.0.0.1:8000/search/' + searchTermFilters)


    console.log(data)
    console.log(data)
    console.log(data)

    console.log(searchTerm)
    console.log(searchTerm)

    // search by name, category, brand, price(min, max), min rating, color, gender

    console.log(searchTermFilters)
    console.log(searchTermFilters)
    console.log(searchTermFilters)
    console.log(searchTermFilters)
    console.log(searchTermFilters)




    return (
        <div>
            {/*<Head>*/}
            {/*    <title>{id}</title>*/}
            {/*</Head>*/}

            <Layout useBackdrop={false} usePadding={false}>


                <div className="">
                    {/*Title*/}
                    <div className="font-black text-4xl text-gray-800 text-center pt-5">
                        {searchTerm}
                    </div>

                    <div className="relative flex-auto m-5 ">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 ">
                            {data?.map((item, index) => {
                                //console.log(item.data[0])
                                return (
                                    <Card
                                        key={index}
                                        id={item.id}
                                        title={item.name}
                                        src={item.src || '/Products/WhiteClock.png'}
                                        description={item.description || ""}
                                        actionbutton={item.actionbutton || ""}
                                        actionbuttontext={item.actionbuttontext || ""}
                                        action={() => {
                                            console.log("action")
                                        }}
                                        url={item.url || ""}
                                        price={item.price || 0}
                                        status={"Search"}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/*Product Recommendation Bar*/}
                {errorss ? <div>Failed to load</div> : <div></div>}
                {!data ? <div>Loading...</div> : <div></div>}

                {/*Input field with button
                <div className="flex flex-row justify-center">
                    <div className="flex flex-row justify-center">
                        <input type="text" placeholder="Search"
                               className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 56.966 56.966">
                                <path
                                    d="M55.71 51.253l-14.14-14.14c1.172-1.672 1.86-3.69 1.86-5.88 0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c2.19 0 4.208-.688 5.88-1.86l14.14 14.14c.39.39.902.59 1.414.59s1.024-.2 1.414-.59c.78-.78.78-2.05 0-2.83zM15 25c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"/>
                            </svg>
                        </button>
                    </div>
                </div>*/}



                {console.log(data)}
                {/*For each item in data array*/}
                <section className="container mx-auto px-0 md:px-4 py-4">

                </section>


            </Layout>
        </div>
    )
}

export default CategoryPage


CategoryPage.defaultProps = {
    meta: {
        title: "Category",
    }
}

CategoryPage.getInitialProps = async ({query}) => {
    console.log("Get Initial Props")

    const search_term = query.category


    console.log(search_term)



    return {
        search_term: search_term,
    }
}
