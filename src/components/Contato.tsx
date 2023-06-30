import IconWhatsapp from "@/icons/Whats";




export function Contato () {
    

    return(
        <section id="contato" className=" bg-center bg-cover bg-[url(/assets/bg3.jpg)] min-h-screen w-screen">
            <div className="bg-black/60 h-screen w-screen flex flex-col items-center  md:justify-center">
                <p className="text-white text-center text-xl mx-4 my-4">Estamos disponíveis para responder a todas as suas perguntas e ajudá-lo a encontrar as lingeries perfeitas. Entre em contato conosco!</p>
                <img src="/assets/qr.png" alt="qr code"  className="h-52 mx-auto"/>

            </div>
        </section>
   
      
    )
}