import "./ItemListContainer.css";

const Card = (props) => {
  return (
    <div className="licencia" key={props.id}>
      <p>{props.nombre}</p>

      <p>{props.marca}</p>

      <p>{props.precio}</p>
    </div>
  );
};

export default Card;
