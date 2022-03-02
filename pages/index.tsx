import { useState } from 'react'
import {GetServerSideProps, NextPage} from 'next'
import {FaDochub, FaBook} from 'react-icons/fa'
import styles from '../styles/Home.module.css'
import HashIcon from '../svgs/hash-icon.svg'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'
import {FaLock} from 'react-icons/fa'
import {useMessage} from '../lib/message'
import {useFormFields} from '../lib/utils'
import Spinner from '../components/Spinner'
import {supabase} from "../lib/supabase";

// define the shape of the SignUp form's fields
type SignUpFieldProps = {
    email: string,
    password: string
}

//type SupabaseSignupPayload = SignUpFieldProps // type alias for Supabase payload
type SupabaseAuthPayload = SignUpFieldProps // type alias for Supabase payload

// the value we'd like to initialize the SignUp form with
const FORM_VALUES: SignUpFieldProps = {
    email: '',
    password: ''
}

const IndexPage: NextPage<NextAppPageProps> = ({}) => {
    const [loading, setLoading] = useState(false)
    const [isSignIn, setIsSignIn] = useState(true)
    const {handleMessage} = useMessage()
    // Now since we have our form ready, what we're going to need for signing up our users
    // 1. let users provide email and password
    const [values, handleChange] = useFormFields<SignUpFieldProps>(FORM_VALUES)

    // 2. send the provided details to Supabase
    const signUp = async (payload: SupabaseAuthPayload) => {
        try {
            setLoading(true)
            const {error} = await supabase.auth.signUp(payload)
            if (error) {
                if (handleMessage) {
                    handleMessage({message: error.message, type: 'error'})
                }
            } else {
                if (handleMessage) {
                    handleMessage({
                        message: 'Signup successful. Please check your inbox for a confirmation email!',
                        type: 'success'
                    })
                }
            }
        } catch (error) {
            if (handleMessage) {
                handleMessage({message: error.error_description || error, type: 'error'})
            }
        } finally {
            setLoading(false)
        }
    }

    const signIn = async (payload: SupabaseAuthPayload) => {
        try {
            const { error } = await supabase.auth.signIn(payload)
            if (error) {
                if (handleMessage) {
                    handleMessage({message: error.message, type: 'error'})
                }
            } else {
                if (handleMessage) {
                    handleMessage({message: 'Log in successful. I\'ll redirect you once I\'m done', type: 'success'})
                }
            }
        } catch (error) {
            if (handleMessage) {
                handleMessage({message: error.error_description || error, type: 'error'})
            }
        }
    }

    const handleSumbit = (event: React.FormEvent) => {
        event.preventDefault()
        isSignIn ? signIn(values) : signUp(values)
        //signUp(values)
    }

    return (
        <Layout useBackdrop={true} usePadding={false}>
            <div className="h-screen flex flex-col justify-center items-center relative">

                {/* App logo and tagline*/}
                <div className="w-full text-center mb-4 flex  flex-col place-items-center">
                    <div><FaLock className="text-gray-600 text-5xl shadow-sm"/></div>
                    <h3 className="text-3xl text-gray-600">Supa<strong>Auth</strong></h3>
                    <small>Please provide your <strong>email</strong> and <strong>password</strong> and {isSignIn ? 'Log In' : 'Sign Up' }</small>
                </div>

                {/* Sign Up form  */}
                <form className="w-full sm:w-1/2 xl:w-1/3" onSubmit={handleSumbit}>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
                                placeholder="Your Email"
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"
                                   className="block font-semibold text-gray-800 mb-2">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
                                placeholder="Your password"
                                required
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* <!-- Sign Up & Sign In form: Actions --> */}

                        <div className="flex pt-4 gap-2">
                            <button type="submit" className="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
                            >
                                {isSignIn ? 'Log In' : 'Sign Up'}
                            </button>
                            <div className="flex-1 text-right">
                                <small className="block text-gray-600">{isSignIn ? 'Not a member yet?' : 'Already a member?'} </small>
                                <a className="block font-semibold" href=""
                                   onClick={(e) => {
                                       e.preventDefault()
                                       setIsSignIn(!isSignIn)
                                   }}
                                >{isSignIn ?  'Sign Up' : 'Log In' }</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default IndexPage

IndexPage.defaultProps = {
    meta: {
        title: 'SupaAuth - Sign Up'
    }
}


/*
type IndexPageServerSideProps = {
  meta: {
    title: string
  }
}

const IndexPage: NextPage<NextAppPageProps> = ({ meta }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="w-full flex flex-col place-items-center text-6xl gap-2">
            <HashIcon />
            <img src="/nsk.png" alt="NSK Logo" className="w-32" /> {meta?.title}
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <FaDochub className="text-4xl mb-2" />
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <FaBook className="text-4xl mb-2" />
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<IndexPageServerSideProps> =
  async () => {
    return {
      props: {
        meta: {
          title: 'Next.js Starter Kit',
        },
      },
    }
  }
*/