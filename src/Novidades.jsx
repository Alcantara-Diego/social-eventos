import "./style/novidades.scss"

import { BsPersonCircle } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Novidades (){
    return(
        <div id="novidadesDiv">
            <div className="novosUsers">
                <IoMdNotifications className="novidadeSimbolo" />

               
                <div className="listas">
                    
                    <ul>
                        <h4>Novos usuários conectados</h4>
                        <li>
                            <div className="fotoNome">
                                <BsPersonCircle />
                                <p>NewUser01</p>
                            </div>

                            <button className="infoBtn"><FaEye /></button>
                        </li>
                        <li>
                            <div className="fotoNome">
                                <BsPersonCircle />
                                <p>NewUser01</p>
                            </div>
                            <button className="infoBtn"><FaEye /></button>
                        </li>
                        <li>
                            <div className="fotoNome">
                                <BsPersonCircle />
                                <p>NewUser01</p>
                            </div>
                            <button className="infoBtn"><FaEye /></button>
                        </li>
                    </ul>
                    <ul>
                        <h4>Interesses recentes</h4>
                        <li>
                        <div className="fotoNome">
                                <FaStar />
                                <p>GTA VI</p>
                            </div>
                            <button className="infoBtn"><FaEye /></button>
                        </li>
                        <li>
                        <div className="fotoNome">
                                <FaStar />
                                <p>GTA VI</p>
                            </div>
                            <button className="infoBtn"><FaEye /></button>
                        </li>
                        <li>
                        <div className="fotoNome">
                                <FaStar />
                                <p>GTA VI</p>
                            </div>
                            <button className="infoBtn"><FaEye /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Novidades;