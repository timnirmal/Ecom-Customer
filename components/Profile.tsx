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

    console.log("Data", data)
    //console.log(data.data[0].email)




    // variable to store the products name
    const [Name, setName] = React.useState("");
    const [Bio, setBio] = React.useState("");
    const [Gender, setGender] = React.useState("");
    const [Phone, setPhone] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Address, setAddress] = React.useState("");


    return (
        <div className={`card ${className}`} {...props}>
            <div
                //className="max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                //className="bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3"
                className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 shadow-md m-3"
            >
                {/**/}
                {/*Form for get product details*/}
                <div className="w-full  p-3">
                    <div className="flex flex-wrap">

                        {/*Name*/}
                        <InputField htmlFor="grid-user-name" fieldName="Name" placeholder={data?.data[0]?.username || "Name"}
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    fieldSize="half"
                        />

                        {/*Bio*/}
                        <InputField htmlFor="grid-user-bio" fieldName="Bio" placeholder={data?.data[0]?.bio || "Bio"}
                                    value={Bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    fieldSize="half"
                        />

                        {/*Gender*/}
                        <InputField htmlFor="grid-user-gender" fieldName="Gender" placeholder={data?.data[0]?.gender || "Gender"}
                                    value={Gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    fieldSize="half"
                        />

                        {/*Phone*/}
                        <InputField htmlFor="grid-user-phone" fieldName="Phone" placeholder={data?.data[0]?.phone || "Phone"}
                                    value={Phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    fieldSize="half"
                        />

                        {/*Email*/}
                        <InputField htmlFor="grid-user-email" fieldName="Email" placeholder={data?.data[0]?.email || "Email"}
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    fieldSize="half"
                        />

                        {/*Address*/}
                        <InputField htmlFor="grid-user-address" fieldName="Address" placeholder={data?.data[0]?.address || "Address"}
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    fieldSize="full"
                        />


                        <br/>

                        {/*/!*Submit Button*!/*/}
                        {/*<div className="md:w-full lg:w-1/2 p-3">*/}
                        {/*    <button*/}
                        {/*        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"*/}
                        {/*        type="button"*/}
                        {/*        onClick={() => {*/}
                        {/*            addProduct();*/}
                        {/*        }*/}
                        {/*        }*/}
                        {/*    >*/}
                        {/*        Submit*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                    </div>
                </div>

            </div>
            {children}
        </div>
    );
}






function InputField(props: { htmlFor: string, fieldName: string, placeholder: string, value: string, onChange: (e) => void, fieldDescription: string, fieldSize: string }) {

    let fieldSize = props.fieldSize;

    if (props.fieldSize === undefined) {
        fieldSize = "md:w-full lg:w-1/2  p-3";
    } else if (props.fieldSize === "half") {
        fieldSize = "md:w-full lg:w-1/2  p-3";
    } else if (props.fieldSize === "full") {
        fieldSize = "w-full p-3";
    }

    return <div className={fieldSize}>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
               htmlFor={props.htmlFor}>
            {props.fieldName}
        </label>
        <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={props.htmlFor} type="text" placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        <p className="text-gray-700 text-xs italic">
            {props.fieldDescription}
        </p>
    </div>;
}

