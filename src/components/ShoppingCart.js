import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const ShoppingCart = ({ products, total, checkout }) => {


  const cart = useSelector(state => {
    console.log("Inside useSelector")
    return state.cart
  })
  console.log("shopping   ")
  return (<Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
  )
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(ShoppingCart)
