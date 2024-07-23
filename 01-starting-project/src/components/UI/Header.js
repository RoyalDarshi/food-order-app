import React from "react";
import "./Header.css"
import "bootstrap/dist/css/bootstrap.css"

const Header=(props)=>{
    return(
        <div className={"navbar nav navBar p-4"}>
            <h3 className={"nav-item"}>ReactMeals</h3>
            <button className={"nav-item p-3 d-flex rounded-5"}>Your Cart
                <div className={"px-3 mx-2 rounded-5"}>
                    0
                </div>
            </button>
        </div>
    )
}

export default Header;