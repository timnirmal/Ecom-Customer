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
import CartCards from "../components/CartCards";


const Cart = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {
        users,       // Logged in user object
    } = useAuth()

    const [totalPrice, setTotalPrice] = useState(0)
    const [userID, setUserID] = useState("")
    const [userName, setUserName] = useState("Thimira")
    const [payment, setPayment] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [orderList, setOrderList] = useState(data)

    console.log(data)

    const returnFunc = val => {
        let shipping_cost = 20.00
        let price = (val + shipping_cost).toFixed(2)
        setTotalPrice(val)
    }

    console.log(totalPrice)
    console.log(userID)
    console.log(userName)
    console.log(payment)
    console.log(discount)
    console.log(orderList)


    return (
        <Layout useBackdrop={false} usePadding={true}>
            <div className="flex flex-row justify-center items-center relative">
                {/* Cart */}
                <div className="flex flex-row basis-3/4">

                    <div className="flex flex-col flex-grow items-center">

                        <h1 className="text-3xl font-bold text-center mt-6">Checkout</h1>

                        {/*Address*/}
                        <div className="">
                            <div className=" bg-white rounded-2xl border border-gray-200 shadow-md m-3">
                                <div
                                    className=" h-32 w-full  p-3 relative pb-3">
                                    <div className="font-black p-3">Address</div>
                                    <div className="pl-3">49/C, Kumbuka, Gonapola</div>
                                    <div className="pl-3">western province , Sri Lanka, 12410</div>
                                    <div
                                        className="pl-3 text-white">aksaslksajskasjlksjsklasjaslaksajsalkajklsajsalksjslksduhfufdhfdsifudsfhduifdhfduifdhfdiduhf
                                    </div>
                                </div>

                            </div>
                        </div>

                        <hr/>

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
                            <h2 className="text-2xl font-bold  mb-6">Total: ${(totalPrice + 20).toFixed(2)}</h2>
                        </div>
                        <button className="flex flex-col items-center"
                                onClick={() => {
                            console.log("ID", users?.id)
                            console.log("Price", totalPrice)
                            console.log("Payment", payment)
                            console.log("Discount", discount)
                            console.log("Order List", orderList)
                            console.log("User Name", userName)
                            console.log("Users", users)
                            addToOrders( Number(totalPrice), Number(payment), Number(discount), orderList, userName, users)
                        }}
                        >
                            <Link href="/checkout">
                                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Place Order
                                </a>
                            </Link>
                        </button>
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




/**
 *
 * @param totalPrice
 * @param payment
 * @param discount
 * @param orderList
 * @param userName
 * @param users
 */
function addToOrders(totalPrice: number, payment: number, discount: number, orderList: any | undefined, userName: string | undefined, users: any) {

    // Prepare properties json

    const datalist = {
        username: userName,
        payment: payment,
        discount: discount,
        datetime: new Date().toISOString(),
        orders: orderList,
        userid: users.id
    }

    console.log("DataList ", datalist)

    // async function getData() {
    //     console.log ("usererrrrr", users)
    //
    //     let {data: cart, errors} = await supabaseClient
    //         .from('cart')
    //         .select('items')
    //
    //     if (errors) {
    //         console.log(errors)
    //         if (toString(errors).includes("Cannot read properties of undefined (reading 'items')")) {
    //             console.log("Unauthorized")
    //             return
    //         }
    //     }
    //     console.log("Wishlist kkkkkkk", cart[0].items)
    //     console.log("Wishlist ppppppppp", cart)
    //     return cart[0].items
    // }

    async function postData() {

        // let prevData = [];
        // try {
        //     prevData = await getData()
        // } catch (errors) {
        //     console.log("Err", errors)
        // }
        //
        // console.log("Prev Data", prevData)
        //
        // prevData.push(datalist)
        //
        // console.log("New Array", prevData)

        const {data, error} = await supabaseClient
            .from('orders')
            .insert([{
                username: userName,
                payment: payment,
                discount: discount,
                datetime: new Date().toISOString(),
                orders: orderList,
                userid: users.id
            }])

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
