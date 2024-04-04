import React, { useEffect, useState } from "react";
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow (false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="./redflix-logo.png"
            alt="Redflix logo"
            />
            <img className="nav__avatar"
            src="./redflix-avatar.png"
            alt="Redflix logo"
            />
        </div>
    )
}

export default Nav;