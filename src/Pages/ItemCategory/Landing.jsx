import Category from "../../Components/Main/Category";
import { dataBase } from "../../Components/Firebase/Firebase"
import { getDoc, collection, quey, where, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const Landing = () => {

    const [products, setProducts] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])

    const categories = [
        {name: "Burgers", src: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/bf43e5dd96a55248805820621bc0b8bb822165c4-1333x1333.png?w=750&q=40&fit=max&auto=format"},
        {name: "Chicken", src: "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20PDP/_0000s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png"},
        {name: "Drinks", src: "https://www.cfacdn.com/img/order/menu/Online/Drinks/tea_pdp.png"},
        {name: "Sides", src: "https://www.cfacdn.com/img/order/COM/Menu_Refresh/Sides/Sides%20PDP/_0000s_0010_%5BFeed%5D_0003s_0002_Sides_Fruit-Cup.png"}
    ];
    const productCollection = collection(dataBase, "products")

    useEffect(()=> {
        
        getDocs(productCollection).then(result => {
            const list = result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProducts(list)
        })

    }, [])

    return(
        <main className="flex flex-col items-center p-5 gap-20 min-h-[50vh] mb-10">
            <div>
                <h1 className=" text-3xl font-bold">Categories</h1>
            </div>
            <div className=" flex justify-center gap-10 flex-wrap w-full">
                {categories.map(cat => <Category key={cat.name} cat={cat.name} src={cat.src} />)}
            </div>
        </main>
    );
}

export default Landing;