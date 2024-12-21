
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './add-cart.css';
const Cart = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            price: 50,
            name: "hamada",
            count: 1
        }, {
            id: 2,
            price: 100,
            name: "hamada2",
            count: 1

        }

    ])

    const pluse = (pro) => {
        const newcart = cart.filter((item) => {
            if (item.id === pro.id) {
                item.count++
            }
            return item

        })
        setCart(newcart)
        // console.log(cart);

    }
    return (
        cart.length > 0 ? <div>

            <div className="cart-container">
                <div className="cart-header">
                    <div>S.N</div>
                    <div>Product</div>
                    <div>Unit Price</div>
                    <div>Quantity Total</div>
                    <div>Total Price</div>
                    <div>Actions</div>
                </div>
                {cart.map((item) => (

                    <div className="cart-item" key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>
                            <div className="quantity-control">
                                <button>-</button>
                                <input type="number" value={item.count} readOnly style={{ width: "40px", textAlign: "center" }} />
                                <button onClick={() => pluse(item)}>+</button>
                            </div>
                        </div>
                        <div>{item.price * item.count}</div>
                        <div className="actions">
                            <button className="delete">DELETE</button>
                        </div>
                    </div>

                ))}
                <div className="cart-summary">
                    <button className="clear" onClick={() => { setCart([]) }}>cleat</button>
                    <div className="total-price">{cart.reduce((a, d) => {
                        return a.count * a.price + d.count * d.price

                    })}</div>
                    <button className="checkout">CHECKOUT</button>
                </div>
            </div>
        </div> : <div style={{
            backgroundImage: `url('https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png')`,
            backgroundSize: "cover", // Adjusts the image to cover the entire div
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            height: "100vh", // Full screen height
            width: "100%", // Full screen width
            display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"
        }}  >

            <button><Link to="/"> go to home </Link></button>
        </div>
    )
}

export default Cart