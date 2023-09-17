import cart from './assets/cart.png';

const cartwidget = () => {
    return (
    <div>
        <img src={cart} alt="cart-widget"/>
        <button> - </button>0<button> + </button>
    </div>

    )
}
export default cartwidget