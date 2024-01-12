import './style/nav.scss'
import { FaLocationArrow } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

function Nav() {
    return (
        <nav>
            <h1 className="logo"><FaLocationArrow />SOCIAL-EVENTOS 
</h1>
            <div>login<IoPersonSharp />
</div>
        </nav>
    )
}

export default Nav;