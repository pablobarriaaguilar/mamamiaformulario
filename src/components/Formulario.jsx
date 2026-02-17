import { useState } from "react";

const Formulario = () => {

    const validarDatos = (e) => {
        e.preventDefault();


        setError(false);
        setcontraseñaError(false);
        seterrorLargo(false)


        let hayError = false;


        if (!email.trim() || !contraseña.trim() || !conContraseña.trim()) {
            setError(true);
            hayError = true;
            alert("ERROR, Todos los campos son obligatorios!");
        }


        if (contraseña !== conContraseña) {
            setcontraseñaError(true);
            hayError = true;
            alert("ERROR, Las contraseñas no coinciden!");
        }

        if (contraseña.length < 6) {
            seterrorLargo(true);
            hayError = true;
            alert("ERROR, La contraseña tiene menos de 6 carácteres!");
        }


        if (!hayError) {




            alert("Usuario Guardado");

        }
    };
    const [contraseña, setContraseña] = useState("");

    const [email, setEmail] = useState("");
    const [conContraseña, setconContraseña] = useState("");
    const [error, setError] = useState(false);
    const [errorLargo, seterrorLargo] = useState(false);
    const [contraseñaError, setcontraseñaError] = useState(false);
    return (
        <>
            <h1 className="text-center">Formulario de Registro</h1>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}
                {contraseñaError ? <p>las contraseñas no coinciden</p> : null}
                {errorLargo ? <p>el largo de la contraseña  es menor a 6 carácteres</p> : null}


                <div className="form-group text-center">
                    <label>Email</label> 
                    <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group text-center">
                    <label>Contraseña</label>
                    <input type="password" name="contraseña" className="form-control" onChange={(e) => setContraseña(e.target.value)} />
                </div>

                <div className="form-group text-center"><label>Confirmación Contraseña</label> <input type="password" name="conContraseña" className="form-control" onChange={(e) => setconContraseña(e.target.value)} />
                </div>
                
                <div className="text-center">                <button type="submit" className="btn
btn-primary text-center">Enviar</button></div>

            </form>
            <hr />

        </>
    )
}

export default Formulario;