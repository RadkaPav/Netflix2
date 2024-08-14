import React, { useState } from 'react'
import allMovies from './data'
import categories from './categories'
import age from './age'
import Movie from './components/Movie'


const App = () => {
  const [state, setState] = useState(true)  /*určuje, zda se vypíší filmy filtrované podle kategorie nebo podle věku */
  const [all, setAll] = useState(true)
  //filtrování podle kategorie
  const [typeOfMovie, setTypeOfMovie] = useState("")
  const filteredMovies = allMovies.filter((oneMovie) => {
    return oneMovie["category"] === typeOfMovie
  })

  //filtrování podle věku
  const [child, setChild] = useState("")
  const ageMovies = allMovies.filter((oneMovie) => {
    return oneMovie["age"] === child
  })

  return <div className='bg-black'>
    {/* tlačítka na filtrování podle kategorie */}
    <div className='flex flex-row justify-center'>
      {
        categories.map((oneCategory, index) => {
          return <button key={index} className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
            onClick={() => {
              setTypeOfMovie(oneCategory)
              setState(true)
              setAll(false)
            }}>{oneCategory}</button>
        })
      }
    </div>

    {/* tlačítka na filtrování podle věku */}
    <div className='flex flex-row justify-center'>
      {
        age.map((oneAge, index) => {
          return <button key={index} className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
            onClick={() => {
              setChild(oneAge)
              setState(false)
              setAll(false)
            }}>{oneAge}</button>
        })
      }
    </div>
    <div className='flex flex-row justify-center'>
      <button className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
       onClick={() => {
        setAll(true)
        setChild("")
        setTypeOfMovie("")
        }}>Vypsat všechny filmy</button>
    </div>


    { /* vypsání všech filmů*/
      all ? <div className='w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto'>
        {
          allMovies.map((oneMovie) => {
            return <Movie key={oneMovie.id} {...oneMovie} />
          })
        }
      </div> : <div></div>
    }
    {
      /* vypsání vyfiltrovaných filmů podle kategorie*/
      state ? <div className='w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto'>
        {
          filteredMovies.map((oneMovie) => {
            return <Movie key={oneMovie.id} {...oneMovie} />
          })
        }
      </div> : <div className='w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto'>
        { /* vypsání vyfiltrovaných filmů podle věku*/
          ageMovies.map((oneMovie) => {
            return <Movie key={oneMovie.id} {...oneMovie} />
          })
        }
      </div>
    }



  </div>
}

export default App