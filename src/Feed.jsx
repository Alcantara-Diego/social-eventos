import './style/feed.scss'
import { FaCalendar, FaLink} from 'react-icons/fa';
import { IoIosWarning } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";


import show1Foto from './assets/postsImg/show1.jpg'
import gta6Foto from './assets/postsImg/gta6.webp'
import travisFoto from './assets/postsImg/travisAlbum.avif'
import youtubeChallengeFoto from './assets/postsImg/youtubeChallenge.jpg'

function feed(){
    return(
        <main>
            
            <div className="postsContainer">


                <div className="post">
                    
                    <img src={show1Foto} alt="" className='capa'/>
                    <div className="conteudo">
                        <header>
                            <h3 className="titulo">Cena 2k</h3>
                            <h6 className="subtitulo">Festival musical</h6>

                            <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dicta cupiditate, quibusdam maiores ipsa sit at fugit! Soluta nulla dicta ea expedita fugiat, in a explicabo quos. Voluptates, hic! Enim?</p>

                            <div className='extra-info'>

                                <a href=""><FaLink/>Ingressos aqui</a>

                                <div><FaCalendar  /> 12/04/2024</div>

                                <div><IoIosWarning /> Maior de 16 anos</div>

                            </div>
                            

                        </header>

                        
                        <div className="interacao">
                            <p className="interessadosNumero"> <FaUsers />
                            15 pessoas interessadas</p>
                            <div className="btnDiv">
                                <button className="confirmarPresencaBtn">Tenho interesse!</button>
                                <button className="comentariosBtn">Comentarios</button>
                            </div>
                        </div>
                    </div>

                    
                </div>


                <div className="post">
                    
                    <img src={gta6Foto} alt="" className='capa'/>
                    <div className="conteudo">
                        <header>
                            <h3 className="titulo">GTA VI</h3>
                            <h6 className="subtitulo">Lançamento jogo eletrônico</h6>

                            <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dicta cupiditate, quibusdam maiores ipsa sit at fugit! Soluta nulla dicta ea expedita fugiat, in a explicabo quos. Voluptates, hic! Enim?</p>


                            <div className='extra-info'>

                                <a href="https://www.youtube.com/watch?v=QdBZY2fkU-0"
                                
                                rel="noreferrer"
                                target="_blank"  ><FaLink/>Trailer</a>

                                <div><FaCalendar  /> Lançamento 2025</div>

                                <div><IoGameController /> Playstation / Xbox / PC</div>

                            </div>

                        </header>

                        

                        <div className="interacao">
                            <p className="interessadosNumero"><FaUsers /> 
                            15 pessoas interessadas</p>
                            <div className="btnDiv">
                                <button className="confirmarPresencaBtn">Tenho interesse!</button>
                                <button className="comentariosBtn">Comentarios</button>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="post">
                    
                    <img src={travisFoto} alt="" className='capa'/>
                    <div className="conteudo">
                        <header>
                            <h3 className="titulo">Utopia</h3>
                            <h6 className="subtitulo">Album</h6>

                            <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dicta cupiditate, quibusdam maiores ipsa sit at fugit! Soluta nulla dicta ea expedita fugiat, in a explicabo quos. Voluptates, hic! Enim?</p>

                            <div className='extra-info'>

                                <a href=""><FaLink/>Ouvir no Spotify</a>

                                <div><FaCalendar  /> 28/07/2023</div>

                                <div><FaMicrophoneAlt /> Cactus Records</div>

                            </div>
                            

                        </header>

                        
                        <div className="interacao">
                            <p className="interessadosNumero"> <FaUsers />
                            15 pessoas interessadas</p>
                            <div className="btnDiv">
                                <button className="confirmarPresencaBtn">Tenho interesse!</button>
                                <button className="comentariosBtn">Comentarios</button>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="post">
                    
                    <img src={youtubeChallengeFoto} alt="" className='capa'/>
                    <div className="conteudo">
                        <header>
                            <h3 className="titulo">O grande reset</h3>
                            <h6 className="subtitulo">Videoaula</h6>

                            <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dicta cupiditate, quibusdam maiores ipsa sit at fugit! Soluta nulla dicta ea expedita fugiat, in a explicabo quos. Voluptates, hic! Enim?</p>

                            <div className='extra-info'>

                                <a href=""><FaLink/>Assista aqui</a>

                                <div><FaCalendar  /> 10/01/2024</div>

                                <div><MdAccessTimeFilled />3 dias de evento</div>

                            </div>
                            

                        </header>

                        
                        <div className="interacao">
                            <p className="interessadosNumero"> <FaUsers />
                            15 pessoas interessadas</p>
                            <div className="btnDiv">
                                <button className="confirmarPresencaBtn">Tenho interesse!</button>
                                <button className="comentariosBtn">Comentarios</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </main>
    )
}

export default feed;