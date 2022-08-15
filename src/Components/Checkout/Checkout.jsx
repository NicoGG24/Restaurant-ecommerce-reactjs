import { cartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../../Components/Firebase/Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import swal from "sweetalert"

const Checkout = () => {

    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputDetails, setInputDetails] = useState();
    const [inputTable, setInputTable] = useState();
    const navigate = useNavigate();

    const { totalPrice, cartProducts, orderCompleted, orderState, changeOrderId, orderId, clearCart } = useContext(cartContext);


    const changeName = (e) => {
        const name = e.target.value;
        setInputName(name);
    }
    const changeEmail = (e) => {
        const email = e.target.value;
        setInputEmail(email);
    }
    const changeDetails = (e) => {
        const details = e.target.value;
        setInputDetails(details);
    }
    const changeTable = (e) => {
        const table = e.target.value;
        setInputTable(table);
    }


    const order = () => {
        const salesCollection = collection(dataBase, "sales");
        addDoc(salesCollection, {
            buyer: [{ name: inputName, email: inputEmail }],
            table: inputTable,
            details: inputDetails,
            products: [...cartProducts],
            date: serverTimestamp(),
            totalPrice: totalPrice,
        }) .then(swal("Thanks for your order!", "You'll receive an email notification with the order ID", "success"))
            .then(result => {
                changeOrderId(result.id)
            })
            .then(orderState())
            .then(setTimeout(() => {
                clearCart()
                navigate("/")
            }, 15000))
    }




    return (
        <div className="flex flex-col pl-12 pr-12 pt-5 min-h-[50vh] mb-10">

            <h2 className=" text-5xl font-bold text-gray-600 pt-12">CHECKOUT</h2>

            

            {orderCompleted 
            ? <span className=" text-center text-red-700 text-3xl font-bold break-words"> Order ID: {orderId} </span> 
            :
            <form className=" rounded-3xl mt-5 font-bold  self-center flex flex-col gap-8" id="checkoutForm" action=""
                onSubmit={ev => {
                    ev.preventDefault();
                    order()
                }}>

                <div className="flex gap-8">
                    <label htmlFor="fullName" className=" w-[100px]">Full name:</label>
                    <input type="text" placeholder="fullname" name="fullName" id="fullName" className="border-2 border-black rounded-md" onChange={changeName} required />
                </div>
                <div className="flex gap-8">
                    <label htmlFor="email" className=" w-[100px]">Email:</label>
                    <input type="email" placeholder="email" name="email" id="email" className="border-2 border-black rounded-md" onChange={changeEmail} required />
                </div>
                <div className="flex gap-8">
                    <label htmlFor="details" className=" w-[100px]">Details:</label>
                    <textarea name="details" id="details" placeholder="More details / none" cols="20" rows="3" className="border-2 border-black rounded-md" onChange={changeDetails} required></textarea>
                </div>
                <div className="flex gap-8">
                    <label htmlFor="tableNumber" className=" w-[100px]">Table Number</label>
                    <input type="number" id="tableNumber" name="tableNumber" min="1" max="15" className="border-2 border-black rounded-md" placeholder="1-15" onChange={changeTable} />
                </div>
                <button className=" border-black border-2 text-lg bg-red-500 font-bold " type="submit" form="checkoutForm" value="Submit">Confirm Order</button>

            </form>}
        </div>
    );
}


export default Checkout;