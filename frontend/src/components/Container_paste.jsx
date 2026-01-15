import { useState,useRef } from "react";
function Container_pastes(){
    
    const [text, setText] = useState("");
    const lines = text.split("\n").length;

    const textareaRef = useRef(null);
    const linesRef = useRef(null);

    const handleScroll = () => {
        linesRef.current.scrollTop = textareaRef.current.scrollTop;
    };


    return(
    <>
        <section className="flex flex-col w-full h-[calc(100vh-270px)] md:h-[calc(100vh-220px)] box-border overflow-hidden rounded-sm border-2 border-gray-400 p-0">
            <div className="header flex justify-between items-center p-2 bg-gray-500   ">
                <div className="title">Title</div>
                <div className="copyBtn">copybtn</div>
            </div>
            <div className="body overflow-hidden flex flex-1 flex-row p-2 ">
                <div ref={linesRef} className="text-gray-400 px-2 text-right select-none overflow-hidden leading-6 font-mono">
                    {Array.from({ length: lines }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                <textarea 
                    ref={textareaRef}
                    name="textArea" id="textArea" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}  
                    placeholder="Write here…" 
                    onScroll={handleScroll}
                    className="w-full h-full text-white box-border px-2 cursor-text  overflow-x-auto  resize-none caret-white focus:outline-none [scrollbar-gutter:stable] leading-6 font-mono 
                    [scrollbar-width:thin]
                    [scrollbar-color:#6b7280_#111]
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-[#111]
                    [&::-webkit-scrollbar-thumb]:bg-gray-600
                    [&::-webkit-scrollbar-thumb]:rounded-md
                    [&::-webkit-scrollbar-thumb:hover]:bg-gray-400                    
                    ">  
                                      
                </textarea>

            </div>
        </section>
    </>
    )
}
export default Container_pastes;
