import './style/sidebar.scss'

import { ImFire } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";

import { IoIosAddCircle } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

function resetTelaPrincipal(){
    console.log("entrou reset")
    const telaFeed = document.getElementById("telaFeed");
    const telaUsuarioInfo = document.getElementById("telaUsuarioInfo");

    telaUsuarioInfo.style.display="none";
    telaFeed.style.display="block";
}

function toggleTelaPrincipal(trigger){
    console.log(trigger)

    let telaFeed = document.getElementById("telaFeed");
    let telaUsuarioInfo = document.getElementById("telaUsuarioInfo");

    console.log(getComputedStyle(telaUsuarioInfo).display === "none")

    switch (trigger) {
        case "usuario":
            if(getComputedStyle(telaUsuarioInfo).display === "none"){
                telaUsuarioInfo.style.display = "block";
                telaFeed.style.display = "none";
            } else {
                resetTelaPrincipal();
            }
           

            
            break;
    
        default:
            break;
    }

    
}


function Sidebar () {
    return (
        <ul className="sidebar">
            
            <div className="sidebarDesktop">
                <div className="sidebarGrupo">
                    <p>Categorias</p>
                    <li>Trending <ImFire /></li>
                    <li>Jogos <IoGameController/></li>
                    <li>Música <FaMusic /></li>
                </div>
                <div className="sidebarGrupo">
                    <p>Pessoal</p>
                    <li>Criar evento <IoIosAddCircle /></li>
                    <li>Meus eventos <AiFillProject /></li>
                    <li onClick={()=> toggleTelaPrincipal("usuario")}>Perfil <BsPersonCircle /></li>
                
                </div>
            </div>

            <ul className="sidebarMobile">
                <li>
                    <ImFire />
                </li>
                <li>
                    <AiFillProject />
                </li>
                <li>
                    <IoIosAddCircle />
                </li>
                <li>
                    <FaMusic />
                </li>
                <li onClick={()=> toggleTelaPrincipal("usuario")}>
                    <BsPersonCircle />
                </li>
                
            </ul>

            
        </ul>

        
    )
}

export default Sidebar;