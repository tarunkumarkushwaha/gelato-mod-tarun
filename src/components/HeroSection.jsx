import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col justify-center items-center'>
                <div
                    //  left section
                    className="w-full md:w-1/2 m-5 flex justify-center items-center">
                    <div className=" w-[500px] h-64 md:h-96 lg:h-[500px] rounded-xl">
                        <img src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/"
                            alt="Image 1" className="w-full h-64 md:h-96 lg:h-[500px] object-cover" />
                    </div>
                </div>

                <div
                    //  right section 
                    className="m-5 w-full md:w-1/2">
                    <h1 className="text-black text-center text-2xl md:text-3xl lg:text-5xl font-extrabold m-10">Print on demand for your ecommerce business</h1>
                    <h1 className="text-black text-center text-xl md:text-2xl lg:text-3xl font-bold m-10">Sign up for free and only pay for what you sell</h1>
                    <p className="italic text-black text-xs md:text-lg lg:text-xl opacity-90">Turn your passion into profit with the world's largest print on demand network.
                    </p>
                    <div className="w-full m-5 flex justify-center items-center gap-4">
                    <button className='bg-slate-800 text-yellow-50 rounded-xl text-sm p-2'>Get started for Free</button>
                    <button className='bg-slate-100 border border-black text-black rounded-xl text-sm p-2'>See our products</button>
                    </div>       
                </div>
            </div>
        </>
    )
}

export default HeroSection