import {NextPage} from 'next'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/card";
import FourItemCard from "../components/Card/FourItemCard";


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

// Create Category data till api is ready
const CategoryData = [
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
                            title="T-Shirts"
                            data={FourItemCardData}
                            description="Card description"
                            actionbutton={true}
                            actionbuttontext="See More"
                            action={() => {
                                console.log('Action')
                            }}
                        />

                        {/*<FourItemCard
                            title="Shop by Category"
                            Item1="T-Shirt"
                            Item1Image="/Products/WhiteClock.png"
                            Item2="Jeans"
                            Item2Image="/Products/WhiteClock.png"
                            Item3="Socks"
                            Item3Image="/Products/WhiteClock.png"
                            Item4="Jackets"
                            Item4Image="/Products/WhiteClock.png"
                            description="Card description"
                        />*/}
                        <FourItemCard
                            title="Shop by Category"
                            data={CategoryData}
                            description="Card description"
                            actionButton=""
                            action={() => {
                                console.log('action')
                            }
                            }
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


                {/* <div className="flex flex-wrap">
                    <div className="flex-1"><Card
                        title="Card Title"
                        description="Card description"
                        image="components/Slidebar/Screenshot(1082).png"
                    /></div>
                    <div className="flex-1"><Card
                        title="Card Title"
                        description="Card description"
                        image="components/Slidebar/Screenshot(1082).png"
                    /></div>
                    <div className="flex-1"><Card
                        title="Card Title"
                        description="Card description"
                        image="components/Slidebar/Screenshot(1082).png"
                    /></div>
                    <div><Card
                        title="Card Title"
                        description="Card description"
                        image="components/Slidebar/Screenshot(1082).png"
                    /></div>
                </div>


                <div className="p-5 sm:justify-center sm:pt-9 sm:flex-row text-justify relative">
                    <div className="border-solid border-2 border-black basis-[13%] sm:mr-10 min-w-1/5 rounded-lg ">
                        <Image
                            src="/Products/WhiteClock.png"
                            alt="Profile"
                            width={600}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>


                <section className="container mx-auto px-0 md:px-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
                        {CardData.map((element, index) => (
                            <CardLikeComment
                                key={index}
                                title={element.title}
                                likes={element.likes}
                                order={index + 1}
                                image={element.image}
                            />
                        ))}
                    </div>
                </section>*/}

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
