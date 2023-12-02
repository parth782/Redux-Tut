import {connect} from "react-redux";
import Home from "../components/Home";
import {addToCart, removeToCart} from "../Services/Actions/action";
const mapStateToProps=state=>({
    cardData:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeCartHandler:data=>dispatch(removeToCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
