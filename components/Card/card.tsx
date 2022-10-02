import React from "react";

import {useRouter} from 'next/router'
import Link from 'next/link'
import {supabaseClient} from "../../lib/supabase";

export default function Card({children, className, ...props}) {
    //const router = useRouter()
    //const {id} = router.query

    const title = props.title || 'Card'
    // if title has white space, it will be replaced with dash
    const titleDash = title.replace(/\s/g, '-')
    // join titleDash and id
    const titleId = `${titleDash}-${props.id}`

    console.log(props.actionbutton)

    return (
        <div className={`card ${className}`} {...props}>
            <div
                //className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                className="bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                <div className="lg:h-72 md:h-56 sm:h-28 rounded-lg overflow-hidden relative p-3">

                    <Link href="/product/[id]" as={`/product/${titleId}`}
                          onClick={() => {
                              /**
                               * Add view 1 point to view page
                               */
                              //addToInteractinos(parseInt(titleId), users, 1)
                          }}
                    >
                        <a>
                            <img src={props.src} className="object-cover w-full h-full rounded-2xl"
                                 alt=""/>
                            {/*<Image

                            src="/Products/WhiteClock.png"
                            alt="Picture of the author"
                            layout="responsive"
                            height={12}
                            width={20}
                            objectFit="cover"
                            className="rounded-2xl"
                        />*/}

                        </a>
                    </Link>
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>

                    {props.actionbutton ?
                        <a href={props.url}
                           className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {props.actionbuttontext}
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                        :
                        null
                    }

                </div>
            </div>
            {children}
        </div>
    );
}


/**
 *
 * @param productid
 * @param users
 * @param productType
 * */
function addToInteractinos(productid: number, users: any, productType: number) {
    let valueAdded = false;


    async function postData() {

        const {data, error} = await supabaseClient
            .from('Interactions')
            .insert([
                {
                    user: users.id,
                    type: productType,
                    product: productid,
                    created_at: new Date().toISOString(),
                },
            ])

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
