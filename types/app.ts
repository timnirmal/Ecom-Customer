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

export type NextAppSearchPageProps = {
    search_term?: string,
}

export type NextCartPageProps = {
    meta: NextAppSEOProps,
    data?: object,
    error?: string,
}

export type NextAppPageUserProps = {
    props: {
        user: User,
        loggedIn: boolean,
        data?: any,
    }
}

export type NextAppPageRedirProps = {
    redirect: {
        destination: string,
        permanent: boolean
    }
}

export type NextAppPageServerSideProps = NextAppPageUserProps | NextAppPageRedirProps
