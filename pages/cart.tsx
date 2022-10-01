import Link from 'next/link'
import {useAuth} from '../lib/auth'
import Layout from '../components/Layout'
import {SpinnerFullPage} from '../components/Spinner'
import {useEffect, useState} from "react";
import Router from 'next/router'
import {ROUTE_AUTH} from '../config'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {supabaseClient} from '../lib/supabase'
import {NextAppPageServerSideProps} from '../types/app'
import CartCard from '../components/Card/Cart'
import useSWR from "swr";
// import useSWR from 'swr'
//const fetcher = (...args) => fetch(...args).then((res) => res.json())
import CartCards from "../components/CartCards";


/*  // Approach to fetch data from supabase API : FAILED


function Sidebar() {
    const [ products, setProducts ] = useState(null); // initial value

    useEffect(joj, []);

    async function joj() {

        let {datsa:cartDatas, error} = await supabaseClient
            .from('products')
            .select('*')
            .then(users => {
                console.log("datstsydsdgd", users)
                console.log("datstsydsdgd", cartDatas)
                console.log("datstsydsdgd", cartDatas)
                console.log("datstsydsdgd", cartDatas)
                console.log("datstsydsdgd", cartDatas)
                console.log("datstsydsdgd", cartDatas)
                cartDatas && setProducts(cartDatas) // your response is an array, extract the first value
                return products
            })

    } // empty array means run this once on mount

    return products && ( // only display if `user` is set
        <p>Hello, </p>
);
}

*/

// Single data taken from API
// {
//         "id": 3,
//         "quantity": "4",
//         "created_at": "2022-07-05T17:58:29.178Z",
//         "properties": {
//             "size": "XL",
//             "color": "red",
//             "material": "silk"
//         }
//     },

/* Bad approch to fetch data
function getItem(props) {
    let data = props.data
    let users = props.users

    if (data && users && users.id) {
        data.forEach(element => {
            console.log(element.id)
            console.log(typeof (element.id))
            console.log(users.id)
            console.log(typeof (users.id))
            if (element.id == users.id) {
                console.log("Succeeded")
                console.log("Succeeded")
                console.log(element)

                return (
                    <div>
                        <h1> datadata </h1>
                        sndkjsdnsdksdnsdiknsddsidnsdisdns
                    </div>
                );
            }
        })
    }
}
*/

