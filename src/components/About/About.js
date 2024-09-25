import React from 'react'

const About = () => {
    return (
        <section className="flex items-center bg-stone-100 lg:h-screen font-poppins text-black">
            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="px-4 mb-10 md:text-center md:mb-20">
                    <p className="mb-2 text-lg font-semibold text-gray-400">
                        About Us
                    </p>
                    <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl">
                        What we do
                    </h2>
                    <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                        <div className="flex-1 h-2 bg-blue-200">
                        </div>
                        <div className="flex-1 h-2 bg-blue-400">
                        </div>
                        <div className="flex-1 h-2 bg-blue-300">
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                        <h2 className="mb-4 text-2xl font-bold text-gray-700">
                            Check Returns
                        </h2>
                        <p className="mb-4 text-base leading-7 text-gray-500">
                            At Check returns we empower individuals to take cntrol of their financial well being, we will believe in the transportive power of financial awareness and responsible money manager. Check returns is designed to simplify the complexities of personal finance, make it accessible to everyone
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-700">
                            What sets us apart!
                        </h2>

                        <ul className="mb-10">
                            <li className="flex items-center mb-4 text-base text-gray-600">
                                <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Innovative, User Centric Design
                            </li>
                            <li className="flex items-center mb-4 text-base text-gray-600">
                                <span className="mr-3 text-blue-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Industrial-Standard Security Measures
                            </li>
                            <li className="flex items-center mb-4 text-base text-gray-600">
                                <span className="mr-3 text-blue-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </span>
                                Continuous Improvement & Innovation
                            </li>
                        </ul>
                        <a href="/"
                            className="px-4 no-underline py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                            Home
                        </a>
                    </div>
                    <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
                        <img src="https://i.postimg.cc/HsSPvTq8/pexels-fauxels-3184357.jpg" alt=""
                            className="relative z-40 object-cover w-full rounded-md md:h-96 h-44" />
                        <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">
                            <svg width="290" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="paint0_linear_228_431" x1="152.25" y1="161.063" x2="154.33"
                                        y2="4.773" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff" />
                                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_228_431" x1="133.019" y1="80.334" x2="3.944"
                                        y2="3.188" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#246151" />
                                        <stop offset=".422" stop-color="#A7C6BC" />
                                        <stop offset=".865" stop-color="#73CADC" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_228_431" x1="133.019" y1="165.839" x2="3.944"
                                        y2="88.693" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#246151" />
                                        <stop offset=".422" stop-color="#A7C6BC" />
                                        <stop offset=".865" stop-color="#73CADC" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_228_431" x1="151.307" y1="80.335" x2="280.382"
                                        y2="3.188" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#246151" />
                                        <stop offset=".422" stop-color="#A7C6BC" />
                                        <stop offset=".865" stop-color="#73CADC" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_228_431" x1="151.307" y1="165.839" x2="280.382"
                                        y2="88.693" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#246151" />
                                        <stop offset=".422" stop-color="#A7C6BC" />
                                        <stop offset=".865" stop-color="#73CADC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About