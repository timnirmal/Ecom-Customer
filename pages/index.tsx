import {useState, useEffect} from 'react'
import {NextPage} from 'next'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'
import {FaLock, FaGithub} from 'react-icons/fa'
import {useAuth} from '../lib/auth'
import {useFormFields} from '../lib/utils'
import Navbar from '../components/Navbar'
import Example from './test'
import Image from 'next/image'
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/card";

// define the shape of the SignUp form's fields
type SignUpFieldProps = {
    email: string,
    password: string
}

// the value we'd like to initialize the SignUp form with
const FORM_VALUES: SignUpFieldProps = {
    email: '',
    password: ''
}

const myLoader = ({src, width, quality}) => {
    return `https://localhost:3000/public/${src}?w=${width}&q=${quality || 75}`
}

const IndexPage: NextPage<NextAppPageProps> = ({}) => {
    const [isSignIn, setIsSignIn] = useState(true)
    const {loading, signIn, signUp, user, signInWithGithub} = useAuth()
    // Now since we have our form ready, what we're going to need for signing up our users
    // 1. let users provide email and password
    const [values, handleChange] = useFormFields<SignUpFieldProps>(FORM_VALUES)

    // 2. send the provided details to Supabase
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        isSignIn ? signIn(values) : signUp(values)
    }

    const images = [
        "components/Slidebar/Screenshot(1082).png"
    ];

    return (
        <div>
            <Layout useBackdrop={true} usePadding={false}>
                <Example/>

                {/*<Image
                    src="/photo-1464822759023-fed622ff2c3b.avif"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
                // fill,fixed,intrinsic,responsive,undefined.
                */}



                <Card
                    title="Card Title"
                    description="Card description"
                    image="components/Slidebar/Screenshot(1082).png"
                />

                <Carousel playTime={3000}/>


            </Layout>
        </div>
    )
}

export default IndexPage

IndexPage.defaultProps = {
    meta: {
        title: 'Ecom'
    }
}