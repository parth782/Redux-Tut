import React from "react";
const Header=(props)=>{
    console.warn("header",props);
    return (
        <div className="add-to-cart">
        <span className="cart-count">{props.cardData.length}</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlL07-M8RR01hyq6wy37gSDRix-EPZFafZ-qxKbs_9g&s"></img>
       </div>
    );

}
export default Header;
