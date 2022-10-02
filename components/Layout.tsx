import React, {Fragment, FunctionComponent} from 'react'
import classNames from 'classnames'
import Header from './Header'
import Footer from './Footer'
import {MessageList, useMessage} from '../lib/message'
import Example from "../pages/test";
import ChatModal from "../components/Modals/ChatModal"

type LayoutProps = {
    usePadding?: boolean
    useBackdrop?: boolean
}

const FullLayout: FunctionComponent<LayoutProps> = ({
                                                        children,
                                                        usePadding,
                                                        useBackdrop,
                                                    }) => {
    const {messages} = useMessage()
    return (
        <Fragment>
            <Header/>
            <Example/>
            <main
                className={classNames(
                    'w-full h-screen mx-auto relative',
                    usePadding && 'px-2 sm:px-6 lg:px-8',
                    useBackdrop && 'bg-gray-200'
                )}
            >
                {/*<button onClick="buttonHandler()" title="Contact Sale"*/}
                {/*        className="fixed z-300 bottom-8 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">💬*/}
                {/*</button>*/}

                {/*&#9993;*/}
                {/*<ChatModal/>*/}

                <MessageList messages={messages}/>
                {children}
            </main>
            <Footer/>
        </Fragment>
    )
}

FullLayout.defaultProps = {
    usePadding: true,
    useBackdrop: false,
}

export default FullLayout
