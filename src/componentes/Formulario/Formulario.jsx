import { useState } from "react"; 
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Formulario.css";

const Formulario = () => {
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [telefono, setTelefono] = useState("");
    
    const manejadorFormulario = (e) => {
        e.preventDefault(); 

        addDoc(collection(db, "usuarios"), {
            nombre:nombre, 
            apellido: apellido, 
            telefono: telefono
        })

        setNombre("");
        setApellido("");
        setTelefono(""); 

    }

  return (
    <form onSubmit={manejadorFormulario} className="formulario">
        <h2>Formulario de Clientes</h2>
        <h3>Ingresá tus datos</h3>
        <label htmlFor=""> Nombre </label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        <br /><br />

        <label htmlFor=""> Apellido </label>
        <input type="text" onChange={(e) => setApellido(e.target.value) } value={apellido} />
        <br /><br />

        <label htmlFor=""> Celular </label>
        <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
        <br /><br />

        <button type="submit"> Enviar </button>
    </form>
  )
}

export default Formulario