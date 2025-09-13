import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import{apiValue} from '../Data/AllData'


import { CartProvider, useCart } from "react-use-cart";

// الكارت بروفيدر دا اللي بيظهر الكارت وبيخلي كل حاجة جواه تقدر تستخدم الكارت
// اليوز كارت دي اللي فيها كل الدوال الجاهزه 
//مثلا additem دي من ضمن الدوال دي

function Page() {
    const { addItem } = useCart();

    const products = useContext(apiValue);
    


    return (
    <div>
        <div className='container'>
            <div className='row'>
                {products.map((result) => (
                    <div className='col-md-4 text-center mb-5' key={result.id}>
                        <img src={result.images[0]} alt='mmm' className='w-100'/>'
                        <h5>{result.title}</h5>
                        <h5>{result.price}</h5>
                        <h6>{result.id}</h6>
                        <button className='btn btn-success' onClick={() => addItem(result)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
    );
}



function AllShop() {
    return (
    <CartProvider>
        <Navbar />
        <br/>
        <br/>
        <Page />
        
    </CartProvider>
    );
}

export default AllShop;