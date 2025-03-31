import React from 'react'
import { createRef, useState} from 'react';
import { Link } from 'react-router-dom';

import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';
import Spinner from "../components/Spinner";



export default function Registro() {


    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();


    const [errores, setErrores] = useState([]);

    const {registro} = useAuth({middleware: 'guest', url: '/'})
      const [cargando, setCargando] = useState(false);
    
    const hadleSubmit = async e => {
        e.preventDefault();

           const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        setCargando(true);
        registro(datos, setErrores, setCargando)
    }

  return (
   
    <>

    <h1 className='text-4xl font-black '>
      Crea tu cuenta
    </h1>
    <p>Crea tu cuenta llenando el formulario</p>

    <div className='bg-white shadow rounded-lg p-10 mt-10'>

                <form
                onSubmit={hadleSubmit}
                noValidate
                action="
                ">

        {errores.length > 0 && errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)}
            <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="name"
                        >Nombre:</label>
                        <input 
                            type="text" 
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Tu Nombre"
                            ref={nameRef}
                           
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="email"
                        >Email:</label>
                        <input 
                            type="email" 
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu Email"
                            ref={emailRef}
                       
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="password"
                        >Password:</label>
                        <input 
                            type="password" 
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu Password"
                            ref={passwordRef}
                          
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="password_confirmation"
                        >Repetir Password:</label>
                        <input 
                            type="password" 
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Repetir Password"
                            ref={passwordConfirmationRef}
                    
                        />
                    </div>

                    <input
                        type="submit"
                        value="Crear Cuenta"
                        className="bg-yellow-600 hover:bg-yellow-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
              {cargando ? <Spinner /> : null}

    </form>
    </div>

    <nav className="mt-5">
                 <Link to="/auth/login">
                     ¿Ya tienes cuenta? Inicia Sesión
                 </Link>
             </nav>

    </>
  )
}
