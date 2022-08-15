import { useState } from "react";
import BtnHover from "./BtnHover";


const Category = (props) => {
    return (

        <div className=" box-border relative flex flex-col items-center max-w-[425px] border-solid border-2 border-gray-200 shadow-xl
        hover:border-black hover:translate-y-[-2rem] rounded-[20%] duration-500">
            <img src={props.src} alt={"Burgers"} />
            <BtnHover cat={props.cat} />
        </div>

    );
}

export default Category;