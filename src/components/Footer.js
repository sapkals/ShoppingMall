import './Footer.css'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
function Footer() {
    return (
        <div className="footer">
            <a href="Home" link="/">Home</a> |
            <a href="Terms And Conditions">Terms And Conditions</a> |
            <a href="Privacy Policy">Privacy Policy</a> |
            <a href="Collection Statement">Collection Statement</a> |
            <a href="Help">Help</a> |
            <a href="Manage Acoount">Manage Account</a> | <br />
            <p>Copyright © All Right Reserved </p><br />
            <a href="https://www.facebook.com/">
                <img className='image' src={facebook} alt="facebook" />
            </a>

            <a href="https://www.twitter.com/">
                <img className='image' src={twitter} alt="twitter" />
            </a>


            <a href="https://www.instagram.com/">
                <img className='image' src={instagram} alt="instagram" />
            </a>

        </div>
    )
}

export default Footer