import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from './ProductItem'
import './Home.css'
import ShoppingCart from './ShoppingCart'

const Home = ({ products, addToCart }) => (

  <div>
    <div className="title">Welcome to Shopping Mall</div>
    <div className="products">
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)} />
      )}
    </div>
    <div className="cart">
        <ShoppingCart />
      </div>
  </div>

)

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(Home)
