const Spinner = () => {
    return(
        <div className="felx flex-col items-center">
            <div className="border-[10px] border-solid border-t-red-600 rounded-[50%] w-[80px] h-[80px] animate-spin "></div>
            <div className="flex justify-center mt-3"><p className=" font-bold">LOADING.....</p></div>
        </div>
    );
};


export default Spinner;