import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Deli-Pick</p>
          <p className="items">pic</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Discard</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <p>{item.name}</p>
                  <img src={item.image} alt="" />
                  <p>Ksh. {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Ksh. {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <span>KSH. {getTotalCartAmount()===0?0:getTotalCartAmount() + 50}</span>
            </b>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>

        <div className="cart-promocode">
          <p>Have a promo code? Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
