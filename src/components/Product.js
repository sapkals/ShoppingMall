import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <div>
    <h4>{title}</h4>
    <h5>Price: Rs. {price}</h5>
    <h5>Available Units: {quantity}</h5>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
