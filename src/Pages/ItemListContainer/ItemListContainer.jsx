import Item from "../../Components/Main/Item";
import { dataBase } from "../../Components/Firebase/Firebase"
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Main/Spinner";



const ItemListContainer = () => {

    const { categoryName } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const productCollection = collection(dataBase, "products");


    const getProducts = () => {
        getDocs(productCollection).then(result => {
            const list = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setCategoryProducts(list.filter(item => item.category === categoryName))
            setLoading(false)
        })
    }

    useEffect(() => {
        
        setLoading(!loading)
        setTimeout(() => {
            getProducts()
            console.log("in loop")
            setLoading(!loading)
            
        }, 1000)
        console.log(categoryProducts)
    }, [categoryName])

    
    return (
        <main className="flex flex-col items-center p-5 gap-20 min-h-[50vh] mb-10">
            <div>
                <h1 className=" text-3xl font-bold">{categoryName}</h1>
            </div>
            {loading ? <Spinner />
            :
            <div className=" flex justify-center gap-10 flex-wrap w-full">
                {categoryProducts.map(item => <Item key={item.name} id={item.id} image={item.image} price={item.price} name={item.name} />)}
            </div>
            }

        </main>
    );
}

export default ItemListContainer;