import { useState, useEffect } from "react";
import Card from "./Card";
import "./ItemListContainer.css";
import promesa from "./promesas";
console.log("llamado");

const ItemListContainer = () => {
  const [stock, SetStock] = useState([]);
  const [load, SetLoad] = useState(true);
  console.log(
    "¿ESTE CONSOLE LOG MUESTRA LAS VECES QUE SE ESTA RENDERIZANDO ITEM LIST CONTAINER?"
  );

  useEffect(() => {
    promesa()
      .then((resp) => SetStock(resp))
      .catch((err) => console.log(err))
      .finally(SetLoad(false));
  }, []);

  return (
    <div className="wrapper">
      {load ? (
        <p>{load}</p>
      ) : (
        <>
          {stock.map((item) => (
            <Card
              key={item.id}
              nombre={item.nombre}
              marca={item.marca}
              precio={item.precio}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
