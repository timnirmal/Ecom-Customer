
import {NextPage} from 'next'
import {NextAppPageProps} from '../types/app'
import Layout from '../components/Layout'
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/card";
import FourItemCard from "../components/Card/FourItemCard";



// layout for page

import Admin from "/layout/Admin.js";


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
        id: 1,
        name: 'Noteworthy technology acquisitions 2021',
        src: '/Products/WhiteClock.png',
        description: 'Card description',
        actionbutton: false,
        url: '#2',
    },
    {
        id: 2,
        name: 'Noteworthy technology acquisitions 2021',
        src: '/Products/WhiteClock.png',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        actionbutton: false,
    },
    {
        id: 3,
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
                    <div className="w-full xl:w-4/12 px-4">
                        <CardBarChart />
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardPageVisits />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardSocialTraffic />
                    </div>
                </div>
            </Admin>
        </>
    );
}

//Dashboard.getLayout = (page) => <Admin page={page} />;


IndexPage.defaultProps = {
    meta: {
        title: 'Ecom'
    }
}

