import { Link } from "react-router-dom";



const Item = (props) => {
    return (

        <div className=" box-border relative flex flex-col items-center max-w-[425px] border-solid border-2 border-gray-200 
        hover:border-black rounded-[20%] duration-500">
            <img src={props.image} alt={props.name} />
            <Link className=" hover:bg-black bg-red-700 px-4 py-2 bg-opacity-90 text-xl text-white font-bold" to={`/item/${props.id}`}>DETAILS</Link>
            <div className="flex flex-col items center">
                <span className="font-bold text-lg">{props.name}</span>
                <span className="text-red-600 font-bold text-lg text-center">$ {props.price}</span>
            </div>
        </div>

    )
}



export default Item;