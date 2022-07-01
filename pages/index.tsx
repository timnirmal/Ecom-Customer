import {NextPage} from 'next'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/card";
import FourItemCard from "../components/Card/FourItemCard";
import {useRouter} from "next/router";


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


// Create FourItemCard data till api is ready
const FourItemCardData = [
    {
        title: "T-Shirts",
        description: "Card description",
        actionbutton: true,
        actionbuttontext: "See More",
        actionurl: "/hi",
        product: [
            {
                id: 1,
                name: 'Item 1',
                src: '/Products/WhiteClock.png',
            },
            {
                id: 2,
                name: 'Item 2',
                src: '/Products/WhiteClock.png',
            },
            {
                id: 3,
                name: 'Item 3',
                src: '/Products/WhiteClock.png',
            },
            {
                id: 4,
                name: 'Item 4',
                src: '/Products/WhiteClock.png',
            }
        ]
    }
]

// Create Category data till api is ready
const CategoryData = [
    {
        title: "Shop by Category",
        description: "Card description",
        actionbutton: false,
        actionbuttontext: "See More",
        actionurl: "/hi",
        product: [
            {
                id: 1,
                name: 'Item 1',
                src: '/Products/WhiteClock.png',
            },
            {
                id: 2,
                name: 'Item 2',
                src: '/Products/WhiteClock.png',
            },
            {
                id: 3,
                name: 'Item 3',
                src: '/Products/WhiteClock.png',
            },
            {
                id: 4,
                name: 'Item 4',
                src: '/Products/WhiteClock.png',
            }
        ]
    }
]

// Create Other data cards
const OtherData = [
    {
        id: 3,
        name: 'Noteworthy technology acquisitions 2021',
        src: '/Products/WhiteClock.png',
        description: 'Card description',
        actionbutton: false,
        url: '#2',
    },
    {
        id: 6,
        name: 'Noteworthy technology acquisitions 2021',
        src: '/Products/WhiteClock.png',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        actionbutton: false,
    },
    {
        id: 10,
        name: 'Men-White-Watch',
        src: '/Products/WhiteClock.png',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        actionbutton: true,
        actionbuttontext: 'View More',
        url: '#3',
    }
]


const IndexPage: NextPage<NextAppPageProps> = ({}) => {
    const router = useRouter();

    return (
        <div>
            <Layout useBackdrop={true} usePadding={false}>
                {/*<Image
                    src="/photo-1464822759023-fed622ff2c3b.avif"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
                // fill,fixed,intrinsic,responsive,undefined.
                */}

                <Carousel playTime={3000}/>


                <section className="container mx-auto px-0 md:px-4 py-4">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 ">

                        <FourItemCard
                            title={FourItemCardData[0].title}
                            data={FourItemCardData[0].product}
                            description={FourItemCardData[0].description}
                            actionbutton={FourItemCardData[0].actionbutton}
                            actionbuttontext={FourItemCardData[0].actionbuttontext}
                            action={() => {
                                console.log('Action')
                                router.push(FourItemCardData[0].actionurl)
                            }}
                            actionurl={FourItemCardData[0].actionurl}
                        />

                        <FourItemCard
                            title={CategoryData[0].title}
                            data={CategoryData[0].product}
                            description={CategoryData[0].description}
                            actionbutton={CategoryData[0].actionbutton}
                            action={() => {
                                console.log('action')
                            }
                            }
                            actionbuttontext={CategoryData[0].actionbuttontext}
                            actionurl={CategoryData[0].actionurl}
                        />

                        {OtherData.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    id={item.id}
                                    title={item.name}
                                    src={item.src}
                                    description={item.description}
                                    actionbutton={item.actionbutton}
                                    actionbuttontext={item.actionbuttontext}
                                    action={() => {
                                        console.log("action")
                                    }}
                                    url={item.url}
                                />
                            )
                        })}

                    </div>
                </section>

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
