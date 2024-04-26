import { Link } from "react-router-dom"

const BackToHomeBtn = () => {
    return (
        <div>
            <Link to='/'>
                <button className="backTo-btn">Home</button>
            </Link>
        </div>
    )
}

export default BackToHomeBtn;