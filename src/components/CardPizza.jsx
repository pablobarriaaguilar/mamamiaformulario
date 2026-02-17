const CardPizza = ({name, price, ingredients, img}) =>{
    return (
      <div className="card">
  <img src={img} className="card-img-top" alt={name} />
  <div className="card-body"> 
    <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text">Ingredientes:</p>
        <ul>
          {ingredients.map((ingrediente) => (
            <li key={ingrediente}>🍕 {ingrediente}</li>
          ))}
        </ul>
        <hr />
        <h4>Precio: ${price.toLocaleString('es-CL')}</h4>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-dark">Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
    )
}


export default CardPizza;