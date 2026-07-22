import React from 'react'
import Book from '../components/Book'
import Navbar from '../components/Navbar'

function Home() {

  let libro = {
    portada_url: "https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/681b63dd7d9dbb4c4ce5ae76_WJlUnXLgNrZqh3HN_u7WMEnTVs1tV0qKwtUkvXJ2JTk.jpeg",
    titulo : "Principito",
    anio:1980,
    isbn:"77-99-0882"
  }


  return (
    <>
        <Navbar />

        <div className='flex flex-col p-5'>

          <h1 className='text-lg font-bold'>Libros más recientes</h1>
          <div className='flex flex-row overflow-x-scroll gap-5'>

            {Array.from({ length: 10 }).map((_, index) => (
              <Book key={index} libro={libro}/>
            ))}

          </div>

          <h1 className='text-lg font-bold'>Libros más pedidos</h1>

        </div>
    </>
  )
}

export default Home