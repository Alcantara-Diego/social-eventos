import './style/sidebar.scss'

import { ImFire } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";

import { IoIosAddCircle } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";



function Sidebar () {
    return (
        <ul className="sidebar">
            
            <div className="sidebarGrupo">
                <li>Trending <ImFire /></li>
                <li>Jogos <IoGameController/></li>
                <li>Música <FaMusic /></li>
            </div>

            <div className="sidebarGrupo">
                <li>Criar evento <IoIosAddCircle /></li>
                <li>Meus eventos <AiFillProject /></li>
               
            </div>

            <div className="sidebarGrupo">
                <li>Sobre Nós</li>
            </div>
        </ul>
    )
}

export default Sidebar;