import React from "react";
import { useGetItemsQuery } from "../../redux";
import PickedItem from "../PickedItem/PickedItem.jsx"
import basketS from "./basket.module.css"

const Basket = () => {

    const {data = [], isLoading} = useGetItemsQuery()

    const reserved = data.filter(item => item.status === "in-puchase")

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h2 className={basketS.title}>Моя корзина</h2>
            <div className={basketS.basketRow}>
            {reserved.map(item =>  (
                    <PickedItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}
export default Basket