import React, { useRef, useState } from 'react'
import { useFormData } from '../hooks/useFormData';
import { useForm } from '../hooks/useForm';
import { useRegister } from '../hooks/useRegister';

function Register() {

    const [aceptoTermino, setAceptoTermino ] = useState(false);
    const [verContra, setVerContra] = useState(false);
    const { municipios } = useFormData();
    const {registrar, modalRef, abrirModal} = useRegister();

    const datosPersonales = useForm({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        genero: '',
        curp:''
    });

    const telefonoPersonal = useForm({numero: ''});
    const telefonoCasa = useForm({numero: ''});
    const telefonoReferencia = useForm({numero: ''});

     const telefonos = [
        {
            ...telefonoPersonal.form,
            tipo_id: 1
        },
        {
            ...telefonoCasa.form,
            tipo_id: 3
        },
        {
            ...telefonoReferencia.form,
            tipo_id: 4
        }
    ].filter(t => t.numero.trim() !== "");


    const direccion = useForm({
        municipio_id: '',
        calle: '',
        colonia: '',
        numero_exterior: '',
        numero_interior: '',
        codigo_postal: ''
    });

    const credencial = useForm({correo:'', contrasena:''})
    
    const handleSumit = (e) => {
        e.preventDefault();

        abrirModal();
    }

    const handleFinalizarRegistro = () => {
        registrar({ 
            ...datosPersonales.form, 
            telefonos, 
            direccion: { ...direccion.form, municipio_id: Number(direccion.form.municipio_id)}, 
            credencial: credencial.form
        })
    }

    return (
        <div className='p-5 bg-neutral-100'> 

            <div className='card shadow-lg border border-neutral-300 bg-base-100 text-base-content'>

                <div className='card-title font-extrabold justify-center mt-3'>
                    Registrate
                </div>

                <div className='card-body'>

                    <form className='flex flex-col gap-6' onSubmit={handleSumit}>

                        <label className='text-lg font-bold'>Datos personales</label>

                        <div className='flex flex-row gap-3 items-center'>

                            <label>Nombre:</label>
                            <input onChange={datosPersonales.handleChange} className='input validator w-1/3' type='text' placeholder='Obligatorio' name='nombre' required/>

                            <label>Apellido Paterno:</label>
                            <input onChange={datosPersonales.handleChange} className='input validator w-1/3' type='text' placeholder='Obligatorio' name='apellido_paterno' required/>

                            <label>Apellido Materno:</label>
                            <input onChange={datosPersonales.handleChange} className='input validator w-1/3' type='text' placeholder='Obligatorio' name='apellido_materno' required/>

                        </div>

                        <div className='flex flex-row gap-3 items-center'>
                            
                            <label>Fecha nacimiento: </label>
                            <input min="1926-01-01" max="2011-01-01" onChange={datosPersonales.handleChange} className='input validator w-1/2' type='date' name='fecha_nacimiento' required/>

                            <label className='select validator w-1/2'>
                                <span className="label">Obligatorio:</span>
                                <select onChange={datosPersonales.handleChange} className='validator' name='genero' required>
                                    <option disabled selected value={''}>Elige genero</option>
                                    <option value={'Hombre'}>Hombre</option>
                                    <option value={'Mujer'}>Mujer</option>
                                    <option value={'Otro'}>Otro</option>
                                </select>
                            </label>

                        </div>
                        
                        <div className='flex flex-col'>
                            <label>Curp: </label>
                            <input maxLength={18} pattern='^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}$' title="Ingresa una CURP válida" onChange={datosPersonales.handleChange} className='input input-success w-full' type='text' placeholder='Opcional' name='curp'/>
                        </div>

                        <label className='text-lg font-bold'>Numero telefonicos</label>

                        <div className='flex flex-row gap-5 items-center'>
                            <label>Personal: </label>
                            <input maxLength={10} minLength={10} pattern='[0-9]{10}' title='Debe contener 10 a 12 digitos' onChange={telefonoPersonal.handleChange} className='input validator w-1/3' type='tel' inputMode='numeric' placeholder='Obligatorio' name='numero' required/>

                            <label>Casa: </label>
                            <input maxLength={10} minLength={10} pattern='[0-9]{10}' title='Debe contener 10 a 12 digitos' onChange={telefonoCasa.handleChange} className='input input-success w-1/3' type='tel' inputMode='numeric' placeholder='Opcional' name='numero'/>

                            <label>Referencia: </label>
                            <input maxLength={10} minLength={10} pattern='[0-9]{10}' title='Debe contener 10 a 12 digitos' onChange={telefonoReferencia.handleChange} className='input validator w-1/3' type='tel' inputMode='numeric' placeholder='Obligatorio' name='numero' required/>
                        </div>

                        <label className='text-lg font-bold'>Direccion</label>

                        <div className='flex flex-row gap-5 items-center'>
                            <label>Colonia:</label>
                            <input onChange={direccion.handleChange} className='input validator w-1/2' type='text' placeholder='Obligatorio' name='colonia' required/>

                            <label>Calle:</label>
                            <input onChange={direccion.handleChange} className='input validator w-1/2' type='text' placeholder='Obligatorio' name='calle' required/>
                        </div>

                        <div className='flex flex-row gap-1 items-center'>

                            <label>N.Exterior:</label>
                            <input maxLength={3} pattern='[0-9]{1,3}' title='Debe contener 3 digitos' onChange={direccion.handleChange} className='input input-success w-1/3' inputMode='numeric' placeholder='Opcional' name='numero_exterior'/>

                            <label>N.Interior:</label>
                            <input maxLength={3} pattern='[0-9]{1,3}' title='Debe contener 3 digitos' onChange={direccion.handleChange} className='input input-success w-1/3' inputMode='numeric' placeholder='Opcional' name='numero_interior'/>

                            <label>Codigo postal:</label>
                            <input maxLength={5} pattern='[0-9]{5}' title='Debe contener 5 digitos' onChange={direccion.handleChange} className='input validator w-1/3' inputMode='numeric' placeholder='Obligatorio' name='codigo_postal' required/>

                        </div>

                        <div className='flex flex-col'>
                            <label className='select validator w-full '>
                                <span className='label'>Obligatorio:</span>
                                <select onChange={direccion.handleChange} name='municipio_id' required>
                                    <option disabled selected value=''>Elige municipio</option>

                                    {municipios.map(municipio => 
                                            (<option key={municipio.id} value={municipio.id}>{municipio.nombre}</option>)
                                        )
                                    }

                                </select>
                            </label>
                        </div>

                        <div className='flex flex-row gap-3 justify-center'>
                            <input type="checkbox" required checked={aceptoTermino} className="checkbox validator" onChange={(e) => setAceptoTermino(e.target.checked)}/>
                            <span>Acepto</span>
                            <a className='link'>Terminos y condiciones</a>
                        </div>

                        <button className='btn btn-info w-full' type='submit' disabled={!aceptoTermino} >Enviar</button>
                    </form>


                    <dialog ref={modalRef} className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold">Para Finalizar</h3>

                            <form className='flex flex-col items-center gap-3'>

                                <label>Correo:</label>
                                <input onChange={credencial.handleChange} className='input validator w-full' type='email' placeholder='Obligatorio' required name='correo'/>

                                <label>Contraseña:</label>
                                <div className='join w-full'>
                                    <input minLength={8} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$" title="La contraseña debe tener entre 8 y 30 caracteres, al menos una mayúscula, una minúscula y un número."onChange={credencial.handleChange} className='input validator w-full' type={verContra ? 'text' : 'password'} placeholder='Obligatorio' required name='contrasena'/>
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
                            
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn" type="button" onClick={handleFinalizarRegistro}>
                                        Finalizar registro
                                    </button>
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