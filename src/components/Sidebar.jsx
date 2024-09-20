import { useCallback, useEffect, useRef } from "react"

const SideBar = ({ sidebar, toggleNav }) => {

    let menuItems = ['Products', 'Start selling', 'Tools and apps', 'Pricing', 'Resources', 'Pro sellers', 'GelatoConnect']

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        // to detect clickks outsides sidebar 
        (e) => {
            if (
                menuRef.current &&
                sidebar &&
                !menuRef.current.contains(e.target)
            ) {
                toggleNav();
            }
        },
        [sidebar]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);

    return (
        <>
            <aside ref={menuRef} className={`fixed z-20 top-0 left-0 h-full transition-all duration-1000 ease-in-out ${!sidebar ? "md:w-[25vw] w-[60vw] -translate-x-full" : "md:w-[30vw] w-[60vw] -translate-x-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-400">

                    <ul className="space-y-2 font-medium">
                        <li>
                            <div className="flex justify-center items-center">
                            <img className=' h-8 w-72' src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" alt="Gelato" />
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center mt-2">
                                <input type="search" id="job-search"
                                    className="block outline-none w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                    placeholder="Search " />
                            </div>
                        </li>

                        {menuItems.map(i => (<li className="relative group">
                            <div className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg ">
                                <span className="flex-1 ms-3">{i}</span>
                            </div>
                            <ul
                                className="absolute z-40 rounded-xl hidden hover:block group-hover:block bg-gray-300 text-black py-2 shadow-lg">
                                {/* dummy text  */}
                                <li className="px-4 md:w-72 w-60 py-2 hover:bg-indigo-400">Clothings</li>
                                <li className="px-4 md:w-72 w-60 py-2 hover:bg-indigo-400">Cards</li>
                                <li className="px-4 md:w-72 w-60 py-2 hover:bg-indigo-400">Photobooks</li>
                            </ul>
                        </li>
                        ))}

                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar