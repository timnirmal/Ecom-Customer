import Link from 'next/link'
import {useAuth} from '../lib/auth'
import Layout from '../components/Layout'
import {SpinnerFullPage} from '../components/Spinner'
import {useEffect} from 'react'
import Router from 'next/router'
import {ROUTE_AUTH} from '../config'
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {supabaseClient} from '../lib/supabase'
import {NextAppPageServerSideProps} from '../types/app'
import CartCard from '../components/Card/Cart'


const Wishlist = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {
        users,       // Logged in user object
        loading,    // Loading state
        signOut,    // Sign out method
        loggedIn,
        userLoading
    } = useAuth()

    useEffect(() => {
        if (!userLoading && !loggedIn) {
            Router.push(ROUTE_AUTH)
        }
    }, [userLoading, loggedIn]);

    if (userLoading) {
        return <SpinnerFullPage/>
    }

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

    return (
        <Layout useBackdrop={false} usePadding={true}>
            <div className="flex flex-row justify-center items-center relative">
                {/* Cart */}
                <div className="flex flex-row ">

                    <div className="flex flex-col  flex-grow items-center">

                        <h1 className="text-3xl font-bold text-center mt-6">Wishlist</h1>

                        <div className="flex flex-col flex-1 items-center">
                            {cartData.items.map((item) => (
                                <CartCard key={item.id} item={item} className="flex-grow"/>
                            ))}
                        </div>


                    </div>

                </div>


            </div>


        </Layout>
    )
}

export default Wishlist

// Fetch user data server-side to eliminate a flash of unauthenticated content.

export const getServerSideProps: GetServerSideProps = async ({req}): Promise<NextAppPageServerSideProps> => {
    const {user} = await supabaseClient.auth.api.getUserByCookie(req)

    if (!user) {
        return {
            redirect: {
                destination: '/auth?from=wishlist',
                permanent: false,
            },
        }
    }
    // or, alternatively, can send the same values that client-side context populates to check on the client and redirect
    // The following lines won't be used as we're redirecting above
    return {
        props: {
            user,
            loggedIn: !!user
        }
    }
}
