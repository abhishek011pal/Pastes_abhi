function Selections({opt,name,id}){
    return(
        <>
            <div className="selection p-2 max-w-fit">
                <select name={name} id={id} className="bg-[#161618] border-1 border-gray-400 px-8 py-1.5 rounded-md hover:cursor-pointer    ">
                    {opt.map((values,key)=>{
                        return(
                            <option key={key} value={values} className="hover:cursor-pointer">{values}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default Selections;