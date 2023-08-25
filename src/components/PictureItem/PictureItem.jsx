import React, { useEffect, useState } from "react";
import pictureS from "./pictureItem.module.css"
import { useToBasketMutation } from "../../redux";
import theBirthOfVenus from "../../Paintings/theBirthOfVenus.png"
import anatomyLesson from "../../Paintings/anatomyLesson.png"
import creationOfAdam from "../../Paintings/CreationOfAdam.png"
import theLustSupper from "../../Paintings/theLustSupper.png"
import neuschwansteinCastle from "../../Paintings/neuschwansteinCastle.png"
import noPicture from "../../Paintings/noPicture.png"


const PictureItem = ({item}) => {

    
    const { paintingName, authorFullName, price, status, discount, id} = item
    
    const [toBasket] = useToBasketMutation() 

    const [inBasket, setInBasket] = useState("Купить")

    useEffect(() => {
        if (status === "in-puchase") {
            setInBasket("В корзине")
        }
    }, [status])
     
    const setToBasket = async () => {

        setInBasket("Обновление")

        try {
            await toBasket({id, body: "in-puchase"}).unwrap()
            setInBasket("В корзине")

        } catch (error) {
            setInBasket("Ошибка")

        }
    } 
    let picture

    if (paintingName === "Рождение Венеры") {
        picture = theBirthOfVenus
    } else if (paintingName === "Сотворение Адама") {
        picture = creationOfAdam
    } else if (paintingName === "Урок анатомии") {
        picture = anatomyLesson
    } else if (paintingName === "Тайная вечеря") {
        picture = theLustSupper
    } else if (paintingName === "Замок Нойшванштайн") {
        picture = neuschwansteinCastle
    } else {
        picture = noPicture
    }
    

    return (
        <div className={status === "sold" ? pictureS.wrapperSold : pictureS.wrapper}>
            <div className={pictureS.painting}>
                <img className={pictureS.painting} src={picture} alt="" />
            </div>
            <div className={pictureS.info}>
                <div className={pictureS.paintingName}>«{paintingName}»</div>
                <div className={pictureS.paintingAuthor}>{authorFullName}</div>
            </div>
                {status === "sold" ? 
                    <div className={pictureS.sold}>Продано на аукционе</div> : 
                    discount !== null ? 
                            <div className={pictureS.buyRow}>
                                <div className={pictureS.buyFlex}>
                                    <div className={pictureS.fullPrice}>{price.value} $</div>
                                    <div className={pictureS.price}>{price.value * discount} $</div>
                                </div> 
                                <button onClick={setToBasket} className={inBasket === "Купить" ? pictureS.buyButton : pictureS.buyButtonInBasket }>{inBasket}</button>
                            </div>
                            : 
                            <div className={pictureS.buyRow}>
                                <div className={pictureS.buyFlex}>
                                    <div className={pictureS.price}>{price.value} $</div>
                                </div> 
                                <button onClick={setToBasket} className={inBasket === "Купить" ? pictureS.buyButton : pictureS.buyButtonInBasket }>{inBasket}</button>
                            </div>
                }       
        </div>
    )
}
export default PictureItem