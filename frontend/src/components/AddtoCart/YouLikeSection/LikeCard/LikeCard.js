import React,{useState} from 'react'
import CSS from './LikeCard.module.css'

const LikeCard = ({item}) => {
    const [dilIcon, setDilIcon] = useState(false);

    const handleDilIcon = () => {
      setDilIcon(!dilIcon);
    };
  return (
    <div className={CSS['like-card']}>
        <div className={CSS['img-card']}>
            <img className={CSS['img']} src={item.img}  alt={item.img}/>
        </div>
        <div>
            <div className={CSS['like-card-details']}>
                <p className={CSS['like-card-title']}>{item.title}</p>
                <i onClick={handleDilIcon} className={`${CSS['like-card-icon']} ${dilIcon ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}></i>
            </div>
            <p className={CSS['like-card-price']}>Rs. {item.price}</p>
        </div>
    </div>
  )
}

export default LikeCard