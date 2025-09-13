import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';
import { CartProvider,useCart} from 'react-use-cart';


function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    emptyCart,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) 
    return (<h4 className='text-center'>Your cart is empty</h4>);

  return (
    <>
      <h1 className='text-center'>Cart ({totalUniqueItems})
        <button className='btn btn-danger' onClick={()=>emptyCart()}>empty all data</button>
      </h1>

        <div className='container'>
            <div className='row'>
                <div className='col-md-10 m-auto'>
                    <table className='table table-dark text-center'>

                        <thead>
                            <tr>
                                <th>image</th>
                                <th>id</th>
                                <th>name</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th>operation</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((response) =>{
                                return(
                                    <tr>
                                        <td>
                                            <img src={response.images[0]} alt="j" style={{width:"70px"}} />
                                        </td>
                                        <td>{response.id}</td>
                                        <td>{response.title}</td>
                                        <td>{response.quantity}</td>
                                        <td>{ Math.ceil(response.price*response.quantity)}</td>
                                        <td>
                                            <button className=' btn btn-warning' onClick={()=> updateItemQuantity(response.id,response.quantity-1)}>-</button>

                                            <button className=' btn btn-success mx-3' onClick={()=> updateItemQuantity(response.id,response.quantity+1)}>+</button>

                                            <button className='btn btn-danger' onClick={()=> removeItem(response.id)}>&times;</button>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td></td>
                                <td>{totalItems}</td>
                                <td>{Math.ceil(cartTotal)}</td>
                                <td>
                                    <Link to='/shop' className='btn btn-primary'>continue shoping</Link>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>

    </>
  );
}

function AllCart() {
  return (
    <CartProvider>
        <Navbar/>
        <br />
        <br />
        <br />
        <Cart/>
    </CartProvider>
  )
}

export default AllCart