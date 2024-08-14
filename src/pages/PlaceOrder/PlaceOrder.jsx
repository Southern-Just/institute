import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PLaceOrder = () => {

  const {getTotalCartAmount}= useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        {
          <div className="multi-field">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
        }
        {
          <div className="multi-field">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
        }
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>KSH. {getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>KSH. {getTotalCartAmount()===0?0:50}</p>
          </div>
          <div className="cart-total-details">
            <b>Total </b>
            <b>
              <span>
                KSH.{" "}
                {getTotalCartAmount() + getTotalCartAmount() === 0?0:50}
              </span>
            </b>
          </div>
          <button>Proceed to payment</button>
        </div>
      </div>
    </form>
  );
}

export default PLaceOrder
