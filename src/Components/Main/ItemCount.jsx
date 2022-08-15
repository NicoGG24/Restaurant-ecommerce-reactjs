import { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircle } from "react-icons/md"
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ItemCount = (props) => {
    const [amount, setAmount] = useState(1);

    const addBtn = () =>{
        (amount <= props.stock - 1) ? setAmount(prevCount => prevCount + 1) : swal("Can't add more", "Order has to be below 10.", "error");
    }

    const removeBtn = () =>{
        (amount>1) ? setAmount(prevCount => prevCount - 1 ) : swal("Reached the minimum", "The minimum order is 1", "error");
    }

    const addToCart = () => {
        props.onAdd(Number(amount))  
    }

    return(
                <div className="flex flex-col items-center">
                    <div className="flex items-center pl-10 pr-10 pt-5 pb-5 gap-3">
                        <MdRemoveCircle className="cursor-pointer" onClick={removeBtn} />
                        <div className="select-none">{amount}</div>
                        <MdAddCircleOutline className="cursor-pointer" onClick={addBtn} />
                        <div>{props.cartAmount}</div>
                    </div>
                    <Link className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                    hover:bg-black select-none" onClick={addToCart} to="/Cart">ADD TO CART</Link>         
                </div> 
    );
};

export default ItemCount;