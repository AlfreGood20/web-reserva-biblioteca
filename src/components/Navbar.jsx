import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { usePerfil } from '../hooks/usePerfil';
import Logo from '../assets/logo_app_biblioteca_me_libro.png'

function Menu() {

    const {isAuthenticated, accessToken, cargando} = useAuth();
    const {perfil, cargando: cargandoPerfil} = usePerfil();

    return (
        <div className="navbar bg-base-100 shadow-sm">

            <div className="navbar-start">
                <div className='flex flex-row items-center justify-center carousel carousel-horizontal'>
                    <img src={Logo} className='w-40 h-auto'/>
                    <h1 className="text-lg flex flex-row font-extrabold">ME</h1>
                </div>
            </div>

            <div className="navbar-center">
                <input type="text" placeholder="Buscar libro" className="input input-bordered w-50 md:w-100" />
            </div>

           <div className="navbar-end">
                {cargando ? (
                    
                    <div className='flex flex-row gap-5'>
                        <div className="skeleton h-8 w-30"></div>
                        <div className="skeleton h-8 w-30"></div>
                    </div>
                    
                ) : !isAuthenticated ? (

                    <div className="flex gap-2">
                        <Link to="/login" className="btn btn-ghost btn-md">
                            Iniciar Sesión
                        </Link>
                        <Link to="/register" className="btn btn-primary btn-md">
                            Registrarse
                        </Link>
                    </div>

                ) : !cargandoPerfil ?  (
                    <div className='flex flex-row gap-5 items-center'>
                        <div class="skeleton h-auto w-50"></div>
                        <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    </div>
                ): (<Menu perfil={perfil}/>)
                }
            </div>

        </div>
    )
}

export default Menu