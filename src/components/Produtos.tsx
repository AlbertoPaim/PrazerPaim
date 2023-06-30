import { useState } from "react"


export type Props = {
    openProdutos: () => void
    
}


export function Produtos ({openProdutos}:Props) {
    
   







    return(
        <section id="produtos" className=" bg-center bg-cover bg-[url(/assets/bg4.jpg)] h-[calc(100vh - 100px)] w-screen">
            <div className="bg-black/60 h-screen w-screen flex items-center">
                <button onClick={openProdutos} className=" text-white font-bold bg-[#ff4ba5] py-2 px-4 rounded-md text-2xl mx-auto shadow-xl shadow-black md:text-sm">Saiba Mais</button>
            </div>
        </section>
   
      
    )
}