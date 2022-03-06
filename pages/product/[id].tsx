import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import {NextPage} from 'next'
import {NextAppPageProps} from '../../types/app'
import Layout from '../../components/Layout'
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/card";
import FourItemCard from "../../components/Card/FourItemCard";
import Head from 'next/head'
import ProductOverView from "../../components/ProductPage/ProductOverView";


const ProductPage: NextPage<NextAppPageProps> = ({}) => {
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <Head>
                <title>{id}</title>
            </Head>

            <Layout useBackdrop={true} usePadding={false}>

                <ProductOverView
                    brandName="BRAND NAME"
                    productName="PRODUCT NAME"
                    productPrice="$100"
                    productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    productImage="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    color="text-red-500"
                    rating={3.5}
                />

                <Carousel playTime={3000}/>


                <section className="container mx-auto px-0 md:px-4 py-4">
                    <div
                        className="grid
                                    grid-cols-1
                                    md:grid-cols-2
                                    lg:grid-cols-3
                                    2xl:grid-cols-4
                                    justify-items-center gap-4
                                    ">
                        <FourItemCard

                            title="T-Shirts"
                            Item1="T-Shirt"
                            Item1Image="/Products/WhiteClock.png"
                            Item2="T-Shirt"
                            Item2Image="/Products/WhiteClock.png"
                            Item3="T-Shirt"
                            Item3Image="/Products/WhiteClock.png"
                            Item4="T-Shirt"
                            Item4Image="/Products/WhiteClock.png"
                            description="Card description"
                        />
                        <Card
                            title="Men-White-Watch"

                            description="Card description"
                            image="components/Slidebar/Screenshot(1082).png"
                        />

                    </div>
                </section>


            </Layout>
        </div>
    )
}

export default ProductPage

ProductPage.defaultProps = {
    meta: {
        title: "Product Page",
    }
}
