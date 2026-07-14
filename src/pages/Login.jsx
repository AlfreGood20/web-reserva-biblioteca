import React from 'react'
import Logo from '../assets/logo_app_biblioteca_me_libro.png'
import { Link } from 'react-router-dom'

function Login() {

    return (
        <div className="hero min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="flex flex-col text-center ">
                    
                    <img src={Logo} className='md:h-auto'/>
                    <h1 className='text-3xl font-extrabold'>Biblioteca - ME©</h1>
                    <p className="py-6">
                        Explora el catálogo de libros, realiza reservas en línea y consulta el estado de tus préstamos desde cualquier lugar.
                    </p>

                    <span className="text-rotate">
                        <span className="font-bold justify-items-center">
                            <span>Presta-ME</span>
                            <span>Devuélve-ME</span>
                            <span>Reserva-ME</span>
                            <span>Explora-ME</span>
                            <span>Lee-ME</span>
                        </span>
                    </span>
                </div>



                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Correo</label>
                            <input type="email" className="input" placeholder="Email" />

                            <label className="label">Contraseña</label>
                            <input type="password" className="input" placeholder="Password" />

                            <div className='flex flex-col justify-center items-center'>
                                <a className="link link-hover">¿Olvidaste la contraseña?</a>
                            </div>

                            <button className="btn btn-neutral mt-4">Entrar</button>

                            <div className='flex flex-col justify-center items-center'>
                                <span>¿No tienes cuenta?</span>
                                <Link className='link-info font-bold' to="/register">
                                    Registrarme
                                </Link>
                            </div>

                        </fieldset>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login