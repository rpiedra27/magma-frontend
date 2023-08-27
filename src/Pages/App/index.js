import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactenos from "../Contactenos";
import Home from "../Home";
import Login from "../Login";
import SobreNosotros from "../SobreNosotros";
import Acompanamientos from "../Acompanamientos";
import Navbar from "../../Components/NavBar";
import CrearCuenta from "../CrearCuenta";
import Carrito from "../Carrito";
import OrdenRecibida from "../OrdenRecibida";
import Postres from "../Postres";
import Promos from "../Promos";
import ConfirmarOrden from "../ConfirmarOrden";
import CreaTuPizza from "../CreaTuPizza";
import Pizzas from "../Pizzas";
import Bebidas from "../Bebidas";
import RecuperarContrasena from "../RecuperarContrasena";
import ContrasenaNueva from "../ContrasenaNueva";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/CrearCuenta" element={<CrearCuenta />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/OrdenRecibida" element={<OrdenRecibida />} />
          <Route path="/Pizzas" element={<Pizzas />} />
          <Route path="/Bebidas" element={<Bebidas />} />
          <Route path="/Acompanamientos" element={<Acompanamientos />} />
          <Route path="/Postres" element={<Postres />} />
          <Route path="/Promos" element={<Promos />} />
          <Route path="/ConfirmarOrden" element={<ConfirmarOrden />} />
          <Route path="/CreaTuPizza" element={<CreaTuPizza />} />
          <Route path="/RecuperarContrasena" element={<RecuperarContrasena />} />
          <Route path="/ContrasenaNueva" element={<ContrasenaNueva />} />
        </Routes>
    </BrowserRouter>
  );
}