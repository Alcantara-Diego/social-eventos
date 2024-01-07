import './style/feed.scss'

function feed(){
    return(
        <main>
            <div className="cardContainer">
                <div className="post">
                    <div className="capa"></div>
                    <div className="conteudo">
                        <header>
                            <h3 className="titulo">Cena 2k23</h3>
                            <h6 className="subtitulo">Festival músical</h6>
                        </header>

                        <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dicta cupiditate, quibusdam maiores ipsa sit at fugit! Soluta nulla dicta ea expedita fugiat, in a explicabo quos. Voluptates, hic! Enim?</p>

                        <div className="interacao">
                            <p className="confirmadosNumero">15 pessoas confirmadas</p>
                            <div className="btnDiv">
                                <button className="confirmarPresencaBtn">Confirmar!</button>
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