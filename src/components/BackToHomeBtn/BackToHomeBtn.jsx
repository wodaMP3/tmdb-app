import { Link } from "react-router-dom";
import './BackToHomeBtn.css';

const BackToHomeBtn = () => {
    return (
        <div className="back-home">
            <Link to='/'>
                <button className="backTo-btn">Home</button>
            </Link>
        </div>
    )
}

export default BackToHomeBtn;