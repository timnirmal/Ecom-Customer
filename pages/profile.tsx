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
import useSWR from "swr";

import Profile from "../components/Profile";


const ProfilePage = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log('ProfilePage')

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





    return (
        <Layout useBackdrop={false}>
            <div className="h-screen flex flex-col py-10 items-center relative">
                <h2 className="text-3xl my-4">Howdie, {users && users.email ? users.email : 'Explorer'}!</h2>
                {!users &&
                    <small>You've landed on a protected page. Please <Link href="/">log in</Link> to view the page's
                        full content </small>}
                {users && <div>
                    <button onClick={signOut}
                            className="border bg-gray-500 border-gray-600 text-white px-3 py-2 rounded w-full text-center transition duration-150 shadow-lg mb-5">Sign
                        Out
                    </button>
                </div>}
                <Profile users={users}/>
            </div>
        </Layout>
    )
}

export default ProfilePage

// Fetch user data server-side to eliminate a flash of unauthenticated content.

export const getServerSideProps: GetServerSideProps = async ({req}): Promise<NextAppPageServerSideProps> => {
    const {user} = await supabaseClient.auth.api.getUserByCookie(req)

    // We can do a re-direction from the server
    if (!user) {
        return {
            redirect: {
                destination: '/auth?from=profile',
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


async function getData(usersId) {
    let {data: profiles, error} = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', usersId)

    if (error) {
        console.log('error', error)
    }
    console.log('profiles', profiles)
}
