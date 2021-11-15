import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
export default function checkoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}){
    const dispatch = useDispatch();
    const product = {
        id,
        title,
        price,
        rating,
        description,
        category,
        image,
        hasPrime
    }    
    const addItemToBasket = () => {
        dispatch(addToBasket(product));
    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div  className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_,i) =>(
                            <StarIcon key={i} className='h-5 text-yellow-500 ' />
                        ))}
                </div>
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price*74.525} currency="INR" />
            {hasPrime &&(
                <div className="flex items-center space-x-2">
                <img loading='lazy' className="w-12" src="https://links.papareact.com/fdw" alt="" />
                <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                </div>
            )}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button mt-auto'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button mt-auto'>Remove from Basket</button>
            </div>
            
        </div>
    )
}