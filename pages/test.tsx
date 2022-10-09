import {Fragment, useState} from 'react'
import {Dialog, Popover, Tab, Transition} from '@headlessui/react'
import {MenuIcon, SearchIcon, ShoppingBagIcon, XIcon, UserIcon, HeartIcon} from '@heroicons/react/outline'
import {ROUTE_HOME, ROUTE_AUTH, ROUTE_PROFILE} from "../config";
import {useAuth} from "../lib/auth";
import Link from "next/link";
import router, { Router } from 'next/router';

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        {name: 'Dresses', href: 'category/dress'},
                        {name: 'Pants', href: 'category/pant'},
                        {name: 'Denim', href: 'category/jean'},
                        {name: 'Sweaters', href: 'category/sweater'},
                        {name: 'T-Shirts', href: 'category/t-shirt'},
                        {name: 'Jackets', href: 'category/jacket'},
                        {name: 'Activewear', href: 'category/activewear'},
                        {name: 'Browse All', href: 'category/all'},
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        {name: 'Watches', href: 'category/watch'},
                        {name: 'Wallets', href: 'category/wallet'},
                        {name: 'Bags', href: 'category/bag'},
                        {name: 'Sunglasses', href: 'category/sunglasses'},
                        {name: 'Hats', href: 'category/hat'},
                        {name: 'Belts', href: 'category/belt'},
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    // ['None', 'Park Avenue', 'Karmic Vision', 'Signature Sole', 'Minions by Kook N Keech', 'Puma', 'Indian Terrain', 'Chumbak', 'Cottinfab', 'CALFNERO', 'DOROTHY PERKINS', 'Oxolloxo', 'Parx', 'Indo Era', 'Titan', 'GAS', 'Style Quotient', 'Natilene', 'AND', 'Palm Tree', 'Roadster', 'Carlton London', 'DressBerry', 'WROGN', 'Soie', 'Urban Dog', 'Flying Machine', 'Next Look', 'DENNISON', 'Fastrack', 'MBE', 'Pepe Jeans', 'Femmora', 'HERE&NOW', 'Calvin Klein Jeans', 'Louis Philippe', 'BERING', 'Kraft Cellar', 'Arrow Sport', 'Saadgi', 'Ginger by Lifestyle', 'Libas', 'Veni Vidi Vici', 'DEYANN', 'Zivame', 'ZHEIA', 'Gini and Jony', 'GAP', 'Madame', 'Levis', 'Van Heusen Woman', 'UCLA', 'ColorPlus', 'Lavie', 'AURELIA', 'Basics', 'Disney by Wear Your Mind', 'ID', 'U.S. Polo Assn. Kids', 'Geox', 'GNIST', 'Kittens', 'Tokyo Talkies', 'LOCOMOTIVE', 'Sonari', 'Sera', 'W', 'YWC', 'MSC', 'BuckleUp', 'LA LOFT', 'Woodland', 'Jompers', 'Bodycare', 'Annabelle by Pantaloons', 'Kraus Jeans', 'Kvsfab', 'Canary London', 'Crocs', 'Alena', 'Zink London', 'Global Desi', 'Rocia', 'Chkokko', 'MomToBe', 'amraoo', 'STREET 9', 'United Colors of Benetton', 'Mast & Harbour', 'URBANE', 'Friskers', 'ONLY', 'MISH', 'Moda Rapido', 'Hypernation', 'Calvin Klein', 'KazarMax', 'Inc 5', 'HIGHLANDER', 'Force 10', 'GERUA', 'Mitera', 'FableStreet', 'MANGO', 'Belle Fille', 'Shoetopia', 'AHIKA', 'Reebok', 'Raymond', 'Wintage', 'IMYOUNG', 'Biba', 'People', 'Duke', 'RANGMANCH BY PANTALOONS', 'Lapis O Lupo', 'YASH GALLERY', 'CODE by Lifestyle', 'Campus', 'FAUSTO', 'HIROLAS', 'Anouk', 'Melange by Lifestyle', 'Van Heusen', 'Campus Sutra', 'Louis Philippe Sport', 'Sonata', 'The Indian Garage Co', 'KLEIO', 'SOJANYA', 'Cherry Crumble', 'Naari', 'ADORENITE', 'Ed Hardy', 'NBA', 'fungus', 'Newport', 'Xpose', 'RARE', 'Teakwood Leathers', 'Varanga', 'GIORDANO', 'Zoop', 'SUITLTD', 'Kappa', 'Kazo', 'DODO & MOA', 'Blackberrys', 'FIDO DIDO', 'Bitiya by Bhama', 'Vishudh', 'Vero Moda', 'Alcis', 'OFF LIMITS', 'Blissta', 'RAISIN', 'French Connection', 'U.S. Polo Assn.', 'Globus', 'Fame Forever by Lifestyle', 'GIO COLLECTION', 'Bhama Couture', 'Mufti', 'PARFAIT', 'ether', 'AKKRITI BY PANTALOONS', 'Franco Leone', 'Shaily', 'Baggit', 'Clovia', 'Red Tape', 'Bonjour', 'Sergio Tacchini', 'E2O', 'Van Heusen Sport', 'Wild stone', 'Superdry', 'Harvard', 'PUMA Motorsport', 'Organic Harvest']
                    items: [
                        {name: 'Puma', href: 'brand/puma'},
                        {name: 'Cottinfab', href: 'brand/cottinfab'},
                        {name: 'DOROTHY PERKINS', href: 'brand/dorothy-perkins'},
                        {name: 'Oxolloxo', href: 'brand/oxolloxo'},
                        {name: 'Parx', href: 'brand/parx'},
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        {name: 'Tops', href: 'category/t-shirt'},
                        {name: 'Pants', href: 'category/pant'},
                        {name: 'Sweaters', href: 'category/sweater'},
                        {name: 'T-Shirts', href: 'category/t-shirt'},
                        {name: 'Jackets', href: 'category/jacket'},
                        {name: 'Activewear', href: 'category/activewear'},
                        {name: 'Browse All', href: 'category/all'},
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        {name: 'Watches', href: 'category/watch'},
                        {name: 'Wallets', href: 'category/wallet'},
                        {name: 'Bags', href: 'category/bag'},
                        {name: 'Sunglasses', href: 'category/sunglasses'},
                        {name: 'Hats', href: 'category/hat'},
                        {name: 'Belts', href: 'category/belt'},
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        {name: 'Park Avenue', href: 'search?brand=park-avenue'},
                        {name: 'Karmic Vision', href: 'search?brand=karmic-vision'},
                        {name: 'Puma', href: 'search?brand=puma'},
                        {name: 'Indian Terrain', href: 'search?brand=indian-terrain'},
                        {name: 'Chumbak', href: 'search?brand=chumbak'},
                    ],
                },
            ],
        },
    ],
    pages: [
        {name: 'Company', href: '#'},
        {name: 'Stores', href: '#'},
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function AuthShow({user, children}) {
    return user ? null : children
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const {loading, signIn, signUp, users, signInWithGithub} = useAuth()
    const [searchValue, setSearchValue] = useState('')

    console.log("User ", users)
    console.log("Loading ", loading)


    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div
                            className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({selected}) =>
                                                    classNames(
                                                        selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-sm">
                                                        <div
                                                            className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                            <img src={item.imageSrc} alt={item.imageAlt}
                                                                 className="object-center object-cover"/>
                                                        </div>
                                                        <a href={item.href}
                                                           className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true"/>
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`}
                                                       className="font-medium text-gray-900">
                                                        {section.name}
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                        className="mt-6 flex flex-col space-y-6"
                                                    >
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <a href={item.href}
                                                                   className="-m-2 p-2 block text-gray-500">
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    <a href={ROUTE_AUTH} className="-m-2 p-2 block font-medium text-gray-900">
                                        Sign in
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        Create account
                                    </a>
                                </div>
                            </div>

                            {/*<div className="border-t border-gray-200 py-6 px-4">
                                <a href="#" className="-m-2 p-2 flex items-center">
                                    <img
                                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                                        alt=""
                                        className="w-5 h-auto block flex-shrink-0"
                                    />
                                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>*/}
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white z-40">
                <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="/">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-14 w-auto"
                                        src="logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({open}) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel
                                                            className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow"
                                                                 aria-hidden="true"/>

                                                            <div className="relative bg-white">
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div
                                                                        className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                        <div
                                                                            className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name}
                                                                                     className="group relative text-base sm:text-sm">
                                                                                    <div
                                                                                        className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-center object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <a href={item.href}
                                                                                       className="mt-6 block font-medium text-gray-900">
                                                                                        <span
                                                                                            className="absolute z-10 inset-0"
                                                                                            aria-hidden="true"/>
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true"
                                                                                       className="mt-1">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div
                                                                            className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`}
                                                                                       className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name}
                                                                                                className="flex">
                                                                                                <a href={item.href}
                                                                                                   className="hover:text-gray-800">
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>

                            {/* Search */}
                            <div className="flex lg:ml-6">
                                <a href="#" className="p-2 text-gray-400 hover:text-gray-500 space-x-6">
                                    <span className="sr-only">Search</span>
                                    <SearchIcon className="w-6 h-6 stroke-0" aria-hidden="true"/>
                                </a>
                            </div>


                            <label className="relative block">
                                <span className="sr-only">Search</span>
                                <button className="absolute inset-y-0 left-0 flex items-center pl-2"
                                      onClick={
                                            () => {
                                                console.log("search")
                                                // route to '/search' with query string
                                                router.push({
                                                    pathname: '/search',
                                                    query: { q: searchValue },
                                                })
                                                }
                                            }

                                >
                                    {/*<svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">*/}
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="h-6 w-6 stroke-slate-400"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor"
                                         strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </button>
                                <input
                                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                    placeholder="Search for anything..." type="text" name="search"
                                    onChange={
                                        (e) => {
                                            setSearchValue(e.target.value)
                                            console.log(searchValue)
                                        }
                                    }
                                />
                            </label>


                            <div className="ml-auto flex items-center">


                                {/* Sign In/Create Account */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                                    {/*<div>
                                        {user ? <div></div> : <a href={ROUTE_AUTH}
                                                                      className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Sign in
                                        </a>}
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>
                                        {user ? <div></div> : <a href="#"
                                                                      className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Create account
                                        </a>}
                                    </div>*/}

                                    <AuthShow user={users}>
                                        <a href={ROUTE_AUTH}
                                           className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Sign in
                                        </a>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>
                                        <a href="#"
                                           className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Create account
                                        </a>
                                    </AuthShow>

                                    {/* User Menu */}


                                </div>

                                {/* Currency */}
                                {/*<div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="w-5 h-auto block flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>*/}

                                {/* Auth */}
                                <div className="flex lg:ml-6">
                                    <a href={ROUTE_PROFILE} className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <UserIcon className="w-6 h-6" aria-hidden="true"/>
                                    </a>
                                </div>

                                {/* Wishlist */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link href="/wishlist">
                                        <a className="group -m-2 p-2 flex items-center">
                                            <HeartIcon
                                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">items in wishlist, view bag</span>
                                        </a>
                                    </Link>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link href="/cart">
                                        <a className="group -m-2 p-2 flex items-center">
                                            <ShoppingBagIcon
                                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                            <span
                                                className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}


const handleSearch = (e) => {
    e.preventDefault()
    console.log('searching')
    console.log(e.target.value)
}
