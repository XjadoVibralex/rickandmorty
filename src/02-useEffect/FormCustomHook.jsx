import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormCustomeHook = () => {

    const {formState,onInputChange,onResetForm,username,email,password}=useForm({
        username :'',
        email : '',
        password:''
    })

    //const {username,email,password}=formState;


    return(
        <>
            <h1>Formulario con Custome Hook</h1>
            <hr />
            
            <input type="text"
            className="form-control"
            placeholder="Ingresar usuario" 
            name="username"
            value={username}
            onChange={onInputChange}
            />

            <input type="text"
            className="form-control mt-2"
            placeholder="Ingresar email"
            name="email" 
            value={email}
            onChange={onInputChange}
            />

            <input type="password"
            className="form-control mt-2"
            placeholder="Ingresar econtraseña"
            name="password" 
            value={password}
            onChange={onInputChange}
            />

            <button onClick={ onResetForm } className="btn btn-danger mt-2">Borrar</button>
           
        </>
    )
}