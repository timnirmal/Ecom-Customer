import {NextPage} from 'next'
import {NextAppProductIDPageProps} from '../../types/app'
import Layout from '../../components/Layout'
import Carousel from "../../components/Carousel/Carousel";
import ProductOverView from "../../components/ProductPage/ProductOverView";
import {supabaseClient} from "../../lib/supabase";


let ProductPage: NextPage<NextAppProductIDPageProps> = ({
                                                            userAgent,
                                                            product,
                                                            error,
                                                            wishlistStatus,
                                                            likedProductsStatus,
                                                            children,
                                                            ...props
                                                        }) => {
    console.log("UserAgent", userAgent)
    console.log("Products", product)
    console.log("Products Error", error)
    console.log("Products WishlistStatus", wishlistStatus)
    console.log("LikedProductsStatus", likedProductsStatus)

    //TODO: Search for product by Name and get the product data
    //In this page id means the product name/title
    let ProductData =
        {
            sku: product[0].SKU,
            id: product[0].id,
            color: "red-500",
            //brandName: product[0].brandname,
            productName: product[0].name,
            price: product[0].price || "23",
            productDescription: product[0].description,
            //productImage: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            productImage: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            rating: product[0].rating || 3.5,
            properties: product[0].properties,
            // property: {
            //     sizes: ["SM", "M", "L", "XL"],
            //     colors: ["blue", "red", "white"],
            //     colorsAvailability: [true, true, true],
            //     materials: ["Cotton", "Polyester", "Nylon"],
            //     weight: "100g",
            //     dimensions: "100x100x100"
            // },
            category: "Category",
            subCategory: "Sub Category",
            tags: ["tag1", "tag2", "tag3"],
            reviews: "100",
            stock: product[0].stock || "100",
            discount: product[0].discount,
            discountPrice: "90",
            orders: "100",
        }

    /*
    let ProductData =
        {
            id: "1",
            color: "red-500",
            brandName: "BRAND NAME",
            productName: "PRODUCT NAME",
            price: "$100",
            productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            //productImage: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            productImage: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            rating: 3.5,
            // properties: [
            //     {
            //         name: "Size",
            //         value: ["SM", "M", "L", "XL"],
            //         display: true
            //     },
            //     {
            //         name: "Color",
            //         value: ["blue", "red", "white"],
            //         display: true
            //     },
            //     {
            //         name: "Material",
            //         value: ["Cotton", "Polyester", "Nylon"],
            //         //value: "Cotton",
            //
            //         display: true
            //     },
            //     {
            //         name: "Weight",
            //         value: "100g",
            //         display: false
            //     },
            //     {
            //         name: "Dimensions",
            //         value: "100x100x100",
            //         display: false
            //     }
            // ],
            properties: product[0].properties,
            // TODO: Code again with property data like below
            property: {
                sizes: ["SM", "M", "L", "XL"],
                colors: ["blue", "red", "white"],
                colorsAvailability: [true, true, true],
                materials: ["Cotton", "Polyester", "Nylon"],
                weight: "100g",
                dimensions: "100x100x100"
            },
            category: "Category",
            subCategory: "Sub Category",
            tags: ["tag1", "tag2", "tag3"],
            reviews: "100",
            stock: "100",
            discount: "10",
            discountPrice: "90",
            orders: "50",
        }
    */

    return (
        <div>
            {/*<Head>*/}
            {/*    <title>{id}</title>*/}
            {/*</Head>*/}

            <Layout useBackdrop={true} usePadding={false}>

                <ProductOverView
                    sku={ProductData.sku}
                    productid={ProductData.id}
                    color={ProductData.color}
                    brandname="Brand Name"
                    productname={ProductData.productName}
                    price={ProductData.price}
                    productdescription={ProductData.productDescription}
                    productimage={ProductData.productImage}
                    rating={ProductData.rating}
                    properties={ProductData.properties}
                    id={ProductData.id}
                    category={ProductData.category}
                    subcategory={ProductData.subCategory}
                    tags={ProductData.tags}
                    reviews={ProductData.reviews}
                    stock={ProductData.stock}
                    discount={ProductData.discount}
                    discountprice={ProductData.discountPrice}
                    orders={ProductData.orders}
                    wishliststatus={wishlistStatus}
                    likedproductstatus={likedProductsStatus}
                />

                <Carousel playTime={3000}/>


                <section className="container mx-auto px-0 md:px-4 py-4">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 ">
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

ProductPage.getInitialProps = async ({query}) => {
    console.log("Get Initial Props")
    console.log("Get Initial Props")

    const user = query.id
    let id: string;

    if (typeof user === "string") {
        id = user.split("-")[user.split("-").length - 1];
    }
    console.log("inital Props ", id);

    let {data, error} = await supabaseClient
        .from('products')
        .select("*")
        .eq('id', id)

    if (error) {
        console.log("Error ", error)
    }
    console.log("Product Data hhhhhhhh", data)


    /**
     * Getting Wishlist Status
     * */
    async function getData() {
        let {data: wishlist, errors} = await supabaseClient
            .from('wishlist')
            .select('items')
        //.eq('items.id', id)

        if (errors) {
            console.log(errors)
            if (toString(errors).includes("Cannot read properties of undefined (reading 'items')")) {
                console.log("Unauthorized")
                return
            }
        }
        console.log("Wishlist kkkkkkk", wishlist[0].items)
        return wishlist[0].items
    }

    let prevData = [];

    try {
        prevData = await getData()
    } catch (errors) {
        console.log("Err", errors)
    }

    console.log("Prev Data", prevData)

    // if productid already exists, then set wishlist status to true
    const wishlistStatus = !!prevData.find(item => item.id === Number(id));


    /**
     * Getting LikedProducts Status
     */
    async function getDataLiked() {
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
        console.log("Wishlist kkkkkkk", likedproduct[0])
        console.log("Wishlist kkkkkkk", likedproduct)
        console.log("Wishlist kkkkkkk", likedproduct)
        console.log("Wishlist kkkkkkk", likedproduct)
        console.log("Wishlist kkkkkkk", likedproduct)
        return likedproduct[0].productids
    }

    try {
        prevData = await getData()
    } catch (errors) {
        console.log("Err", errors)
    }

    console.log("Prev Data", prevData)

    // if productid already exists, then set wishlist status to true
    const LikedStatus = !!prevData.find(item => item === Number(id));


    return {
        userAgent: id,
        product: data,
        error: error,
        wishlistStatus: wishlistStatus,
        likedProductsStatus: LikedStatus
    }
}
