import React, { useState } from "react";
import pictureS from "./pikedItem.module.css"
import { useToBasketMutation } from "../../redux";
import theBirthOfVenus from "../../Paintings/theBirthOfVenus.png"
import anatomyLesson from "../../Paintings/anatomyLesson.png"
import creationOfAdam from "../../Paintings/CreationOfAdam.png"
import theLustSupper from "../../Paintings/theLustSupper.png"
import neuschwansteinCastle from "../../Paintings/neuschwansteinCastle.png"
import noPicture from "../../Paintings/noPicture.png"

const PickedItem = ({item}) => {

    
    const { paintingName, authorFullName, price, discount, id} = item
    
    const [toBasket] = useToBasketMutation() 

    const [invisiable, setInvisiable] = useState(false)
     
    const removeFromBasket = async () => {
      
        try {
            await toBasket({id, body: "available"}).unwrap()
            setInvisiable(true)
        } catch (error) {
            

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
        <div className={pictureS.wrapper} style={{display: invisiable ? "none" : "block" }}>
            <div className={pictureS.painting}>
                <img className={pictureS.painting} src={picture} alt="" />
            </div>
            <div className={pictureS.info}>
                <div className={pictureS.paintingName}>«{paintingName}»</div>
                <div className={pictureS.paintingAuthor}>{authorFullName}</div>
            </div>
                    {discount !== null ? 
                            <div className={pictureS.buyRow}>
                                <div className={pictureS.buyFlex}>
                                    <div className={pictureS.fullPrice}>{price.value} $</div>
                                    <div className={pictureS.price}>{price.value * discount} $</div>
                                </div> 
                                <button onClick={removeFromBasket} className={pictureS.buyButtonInBasket }>Убрать из корзины</button>
                            </div>
                            : 
                            <div className={pictureS.buyRow}>
                                <div className={pictureS.buyFlex}>
                                    <div className={pictureS.price}>{price.value} $</div>
                                </div> 
                                <button onClick={removeFromBasket} className={pictureS.buyButtonInBasket }>Убрать из корзины</button>
                            </div>
                }       
        </div>
    )
}
export default PickedItem