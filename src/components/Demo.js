import './Demo.css'

function Demo() {
    return (
        <div className="header">
            <label >My Shop</label>
            <span className='align'>
            <a href="Home" link="/">Home </a> |
            <a href="Cart" link="/cart">Go to Cart</a> |
            <a href="Logout" link="/logout">Logout</a> |
            </span>      
        </div>
    )
}

export default Demo