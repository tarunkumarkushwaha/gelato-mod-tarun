import React from 'react'

const Foot = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white flex flex-col sm:flex-row justify-between items-center">
       more 
        <div className="gap-2 m-3 flex justify-center items-center">
            <a href=""><img src="https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Facebook" className="mx-auto w-7 h-5 md:w-10 rounded-2xl md:h-8"/></a>
            <a href=""><img src="https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Twitter" className="mx-auto w-7 h-5 md:w-10 rounded-2xl md:h-8"/></a>
            <a href=""><img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="instagram" className="mx-auto w-7 h-5 md:w-10 rounded-2xl md:h-8"/></a>

        </div>
        
        <div className=" text-center">
            <p>&copy; 2024 Gelato. All rights reserved.</p>
        </div>
        <div className="mx-2 text-center">
            <p>Privacy Policy</p>
        </div>
    </footer>
    </>
  )
}

export default Foot