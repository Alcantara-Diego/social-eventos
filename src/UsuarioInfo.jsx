import "./style/usuarioInfo.scss"
import { BsPersonCircle } from "react-icons/bs";
function UsuarioInfo(){
    return (
        <div id="telaUsuarioInfo">
            <div className="usuarioInfoPrincipal">
                <BsPersonCircle></BsPersonCircle>
                <p>Nome de usuário</p>
            </div>

            <div className="dados">
                <p>Seguidores: <strong>5</strong></p>
                <p>Seguindo: <strong>5</strong></p>
                
                <p>Eventos interessados: <strong>5</strong></p>

                <p>Eventos criados: <strong>5</strong></p>
            </div>
        </div>
    )
}

export default UsuarioInfo