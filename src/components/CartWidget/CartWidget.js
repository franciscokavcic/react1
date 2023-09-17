import cart from './assets/cart.png';
import './cartw.css'

const cartwidget = () => {
    return (
        <div class="masrtcart">
    <div class="contentcart">
        <img src={cart} alt="cart-widget" class="imgcart"/>
        <div class="dvbotones"> 
        <button class="button is-ligth 2"> - </button> 
        <p>0</p> 
        <button class="button is-ligth 2"> + </button>
        </div>
       
    </div>
    </div>
    )
}
export default cartwidget