import { useState, useEffect } from "react";
import Card from "./Card";
import "./ItemListContainer.css";
import promesa from "./promesas";

const ItemListContainer = () => {
  const [stock, SetStock] = useState([]);
  const [load, SetLoad] = useState(true);

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
              id={item.id}
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
