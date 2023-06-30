"use client"

import { Section1 } from "@/components/Section1";
import { ModalMenu } from "@/components/ModalMenu";
import { useState } from "react";
import IconMenu from '@/icons/Menu'
import IconClose from "@/icons/CloseMenu";
import { Produtos } from "@/components/Produtos";
import { Contato } from "@/components/Contato";
import { ModalProdutos } from "@/components/ModalProdutos";


function Home() {

// MODAL MENU 
  const [openModalMenu, setOpenModalMenu] = useState(false)

  function toggleMenu() {
    setOpenModalMenu(!openModalMenu)
  }

//MODAL PRODUTOS 

const [openP, setOpenP] = useState(false)

function openProdutos() {
  setOpenP(!openP)
}



  return (

    <div className="mx-auto flex items-center flex-col">
      <header className=" z-[99] h-[100px] fixed top-0 right-0 left-0">
        <nav className="flex justify-between px-2 items-center md:px-8 bg-black">
            <div className=''>
                <img className= " h-20 md:h-10" src='/assets/logo.png' alt="logo" />
            </div>
            {openModalMenu ? <IconClose onClick={toggleMenu} className='md:hidden rosa mr-2 text-4xl cursor-pointer'/> : <IconMenu onClick={toggleMenu} className='md:hidden rosa mr-2 text-4xl cursor-pointer'/> }
            
            <ul className="hidden md:flex justify-between gap-10  font-bold rosa">
                <a href="#home" className="hover:opacity-80 text-sm"><li>Home</li></a>
                <a href="#produtos" className="hover:opacity-80 text-sm"><li>Produtos</li></a>
                <a href="#contato" className="hover:opacity-80 text-sm"><li>Contato</li></a>
            </ul>
        </nav>
      </header>
          
      <Section1/>
      {openModalMenu && 
      <ModalMenu
      />
      }
      {
        <Produtos
      openProdutos ={openProdutos}
      />
      }
    
      {openP && 
      <ModalProdutos
      openProdutos ={openProdutos}
      />
      }
      
      <Contato/>

    </div>
  )
}
export default Home;