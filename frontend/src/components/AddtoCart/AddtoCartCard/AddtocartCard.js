import React, { useState, useEffect } from 'react'
import CSS from './AddtocartCard.module.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddtocartCard = () => {
    const [quantity, setQuantity] = useState(1);
    const [clickedItem, setClickedItem] = useState({});

    useEffect(() => {
        const storedItemDetails = sessionStorage.getItem('clickedItem');
        const parsedItemDetails = storedItemDetails ? JSON.parse(storedItemDetails) : null;
        setClickedItem(parsedItemDetails);
    }, []);

    const handleBuyClick = () => {
        const itemDetails = {
          productName: clickedItem.title,
          newPrice: clickedItem.newPrice,
          description: clickedItem.description,
          quantity: quantity,
          productImage: clickedItem.img,
        };
        sessionStorage.setItem("buyItem", JSON.stringify(itemDetails));
      };

    return (
        <div className={`${CSS['container']} container`}>
            <div className={CSS['grid-container']}>
                <div className={CSS['img-container']}>
                    <img className={CSS['img']} src={clickedItem.img} alt='rabbit' />
                </div>
                <div className={CSS['data-container']}>
                    <h2 className={CSS['addtocart-title']}>{clickedItem.title}</h2>
                    <h4 className={CSS['addtocart-new-price']}>Rs. {clickedItem.newPrice} <del className={CSS['addtocart-old-price']}>Rs. {clickedItem.oldPrice}</del></h4>
                    <p className={CSS['addtocart-details']}>{clickedItem.description}</p>
                    <p className={CSS['addtocart-reviews']}>Available quantity: {clickedItem.quantity}</p>
                    <div className={CSS['addtocart-quantity']}>
                        Qty: <input min={0} max={20} type='number' id='quantity' name='quantity' className={CSS['addtocart-qty-input']} placeholder='0' value={quantity} onChange={(e)=>setQuantity(e.target.value)} required />
                    </div>
                    <Link to={'/address'} className={CSS['addtocart-link']}>
                        <button type='button' onClick={handleBuyClick}  className={CSS['addtocart-link-btn']}>Buy now</button>
                    </Link>
                    <button type='submit' onClick={() => toast.success('Item Added to Cart')} className={CSS['addtocart-link-btn']}>Add to cart</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AddtocartCard