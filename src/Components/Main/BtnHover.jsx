import { NavLink } from "react-router-dom";

const BtnHover = (props) => {
    return (
        <NavLink to={`/category/${props.cat}`} className="absolute bottom-[20%] px-8 py-4 rounded-lg bg-red-700 bg-opacity-90 hover:bg-black text-2xl text-white font-bold">
            {props.cat}
        </NavLink>
    );
}

export default BtnHover;