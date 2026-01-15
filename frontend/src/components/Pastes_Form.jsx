import {Selections,Container_pastes} from "./imports";

function Pastes_Form(){
    
    let objects={        

        type:["Code","Text","Json"],
        expiry:["1 Month","1 Year", "Never"],
        mode:["Public","Private"]

    }

    return(
        <>
        <section className="form justify-center flex py-6 flex-col ">
            <form action="" className="w-full md:max-w-[80%] mx-auto " > 
                 <input type="text" placeholder="Title here" maxLength={30} className="min-w-full border border-gray-400 rounded-md px-2 py-2"  />       
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] items-center py-4 " >
                    <Selections opt={objects.type} name="type" id="type"/>
                    <Selections opt={objects.expiry} name="expiry" id="expiry"   />
                    <Selections opt={objects.mode} name="mode" id="mode"  />
                    <button className="rounded-lg px-5 py-1.5 bg-white text-black hover:bg-gray-300 hover:cursor-pointer shadow-sm shadow-gray-300 max-w-fit  max-h-fit " type="button">Create Paste</button>
                </div>

                {/* select can be created as a another component but since we only need three here so i am just copy pasting ....🙂 */}
                {/* <select name="" id="" className="bg-[#161618] border-1 border-gray-400 px-8 py-1.5 rounded-md" >
                    {objects.type.map((opt,index)=>{
                        return(
                            <option key={index} value={opt}>{opt}</option>
                        )
                    })}            
                </select>

                <select name="" id="" className="bg-[#161618] border-1 border-gray-400 px-8 py-1.5 rounded-md" >
                    {objects.expiry.map((opt,index)=>{
                        return(
                            <option key={index} value={opt}>{opt}</option>
                        )
                    })}            
                </select>

                <select name="" id="" className="bg-[#161618] border-1 border-gray-400 px-8 py-1.5 rounded-md" >
                    {objects.mode.map((opt,index)=>{
                        return(
                            <option key={index} value={opt}>{opt}</option>
                        )
                    })}            
                </select> */}
            </form>
            <div className="">
                <Container_pastes/>
            </div>

        </section>        
        </>
    )

}
export default Pastes_Form;