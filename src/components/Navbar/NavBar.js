import CartWidget from "../CartWidget/CartWidget";
import './nav.css'


const NavBar = () => {
    return(
        <nav>
            <h3>Ecomerce</h3>
            <CartWidget />
            <div class="botonesitems" >
                <button class="button is-dark">Celulares</button>
                <button class="button is-dark">Tablets</button>
                <button class="button is-dark">Notebooks</button>
            </div>
            
        </nav>
    )
}
export default NavBar