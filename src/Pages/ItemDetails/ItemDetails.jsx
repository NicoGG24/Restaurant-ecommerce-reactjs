import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/Main/ItemDetail";
import { dataBase } from "../../Components/Firebase/Firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemDetails = () => {

    const [details, setDetails] = useState([]);
    const { itemId } = useParams();


    useEffect(() => {
        const productCollection = collection(dataBase, "products");
        getDocs(productCollection).then(result => {
            const list = result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data() 
                }
            })
            setDetails(list.find(item => item.id == itemId))
        })
  

    }, [itemId])


    return(
        <>
            <ItemDetail details={details} />
        </>
    );
}

export default ItemDetails;