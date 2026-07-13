import React from 'react'

function Book({libro}) {
  return (
    <button className='flex flex-col cursor-pointer' >

        <div className='avatar'>
        <div class="md:h-50 md:w-40 rounded-xl">
            <img src={libro.portada_url} />
        </div>
        </div>

        <div className='text-center text-xs'>
            <h2>{libro.titulo}</h2>
            <h2 className='font-extrabold'>{libro.isbn}</h2>
            <h3>Año {libro.anio}</h3>
        </div>

    </button>
  )
}

export default Book