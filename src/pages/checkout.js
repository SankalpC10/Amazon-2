import Header from "../components/Header";
import React from 'react'
import Image from "next/image";
import { selectItems, selecttotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/checkoutProduct";
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/client";

export default function Checkout() {
    const items= useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selecttotal);
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className="lg:flex flex-col max-w-screen-xl mx-auto">
                {/*Left*/}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1800}
                        height={500}
                        objectFit='contain'
                     />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? "Your Amazon Basket is empty" : "Shopping Basket" }</h1>
                    {items.map((item,i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                         />
                    ))}
                </div>
                </div>
                {/*Right*/}
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length}):
                            <span className='font-bold'>
                                <Currency quantity={total} currency='INR' />
                            </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${
                                !session && 
                                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
