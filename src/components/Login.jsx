import { Alert } from "bootstrap";
import { useState } from "react";

const Login = () => {

    const validarDatos = (e) => {
        e.preventDefault();


        setError(false);
        setcontraseñaError(false);
        seterrorLargo(false)


        let hayError = false;


        if (!email.trim() || !contraseña.trim()) {
            setError(true);
            hayError = true;
            alert("todos los datos son obligatorios!");
        }



        if (contraseña.length < 6) {
            seterrorLargo(true);
            alert("La contraseña debe tener 6 o más carácteres");
            hayError = true;
        }

        if (email != correodePrueba || contraseña != contraseñadePrueba) {
            hayError = true;
            setcontraseñaError(true);
            alert("el correo y contraseña no coinciden! intente de nuevo!")
        }


        if (!hayError) {

            alert("Autenticación correcta! Ingresaste al sistema");

        }
    };
    const correodePrueba = "email123@gmail.cl";
    const contraseñadePrueba = "123123";

    const [contraseña, setContraseña] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [errorLargo, seterrorLargo] = useState(false);

    const [contraseñaError, setcontraseñaError] = useState(false);
    return (
        <>
            <h1 className="text-center">Formulario de Ingreso</h1>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}

                {errorLargo ? <p>el largo de la contraseña  es menor a 6 carácteres</p> : null}


                <div className="form-group text-center">
                    <label>Email</label>
                     <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group text-center">
                    <label>Contraseña</label>
                    <input type="password" name="contraseña" className="form-control" onChange={(e) => setContraseña(e.target.value)} />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </div>

            </form>
            <hr />
            <h1 className="text-center"> Credenciales de prueba de login:</h1>
            <p className="text-center">Email: email123@gmail.cl</p>
            <p className="text-center">Contraseña: 123123</p>

        </>
    )
}

export default Login;