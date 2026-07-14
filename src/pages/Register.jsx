import React, { useRef, useState } from 'react'

function Register() {

    const [aceptoTermino, setAceptoTemino ] = useState(false);
    const [verContra, setVerContra] = useState(false);
    const modalRef = useRef(null);

    const abrirModal = () => {
        modalRef.current?.showModal();
    };

    const cerrarModal = () => {
        modalRef.current?.close();
    };
    

    return (
        <div className='p-5 bg-neutral-100'> 

            <div className='card shadow-lg border border-neutral-300 bg-base-100 text-base-content'>

                <div className='card-title font-extrabold justify-center mt-3'>
                    Registrate
                </div>

                <div className='card-body'>

                    <form className='flex flex-col gap-6'>

                        <label className='text-lg font-bold'>Datos personales</label>

                        <div className='flex flex-row gap-3 items-center'>
                            <label>Nombre:</label>
                            <input className='input w-1/3' placeholder='Obligatorio' name='nombre'/>

                            <label>Apellido Paterno:</label>
                            <input className='input w-1/3' placeholder='Obligatorio' name='apellido_paterno'/>

                            <label>Apellido Materno:</label>
                            <input className='input w-1/3' placeholder='Obligatorio' name='apellido_materno'/>
                        </div>

                        <div className='flex flex-row gap-3 items-center'>
                            
                            <label>Fecha nacimiento: </label>
                            <input className='input w-1/2' type='date' name='fecha_necimiento'/>

                            <label className='select w-1/2'>
                                <span class="label">Obligatorio:</span>
                                <select name='genero'>
                                    <option disabled selected>Elige genero</option>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                    <option>Otro</option>
                                </select>
                            </label>

                        </div>
                        
                        <div className='flex flex-col'>
                            <label>Curp: </label>
                            <input className='input w-full' placeholder='Opcional'/>
                        </div>

                        <label className='text-lg font-bold'>Numero telefonicos</label>

                        <div className='flex flex-row gap-5 items-center'>
                            <label>Personal: </label>
                            <input className='input w-1/3' placeholder='Obligatorio'/>

                            <label>Casa: </label>
                            <input className='input w-1/3' placeholder='Opcional'/>

                            <label>Referencia: </label>
                            <input className='input w-1/3' placeholder='Obligatorio'/>
                        </div>

                        <label className='text-lg font-bold'>Direccion</label>

                        <div className='flex flex-row gap-5 items-center'>
                            <label>Colonia:</label>
                            <input className='input w-1/2' placeholder='Obligatorio'/>

                            <label>Calle:</label>
                            <input className='input w-1/2' placeholder='Obligatorio'/>
                        </div>

                        <div className='flex flex-row gap-1 items-center'>

                            <label>N.Exterior:</label>
                            <input className='input w-1/3' placeholder='Opcional'/>

                            <label>N.Interior:</label>
                            <input className='input w-1/3' placeholder='Opcional'/>

                            <label>Codigo postal:</label>
                            <input className='input w-1/3' placeholder='Obligatorio'/>

                        </div>

                        <div className='flex flex-col'>
                            <label className='select w-full'>
                                <span className='label'>Obligatorio:</span>
                                <select name='municipio_id'>
                                    <option disabled selected>Elige municipio</option>
                                    <option>Villahermosa</option>
                                    <option>Tenosique</option>
                                    <option>Balacan</option>
                                    <option>Centla</option>
                                </select>
                            </label>
                        </div>

                        <div className='flex flex-row gap-3 justify-center'>
                        <input type="checkbox" checked={aceptoTermino} class="checkbox" onChange={(e) => setAceptoTemino(e.target.checked)}/>
                        <span>Acepto</span>
                        <a className='link'>Terminos y condiciones</a>
                        </div>

                        <button className='btn btn-info w-full' type='button' disabled={!aceptoTermino} onClick={abrirModal}>Enviar</button>
                    </form>

                    <dialog ref={modalRef} class="modal">
                        <div class="modal-box">
                            <h3 class="text-lg font-bold">Para Finalizar</h3>

                            <form className='flex flex-col items-center gap-3'>

                                <label>Correo:</label>
                                <input className='input w-full' type='email' placeholder='Obligatorio'/>

                                <label>Contraseña:</label>
                                <div className='join w-full'>
                                    <input className='input w-full' type={verContra ? 'text' : 'password'} placeholder='Obligatorio'/>
                                    <button type='button' className="btn join-item w-25" onClick={() => setVerContra(!verContra)}>
                                        {verContra? 
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        ):
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
    

                            </form>
                            
                            <div class="modal-action">
                                <form method="dialog">
                                    <button class="btn">Finalizar registro</button>
                                </form>
                            </div>
                        </div>
                    </dialog>


                </div>


            </div>
            
        </div>
    )
}

export default Register