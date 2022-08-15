import { useContext } from "react";
import { BiDish } from "react-icons/bi";
import { NavLink } from "react-router-dom"
import { cartContext } from "../../Context/CartContext";

const CartWidget = () => {

    const { cartAmount } = useContext(cartContext)

    return (
        <div className=" relative h-fit flex flex-col items-center">
            <NavLink className=" max-h-fit" to={"/cart"}><BiDish size={30} /></NavLink>
            <span className=" text-white font-bold w-fit absolute bottom-0 right-0 pointer-events-none select-none">{cartAmount}</span>
        </div>
    );
}

export default CartWidget;