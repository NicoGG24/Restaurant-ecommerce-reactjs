import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { cartContext } from "../../Context/CartContext"


const ItemDetail = ({ details }) => {
    
    const [addedAmount, setAddedAmount] = useState(0);
    const { addItem } = useContext(cartContext);


    const onAdd = (a) => {
        setAddedAmount(prevCount => prevCount + a);
        const newCartProduct = {...details, quantity: a }
        addItem(newCartProduct)
    }


    return (
        <div className="box-border flex flex-col justify-center items-center m-4 gap-8 select-none
        sm:flex-row sm:max-w-none sm:p-12">
            <figure>
                <img src={details.image} alt={details.name} className=" w-80 h-80 max-w-none
               lg:w-[500px] lg:h-[500px]"/>
            </figure>
            <div className="flex flex-col justify-around sm:min-h-[320px] lg:min-h-[400px]">
                <h2 className="font-bold text-lg text-center sm:text-start">{details.name}</h2>

                <div>
                    <h3 className="font-bold text-center sm:text-start">DESCRIPTION</h3>
                    <p className="text-center sm:text-start">{details.description}</p>
                </div>

                <div className="gap-6 sm:flex sm:items-center sm:justify-start sm-pt-6 sm-pb-6">
                    <h3 className="text-center pt-4 sm:text-start font-bold">Amount:</h3>
                    <ItemCount onAdd={onAdd} stock={9} />
                    <div className="flex flex-col items-center sm:justify-start">
                        <span className=" text-red-600 font-extrabold text-lg ">${details.price}</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ItemDetail;