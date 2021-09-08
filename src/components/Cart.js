import React from 'react'
import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map((product, index) =>
      <tr key={index}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
      </tr>
    )
  ) : (
    <em>Cart is empty.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <table>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {nodes}
      </table>
      <p>Total: Rs. {total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
