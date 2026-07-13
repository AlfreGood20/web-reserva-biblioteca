import React from 'react'
import Menu from '../components/Menu'
import Book from '../components/Book'

function Home() {

  let libro = {
    portada_url: "https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/681b63dd7d9dbb4c4ce5ae76_WJlUnXLgNrZqh3HN_u7WMEnTVs1tV0qKwtUkvXJ2JTk.jpeg",
    titulo : "Principito",
    anio:1980,
    isbn:"77-99-0882"
  }


  return (
    <>
        <Menu />

        <div className='flex flex-col p-5'>
          <h1 className='text-lg font-bold'>Más recientes</h1>

          <div className='flex flex-row overflow-x-scroll mt-5 gap-5'>

            {Array.from({ length: 10 }).map((_, index) => (
              <Book key={index} libro={libro}/>
            ))}

          </div>

        </div>
    </>
  )
}

export default Home