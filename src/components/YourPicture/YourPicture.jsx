import React, { useState } from "react";
import yourPictureS from "./yourPicture.module.css"
import { useAddPaintingMutation } from "../../redux";

const YourPicture = () => {

    const [addPainting] = useAddPaintingMutation()

    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [price, setPrice] = useState("")

    const handleAddPainting = async () => {
        const newPainting = {
            type: "painting",
            paintingName: name,
            authorFullName: author,
            status: "available",
            price: {
                value: Number(price),
                currencyCode: "USD"
            },
            discount: null,
        }
        await addPainting(newPainting)
        setName("")
        setAuthor("")
        setPrice("")
    }

    return (
        <div>
            <h2>Выможете выставить свою картину на продажу в нашем магазине</h2>
            <div>Все, что вам нужно указать - это название картины, имя ее автора и желаемую цену. Остальное мы сделаем сами.</div>
            <h4>Данные вашей картины:</h4>
            <input className={yourPictureS.input} placeholder="Название картины" value={name} 
                onChange={(e) => setName(e.target.value)} type="text" />
            <input className={yourPictureS.input} placeholder="Имя художника" value={author} 
                onChange={(e) => setAuthor(e.target.value)} type="text" />
            <input className={yourPictureS.input} placeholder="Ваша цена" value={price} 
                onChange={(e) => setPrice(e.target.value)} type="number" />
            <button onClick={handleAddPainting} className={yourPictureS.button}>Предложить картину</button>
        </div>
    )
}

export default YourPicture