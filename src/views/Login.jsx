import React from 'react'
import { createRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Alerta from '../components/Alerta';
import Spinner from "../components/Spinner";

export default function Login() {


       
       const emailRef = createRef();
       const passwordRef = createRef();
   
       const [errores, setErrores] = useState([])
       const { login } = useAuth({
           middleware: 'guest',
           url: '/'
       })
       const [cargando, setCargando] = useState(false);
   
       const handleSubmit = async e => {
        e.preventDefault();
     
        const datos = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
        setCargando(true);
        login(datos, setErrores, setCargando)
      }
   

  return (
    <>

    <h1 className='text-4xl font-black '>
      Iniciar Sesión
    </h1>
    <p>Para crear un pedido debes iniciar session</p>

    <div className='bg-white shadow rounded-lg p-10 mt-10'>

    <form 
                    onSubmit={handleSubmit}
                    noValidate
    action="
    ">

            {errores.length > 0 && errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)}
  

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

           
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-yellow-600 hover:bg-yellow-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
              
              {cargando ? <Spinner /> : null}
    </form>
    </div>

 
             <nav className="mt-5">
                 <Link to="/auth/registro">
                     ¿No tienes cuenta? Crea una!
                 </Link>
             </nav>


    </>
  )
}
