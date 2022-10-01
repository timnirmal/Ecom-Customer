import React from "react";
import CartCard from '../components/Card/Cart'

import {useRouter} from 'next/router'
import Link from 'next/link'
import useSWR from "swr";

export default function CartCards({children, className, ...props}) {
    //const router = useRouter()
    //const {id} = router.query

    console.log("Inisde card")
    console.log(props.data)
    console.log(props.users)

    let productArray = []
    let cartArray = []
    let totalPrice = 0
    let currentRead = 0

    if (props.data && props.users && props.users.id) {

        const fetcher = (...args) => fetch(...args).then((res) => res.json())

        const {data, errorss} = useSWR('http://127.0.0.1:8000/products', fetcher)

        if (data) {

            console.log(data.data[0])
            console.log(data.data)
            console.log(data.data)
            console.log(data)
            console.log(data)


            props.data.forEach(element => {
                console.log(element)
                if (element.id === props.users.id) {
                    console.log(element.items)  // In here we have array of items


                    console.log('into the array')

                    element.items.forEach(subElement => {
                        console.log(subElement.id)
                        cartArray = subElement

                        for (let i = 0; i < data.data.length; i++) {
                            console.log("In the array")
                            console.log(data.data[i].id)
                            console.log(subElement.id)      // Cart item that we process right now
                            if (data.data[i].id == subElement.id) {
                                console.log("The data", data.data[i])   // Corresponding Product item
                                console.log("The data", data.data[i])

                                totalPrice += parseFloat(data.data[i].price.substring(1))

                                productArray.push(data.data[i])
                            }
                        }
                        currentRead++;
                    })
                }
            })

            console.log("Current Read", currentRead)
            console.log("Data length", data.data.length - 1)
            if (currentRead == data.data.length - 1) {
                console.log(totalPrice)
                console.log(totalPrice)
                console.log(totalPrice)
                console.log(totalPrice)
                console.log(totalPrice)
                console.log(totalPrice)
                console.log(totalPrice)
                props.returnFunc(totalPrice)
            }
        }
    }


    const title = props.title || 'Card'
    // if title has white space, it will be replaced with dash
    const titleDash = title.replace(/\s/g, '-')
    // join titleDash and id
    const titleId = `${titleDash}-${props.id}`

    console.log(props.actionbutton)

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


    console.log(productArray)

    return (
        <div className="flex flex-col flex-1 items-center">
            {productArray.map((item) => (
                <CartCard key={item.id} item={item} cartArray={cartArray} className="flex-grow"/>
            ))}
        </div>
    );
}

