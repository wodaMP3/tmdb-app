import { Link } from "react-router-dom"

const BackToHomeBtn = () => {
    return (
        <Link to='/'>
            <button className="backTo-btn">Home</button>
        </Link>
    )
}

export default BackToHomeBtn;