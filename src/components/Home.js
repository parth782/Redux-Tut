import React from "react";
import Header from "./Header";

const Home=(props)=>{
    console.log("home",props);
    return(
        <div>
          
            <h1>This is Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.digitaltrends.com/wp-content/uploads/2023/07/printing-from-android-printing-from-webpage-1.jpg?fit=1480%2C2740&p=1">

                    </img>
                </div>
                <div className="text-wrapper item">
                  <span>Iphone</span>
                  <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                 <button onClick={()=>{
                    props.addToCartHandler({price:1000,name:"Iphone 11"})
                 }}>Add to Cart</button>
                </div>
                <div className="btn-wrapper item">
                 <button onClick={()=>{
                    props.removeCartHandler()
                 }}>Remove from Cart</button>
                </div>

            </div>
        </div>
    )
}
export default Home;