import {User} from '@supabase/supabase-js'

export type NextAppSEOProps = {
    title: string
}

export type NextAppPageProps = {
    meta: NextAppSEOProps
}

export type NextAppProductIDPageProps = {
    meta: NextAppSEOProps,
    userAgent?: string,
    product?: object,
    error?: string,
    wishlistStatus?: boolean,
    likedProductsStatus?: boolean,
}

export type NextAppPageUserProps = {
    props: {
        user: User,
        loggedIn: boolean
    }
}

export type NextAppPageRedirProps = {
    redirect: {
        destination: string,
        permanent: boolean
    }
}

export type NextAppPageServerSideProps = NextAppPageUserProps | NextAppPageRedirProps
