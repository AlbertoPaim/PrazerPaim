import IconClose from "@/icons/CloseMenu"
import { Props } from "./Produtos"
import { productList } from "@/data/Products"
import IconWhatsapp from "@/icons/Whats"

export const ModalProdutos = ({openProdutos}:Props) =>{
    

    return (
        
        <div className="z-[99] top-0 fixed inset-0 bg-black/90 overflow-y-auto flex flex-col items-center">
            
        
        <div className="bg-black  grid md:grid-cols-4 container mx-auto justify-center">
            {productList.map(item => 
            <div className="flex flex-col items-center">
             <img src={item.url} alt="foto" className=" mx-2 md:mx-0 md:max-h-60  xl:max-h-96 w-fit cursor-pointer hover:opacity-80" />
             <div className="flex items-center justify-between gap-5 mb-5">
                <span className="text-white ml-4 text-2xl  text-center font-bold">{item.price}</span>
                <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5571986020429" target=" _blank"><IconWhatsapp className="rosa text-3xl cursor poiter"/></a>
             </div>
             
            </div>
           
            
            )}
        </div>
        <button onClick={openProdutos} className=" text-white font-bold bg-[#ff4ba5] py-2 px-4 rounded-md text-2xl mx-auto shadow-xl shadow-black md:text-sm my-8">Voltar</button>

        </div>
        
    )
}