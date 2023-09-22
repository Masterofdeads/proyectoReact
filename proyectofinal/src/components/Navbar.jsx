import CartWindget from "./CartWindget";
import Boton from "./Boton"
import "../components/Navbar.css"
const Navbar = () =>{
    return (
    <header>
        <navbar className="navbar">
            <img className="logo" src="..\src\assets\ofh8raa4h6jjtd05pbvdbv1v97.png" />
            <Boton text = {"Zapatillas"}/>
         <Boton text = {"Indumentaria"}/>
            <Boton text = {"Accesorios"}/>
            <CartWindget cont="{1}"/>
        </navbar>
    </header>
    )
}
export default Navbar