import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";



const Cart = () => {

    const { clearCart, removeItem, cartProducts, totalPrice } = useContext(cartContext);



    return (
        <div className="flex flex-col pl-12 pr-12 pt-5 min-h-[50vh] mb-10">



            <h2 className=" text-5xl font-bold text-gray-600 pt-12">CART</h2>
            {cartProducts.map(item => {
                return (
                    <div key={item.id} className=" flex  gap-2 font-bold justify-around mt-5
                     sm:flex-row sm:w-[70%] sm:self-center ">
                        <img src={item.image} alt={item.name} className=" max-w-[100px]" />
                        <span className=" flex items-center w-[200px]">{item.name}</span>
                        <span className="text-red-600 min-w-[100px] text-start flex items-center">{item.quantity} x ${item.price}</span>

                        <div className=" flex ml-0 items-center sm:justify-end">
                            <RiDeleteBack2Fill className=" hover:cursor-pointer " onClick={() => removeItem(item.name)} />
                        </div>
                    </div>
                )
            })}

            {cartProducts.length < 1 ? <Link className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                 w-fit self-center mt-20 hover:bg-black select-none"  to="/">GO TO STORE</Link> : <>
                <div className=" flex flex-col items-center gap-12  sm:max-w-[50%] self-center mt-20">

                    <span className="font-bold text-xl text-red-600 self-center">TOTAL: $  {totalPrice}</span>
                    <button onClick={clearCart} className="bg-black text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                 w-fit  hover:bg-black select-none
                 ">CLEAR</button>
                    <div className="flex flex-col gap-4 
                     sm:flex-row sm:justify-around ">
                        <Link to={"/"} className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer text-xl
                 w-fit self-center select-none"  >BACK TO STORE</Link>
                        <Link to={"/checkout"} className="bg-black text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer text-xl
                 w-fit self-center select-none"  >PLACE ORDER</Link>
                    </div>

                </div>
            </>}

        </div>
    );
};

export default Cart