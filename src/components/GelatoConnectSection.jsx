import React, { useRef, useEffect } from 'react'

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const GelatoConnectSection = () => {

    const elementRef = useRef(null);
    const DivRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            let Div = DivRef.current;
            console.log(isInViewport(elementRef.current));
            if (isInViewport(elementRef.current)) {
                // slide in 
                Div.classList.remove('opacity-0');;
                Div.classList.add('opacity-100');
            }
            else {
                // slide out
                Div.classList.remove('opacity-100');
                Div.classList.add('opacity-0');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section>
                <div ref={DivRef}
                    className=" flex md:flex-row flex-col justify-center items-center py-40 overflow-hidden relative px-4 lg:px-8 opacity-0 transition-opacity duration-1000 ease-in-out">
                    <div className=" w-[500px] h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-xl">
                        <img src='https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/'
                            alt="Gelato connect" className="w-full h-64 md:h-96 lg:h-[500px] object-cover" />
                    </div>
                    <div ref={elementRef}></div>
                    <div
                        className="m-5">
                        <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-extrabold m-10">GelatoConnect</h1>
                        <h1 className="text-black text-center text-xl md:text-2xl lg:text-3xl font-thin m-10">Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</h1>

                        <div className="w-full m-5 flex justify-center items-center gap-4">
                            <button className='bg-slate-800 text-yellow-50 hover:text-blue-300 rounded-xl text-sm p-2'>Learn more</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default GelatoConnectSection