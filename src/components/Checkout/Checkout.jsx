import { useState, useContext } from "react";
import CartElements from "../CartContent/CartElements";
import { db } from "../../service/config"
import { collection, addDoc } from "firebase/firestore";



 const Checkout = () => {
     const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

     const [nombre, setNombre] = useState("");
     const [apellido, setApellido] = useState("");
     const [telefono, setTelefono] = useState("");
     const [email, setEmail] = useState("");
     const [emailConfirmacion, setEmailConfirmacion] = useState("");
     const [ordenId, setOrdenId] = useState("");
     const [error, setError] = useState("");


     const manejadorSubmit = (event) => {
         event.preventDefault();


         if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
             setError(e);
             return;
         }


         if (email !== emailConfirmacion) {
             setError("Los emails no coinciden");
             return;
         }


         const orden = {
             items: carrito.map(producto => ({
                 id: producto.item.id,
                 nombre: producto.item.nombre,
                 cantidad: producto.cantidad
             })),
             total: total,
             fecha: new Date(),
             nombre,
             apellido,
             telefono,
             email
         }

  
         addDoc(collection(db, "ordenes"), orden)
             .then(docRef => {
                 setOrdenId(docRef.id);
                 setNombre("");
                 setApellido("");
                 setTelefono("");
                 setEmail("");
                 setEmailConfirmacion("");

                 Swal.fire({
                     title: "¡Orden generada exitosamente!",
                     text: `Tu número de orden es: ${docRef.id}`,
                     icon: "success",
                    
                 });
             })
             .catch(error => {
                 console.log("Error al crear la orden compra", error);
                 setError("No se pudo crear la orden, revisa tu codigo maldito");
             })
     }

     return (
         <div>
             <h2>Checkout - Finalizamos la Compra </h2>

             <form onSubmit={manejadorSubmit}>
                 {
                     carrito.map(producto => (
                         <div key={producto.item.id}>
                             <p> {producto.item.nombre} x {producto.cantidad} </p>
                             <p> {producto.item.precio} </p>
                             <hr />
                         </div>
                     ))
                 }

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

                 {
                     error && <p style={{ color: "red" }}> {error} </p>
                 }

                 <div className="botones">
                     <button className="miBtn checkout" disabled={carrito.length === 0}> Finalizar Orden </button>
                     <button className="miBtn checkout" type="reset"> Borrar </button>
                 </div>

             </form>
         </div>
     )
 }

 export default Checkout