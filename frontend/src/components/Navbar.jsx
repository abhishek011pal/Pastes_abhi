import { useState } from "react";

function Navbar(){
    let items=["Pastes","About","Contact"];
    let[show,setShow]=useState(false);

    const handleClick=()=>{
        setShow(!show);
    }
    return(
    <>
    <section className="Navbar sticky top-0 backdrop-blur-2xl bg-[#16161823] " >
        {/* for mobile */}
        <div className={`flex flex-col justify-center items-center gap-1 cursor-pointer  
        w-fit min-w-8 p-4 md:hidden
        `} 
        onClick={handleClick}
        >            
            <span className={`w-6 h-0.5 bg-red-500 ${show ? "rotate-45 translate-y-1" : "rotate-0 translate-y-0"} transition-all duration-300 ease-in-out`}></span>
            <span className={`w-6 h-0.5 bg-green-600 ${show ? "opacity-0":"opacity-100"}` }></span>
            <span className={`w-6 h-0.5 bg-white ${show ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"} transition-all duration-300 ease-in-out`}></span>
        </div>


        <ul className={`md:flex
            ${show ? "flex flex-col  w-fit p-7 absolute bg-[#161618fc] gap-8 justify-satrt" :"hidden justify-center items-center gap-8"   }         
            transition-all duration-300 ease-in-out`}>
            {items.map((value,index)=>{
                return(<li className="hover:cursor-pointer active:text-orange-400 hover:text-orange-400 transition-all duration-100 ease-in-out text-xl " key={index}>{value}</li>)
            })}
        </ul>
        
    </section>
    </>
    )
}
export default Navbar;
