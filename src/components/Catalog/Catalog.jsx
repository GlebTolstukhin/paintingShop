import React from "react";
import catalogS from "./catalog.module.css"
import PictureItem from "../PictureItem/PictureItem";
import { useGetItemsQuery } from "../../redux";
import { useSelector } from "react-redux";


const Catalog = () => {

    const {data = [], isLoading} = useGetItemsQuery()
    
    const filter = useSelector(state => state.filter.filter)
    
    
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    console.log(data)

    return (
        <div>
            <h1 className={catalogS.title}>Картины эпохи возраждения</h1>
            <div className={catalogS.picturesGrid}>
                {data.filter(item => item.paintingName.toLowerCase().includes(filter.toLowerCase()) ||
                 item.authorFullName.toLowerCase().includes(filter.toLowerCase())).map(item =>  (
                    <PictureItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}
export default Catalog