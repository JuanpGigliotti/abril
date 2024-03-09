import React, { useState, useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css"
const Checkout = () => {
    const { cart } = useContext(dataContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const calcularTotalCarrito = () => {
        return cart.reduce((acc, product) => acc + (product.precio * product.quanty), 0);
    };

    const manejadorSubmit = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Debe completar todos los datos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los emails deben coincidir");
            return;
        }
        const totalCarrito = calcularTotalCarrito();
        const orden = {
            items: cart.map(product => ({
                id: product.id,
                nombre: product.nombre,
                cantidad: product.quanty
            })),
            total: totalCarrito,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
            })
            .catch(error => {
                console.log("Error", error);
                setError("No fue posible finalizar la compra");
            });
    };

    return (
        <div className="checkbody">
                    <div className="checkout-container">
            <h2>RESUMEN DE COMPRA</h2>

            <form className="checkout-form" onSubmit={manejadorSubmit}>
                {cart.map(product => (
                    <div key={product.id} className="product-item">
                        <p> {product.nombre} x {product.quanty} </p>
                        <p> ${product.precio} </p>
                        <hr />
                    </div>
                    
                ))}

                <div className="form-group">
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" value={nombre} id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" value={apellido} id="apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="telefono"> Telefono </label>
                    <input type="text" value={telefono} id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="emailcon"> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                <div>
                <p>Total de la compra: ${calcularTotalCarrito()} </p>
                </div>

                {error && <p className="error-message">{error}</p>}

                <button className="checkout-button">Finalizar</button>

                {ordenId && <strong> Numero de orden {ordenId} </strong>}
            </form>
        </div>
        </div>
    );
};

export default Checkout;

