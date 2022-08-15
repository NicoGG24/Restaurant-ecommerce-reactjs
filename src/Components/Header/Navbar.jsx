import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const Navbar = () => {

    return(
        <header className="p-5 bg-red-700  flex flex-col gap-10">
            <div className=" flex flex-col justify-between items-center gap-3
            sm:flex-row">
                <NavLink to={"/"}><Logo /></NavLink>
                <CartWidget /> 
            </div>
            <nav>
                <ul className=" flex flex-col items-center justify-around text-white text-2xl gap-2
                sm:flex-row sm:justify-center sm:gap-20">
                    <li><NavLink to={"/category/Burgers"}>Burgers</NavLink></li>
                    <li><NavLink to={"/category/Chicken"}>Chicken</NavLink></li>
                    <li><NavLink to={"/category/Drinks"}>Drinks</NavLink></li>
                    <li><NavLink to={"/category/Sides"}>Sides</NavLink></li>                    
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;