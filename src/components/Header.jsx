const Header = ({image}) => {
    return  (
        <div className="contenedor-centrado" style={{ position: 'relative' }}>
            {/* Ahora image ya tiene la ruta correcta */}
            <img src={image} alt="Banner Pizzería" style={{ width: '100%', height: 'auto' }} />
            
            <div className="textoencima">
                <h1>¡Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
    )
}


export default Header;