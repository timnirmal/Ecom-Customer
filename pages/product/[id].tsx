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

    // TODO: Search for product by Name and get the product data
    // In this page id means the product name/title
    let ProductData =
        {
            id: "1",
            color: "red-500",
            brandName: "BRAND NAME",
            productName: "PRODUCT NAME",
            productPrice: "$100",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            //productImage: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            productImage: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            rating: 3.5,
            properties: [
                {
                    name: "Size",
                    value: ["SM", "M", "L", "XL"],
                    display: true
                },
                {
                    name: "Color",
                    value: ["blue", "red", "white"],
                    display: true
                },
                {
                    name: "Material",
                    value: "Cotton",
                    display: true
                },
                {
                    name: "Weight",
                    value: "100g",
                    display: false
                },
                {
                    name: "Dimensions",
                    value: "100x100x100",
                    display: false
                }
            ],
            category: "Category",
            subCategory: "Sub Category",
            tags: ["tag1", "tag2", "tag3"],
            reviews: "100",
            stock: "100",
            discount: "10",
            discountPrice: "90",
        }


    return (
        <div>
            <Head>
                <title>{id}</title>
            </Head>

            <Layout useBackdrop={true} usePadding={false}>

                {/*Map ProductOverView with ProductData*/}
                {/*ProductData.map((product, index) => {
                    return (
                        <ProductOverView key={index} product={product} />
                    )
                })*/}

                <ProductOverView
                    color={ProductData.color}
                    brandName={ProductData.brandName}
                    productName={ProductData.productName}
                    productPrice={ProductData.productPrice}
                    productDescription={ProductData.productDescription}
                    productImage={ProductData.productImage}
                    rating={ProductData.rating}
                    properties={ProductData.properties}
                    id={ProductData.id}
                    category={ProductData.category}
                    subCategory={ProductData.subCategory}
                    tags={ProductData.tags}
                    reviews={ProductData.reviews}
                    stock={ProductData.stock}
                    discount={ProductData.discount}
                    discountPrice={ProductData.discountPrice}
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
