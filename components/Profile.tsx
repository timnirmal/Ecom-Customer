import React from "react";

import {useRouter} from 'next/router'
import useSWR from "swr";

export default function Profile({children, className, ...props}) {
    const router = useRouter()
    const {id} = router.query
    const title = props.title || 'Card'

    console.log("Printing data", props)

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const payload = props.users?.id

    console.log("Payload", payload)
    console.log("Payload", payload)
    console.log("Payload", payload)

    const {data, errorss} = useSWR('http://127.0.0.1:8000/user/' + payload, fetcher)

    console.log('http://127.0.0.1:8000/user/' + payload)
    console.log('http://127.0.0.1:8000/user/' + payload)
    console.log('http://127.0.0.1:8000/user/' + payload)

    console.log(data)
    console.log(data)

    return (
        <div className={`card ${className}`} {...props}>
            <div
                //className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                //className="bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3"
                className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 shadow-md m-3"
            >
                osjdojsdosdjsodsjd
            </div>
            {children}
        </div>
    );
}
