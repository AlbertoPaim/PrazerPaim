
export const ModalMenu = () =>{
    return (
        <>
        <div className="z-[99] md:hidden fixed top-[80px] right-0 left-0 h-screen bg-black/90">
            <ul className=" mt-20 flex flex-col  justify-center items-center gap-10  text-4xl font-bold rosa">
                <a href="#home" className="my-8 hover:opacity-80"><li>Home</li></a>
                <a href="#produtos" className="my-8 hover:opacity-80"><li>Produtos</li></a>
                <a href="#contato" className="my-8 hover:opacity-80"><li>Contato</li></a>
            </ul>
        </div>
        </>
       
    )
}