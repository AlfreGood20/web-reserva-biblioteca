import React, { useState } from 'react'

function Register() {

    const [aceptoTermino, setAceptoTemino ] = useState(false);

    return (
        <div className='p-5'>

            <div class="aura aura-silver w-full">

                <div className='card shadow-lg  bg-base-100 text-base-content'>

                    <div className='card-title justify-center mt-3'>
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
                                <input className='input w-1/4' placeholder='Opcional'/>

                                <label>N.Interior:</label>
                                <input className='input w-1/4' placeholder='Opcional'/>

                                <label>Codigo postal:</label>
                                <input className='input w-1/4' placeholder='Obligatorio'/>

                                <label className='select w-1/4'>
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

                            <button className='btn w-full' type='submit' disabled={!aceptoTermino}>Enviar</button>
                        </form>
                    </div>


                </div>


            </div>
            
        </div>
    )
}

export default Register