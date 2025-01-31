import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    const onlinStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="logo-container">
                <img className="w-30" src = { LOGO_URL }/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-3 m-3">
                    <li className="px-3">Online Status: {onlinStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact</Link></li>
                    <li className="px-3">Cart</li>
                    <button className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login")
                        }}>
                            {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;