import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black '> <br /><br />
            <footer className=" body-font   bg-orange-600 rounded-xl ">
                <div className="  py-2 mx-10 flex items-center sm:flex-row flex-col">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-white-100">
                      
                            <Link href="/" className=" hover:text-gray-700 font-bold  text-2xl">
                                <Image src="/logo.png" alt="logo" width={140} height={120} />
                            </Link>

                     
                    </div>
                    <p className="text-md  text-white-100 sm:ml-4 sm:pl-4 sm:border-l-2  sm:py-2 sm:mt-0 mt-4">
                        Copyright © 2023 Muazam Mughal

                    </p>

                </div>
            </footer>
            <br /><br />
            {/* <div className=' mt-6 bg-black'>
dfsdf
            </div> */}

        </div>
    )
}

export default Footer