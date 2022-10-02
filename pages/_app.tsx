import "@fortawesome/fontawesome-free/css/all.min.css";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import styles from '../styles/Home.module.css';

import React from 'react'
import type, {AppProps} from 'next/app'
import Head from 'next/head'
import {DefaultSeo} from 'next-seo'

import SEO from '../next-seo.config'
import {MessageProvider} from '../lib/message'
import {AuthProvider} from "../lib/auth";

import Chatbot from 'react-chatbot-kit'
import ActionProviderChat from "../utility/chatbot/ActionProvider";
import MessageParserChat from "../utility/chatbot/MessageProvider";
import ConfigChat from "../utility/chatbot/config";
import {configs} from "@typescript-eslint/eslint-plugin";
import '../styles/chatbox.css';

function MyApp({Component, pageProps}: AppProps) {
    const pageMeta = (Component as any)?.defaultProps?.meta || {}
    const pageSEO = {...SEO, ...pageMeta}

    const [showChat, setShowChat] = React.useState(false);

    return (
        <React.Fragment>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
            </Head>

            {!showChat &&
                <button
                    onClick={() => {
                        console.log("Show Chat", showChat)
                        setShowChat(true)
                        console.log("Show Chat", showChat)
                    }}
                    title="Chat"
                        className="fixed z-300 bottom-10 right-10 bg-blue-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300">💬
                </button>
            }

            {showChat &&
                <div className="flex flex-col justify-center items-center">
                    <button type="button"
                            className="fixed z-300 top-40 right-8  w-4 h-4 p-1 text-black border-none rounded-none opacity-100  hover:text-red-700 hover:opacity-75 hover:no-underline font-bold"
                            onClick={() => {
                                console.log("Show Chat", showChat)
                                setShowChat(false)
                                console.log("Show Chat", showChat)
                            }}
                    >
                                X
                    </button>
                </div>
            }
            {showChat &&
                <div
                    className="fixed z-300 bottom-8 right-8 bg-white rounded w-96 h-[32rem] pt-64  flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl overflow-y-auto overflow-x-hidden">
                    <Chatbot
                        config={ConfigChat}
                        actionProvider={ActionProviderChat}
                        messageParser={MessageParserChat}
                    />
                </div>
            }


            <DefaultSeo {...pageSEO} />
            <MessageProvider>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </MessageProvider>
        </React.Fragment>
    )
}

export default MyApp
