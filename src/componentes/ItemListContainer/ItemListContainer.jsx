import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import Formulario from "../formulario/Formulario";
import Footer from "../Footer/Footer";


// Objeto para mapear idCategoria a nombres de categorías
const nombresCategorias = {
  '1': 'Alimentos',
  '2': 'Perros',
  '3': 'Gatos',
  '4': 'Otros',
  '5': 'Juguetes',
  '6': 'Veterinarios',
};

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria 
      ? query(collection(db, "inventario"), where("idCat", "==", idCategoria))
      : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch(error => console.log("GRAVE ERROR!", error));
  }, [idCategoria]);

  const titulo = idCategoria ? nombresCategorias[idCategoria] : 'Todos los productos';

  return (
    <div>
      <hr />
      <h2><strong>{titulo}</strong></h2>
      <ItemList productos={productos} />
      <hr />
      <Formulario/>
      <hr />
      <Footer/>
    </div>
  );
};

export default ItemListContainer;
