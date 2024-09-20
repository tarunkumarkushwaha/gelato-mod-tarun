import React, { useEffect, useRef, useState } from 'react'

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const SectionWithImage = ({element}) => {

    const elementRef = useRef(null);
    const leftDivRef = useRef(null);
    const rightDivRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            let leftDiv = leftDivRef.current;
            let rightDiv = rightDivRef.current;
            console.log(isInViewport(elementRef.current));
            if (isInViewport(elementRef.current)) {
                // slide in 
                leftDiv.classList.remove('-translate-x-full');
                rightDiv.classList.remove('translate-x-full');
            }
            else {
                // slide out
                leftDiv.classList.add('-translate-x-full');
                rightDiv.classList.add('translate-x-full');
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
            <section className="flex md:flex-row flex-col justify-center items-center py-40 overflow-hidden">
                <div ref={elementRef}></div>
                <div ref={leftDivRef}
                    className=" m-5 flex justify-center items-center transform -translate-x-full transition-transform duration-700 ease-in-out">
                    <div className=" w-[500px] h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-xl">

                        <img src={element && element.leftimagesrc}
                            alt="Image 1" className="w-full h-64 md:h-96 lg:h-[500px] object-cover" />

                    </div>
                </div>
                <div ref={rightDivRef}
                    className="m-5 transform translate-x-full transition-transform duration-700 ease-in-out overflow-hidden">
                    {element && element.rightElement}
                </div>
            </section>
        </>
    )
}

export default SectionWithImage