const Cart = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {
        users,       // Logged in user object
        loading,    // Loading state
        signOut,    // Sign out method
        loggedIn,
        userLoading
    } = useAuth()

    const [totalPrice, setTotalPrice] = useState(0)

    console.log(data)
    console.log(data)
    console.log(data)


    // for each item in data if data[i].id == users.id

    // let selectedItem = getItem()
    //
    // console.log("Slelcted ietm", selectedItem)
    // console.log("Slelcted ietm", selectedItem)
    // console.log("Slelcted ietm", selectedItem)


    ////////////////////////////////////////
    // Initial loading codes, Removed due to hook incompatibility
    /*
    useEffect(() => {
        if (!userLoading && !loggedIn) {
            Router.push(ROUTE_AUTH)
        }
    }, [userLoading, loggedIn]);

    if (userLoading) {
        return <SpinnerFullPage/>
    }
    */
    ////////////////////////////////////////


    // TODO: Try SWR Hook
    // const {data, error} = useSWR('/api/profile-data', fetcher)
    //
    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>
    //
    // console.log("Int Data ", data)
    // console.log("Int Data ", data.cart)


    // Get data with UseEffect
    // useEffect(() => {
    //     const NewData = getData();
    //     console.log("New Data ", NewData)
    // }, []);


    // created_at: "2022-07-05T17:58:29.178Z"
    // id: 3
    // properties:
    // color: "red"
    // material: "silk"
    // size: "XL"
    // [[Prototype]]: Object
    // quantity: "4"


    // async function getData() {
    //     let {data: cart, error} = await supabaseClient
    //         .from('cart')
    //         .select('*')
    //
    //     return cart
    // }
    //
    //
    // let cartDatas = getData().then(function (datas){
    //     console.log("Data", datas)
    //
    // })
    //
    // console.log(cartDatas)




    // TODO: Get Cart Data from the database
    let cartData = {
        items: [
            {
                id: 1,
                name: 'Item 1',
                price: 10,
                quantity: 1,
                image: 'https://picsum.photos/200/300',
                stock: 10
            },
            {
                id: 2,
                name: 'Item 2',
                price: 20,
                quantity: 2,
                image: 'https://picsum.photos/200/300',
                stock: 0
            },
            {
                id: 3,
                name: 'Item 3',
                price: 30,
                quantity: 3,
                image: 'https://picsum.photos/200/300',
                stock: 10
            }
        ],
        total: 60
    }

    const returnFunc = val => {
        setTotalPrice(val)

        console.log("returned value ", totalPrice)
        console.log("returned value ", totalPrice)
        console.log("returned value ", totalPrice)
        console.log("returned value ", totalPrice)
        console.log("returned value ", totalPrice)
    }



    return (
        <Layout useBackdrop={false} usePadding={true}>
            <div className="flex flex-row justify-center items-center relative">
                {/* Cart */}
                <div className="flex flex-row basis-3/4">

                    <div className="flex flex-col flex-grow items-center">

                        <h1 className="text-3xl font-bold text-center mt-6">Cart</h1>

                        {/*<div className="flex flex-col flex-1 items-center">*/}
                        {/*    {cartData.items.map((item) => (*/}
                        {/*        <CartCard key={item.id} item={item} className="flex-grow"/>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <CartCards data={data} users={users} returnFunc={returnFunc}/>


                    </div>

                </div>


                <div className="flex basis-1/4 justify-between mb-132  ">

                    <div className="flex flex-col ">
                        <div className="text-2xl font-bold text-center mb-10">Order Summery</div>
                        <div className="flex flex-col ">
                            <h2 className="text-xl mb-1 ">Subtotal : ${totalPrice.toFixed(2)}</h2>
                            <h2 className="text-xl mb-2 ">Shipping: ${20.00}</h2>
                            <hr className="border-b-1 border-gray-300 p-2"/>
                            <h2 className="text-2xl font-bold  mb-6">Total: ${(totalPrice+20).toFixed(2)}</h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link href="/checkout">
                                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Checkout
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <Link href="/">
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Continue Shopping
                        </a>
                    </Link>
                </div>

            </div>


        </Layout>
    )
}

export default Cart

// Fetch user data server-side to eliminate a flash of unauthenticated content.

export const getServerSideProps: GetServerSideProps = async ({req}): Promise<NextAppPageServerSideProps> => {
    const {user} = await supabaseClient.auth.api.getUserByCookie(req)

    const data = await getData();

    if (!user) {
        return {
            redirect: {
                destination: '/auth?from=cart',
                permanent: false,
            },
        }
    }
    // or, alternatively, can send the same values that client-side context populates to check on the client and redirect
    // The following lines won't be used as we're redirecting above


    return {
        props: {
            user,
            loggedIn: !!user,
            data: data
        }
    }
}


// Function to get the cart data from the database
async function getData() {
    console.log("Getting Data")

    let {data: cart, errors} = await supabaseClient
        .from('cart')
        .select('*')

    if (errors) {
        console.log(errors)
        if (toString(errors).includes("Cannot read properties of undefined (reading 'items')")) {
            console.log("Unauthorized")
            return
        }
    }
    console.log("Wishlist kkkkkkk", cart)
    console.log("Wishlist kkkkkkk", cart)
    console.log("Wishlist kkkkkkk", cart)

    // TODO: Get other Cart Data from the products table and add it to json data
    // cart[0].items.map((item) => (
    //     console.log("Item ", item)
    // ))

    return cart
}


