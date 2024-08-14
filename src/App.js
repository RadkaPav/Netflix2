import React, { useState } from 'react'
import allMovies from './data'
import categories from './categories'
import ageCategories from './age'
import Movie from './components/Movie'

const App = () => {
  const [state, setState] = useState(true)
  const [all, setAll] = useState(true)
  const [typeOfMovie, setTypeOfMovie] = useState("")
  const [age, setAge] = useState("")

  const filteredCategories = allMovies.filter(oneMovie => oneMovie["category"] === typeOfMovie)
  const filteredAge = allMovies.filter(oneMovie => oneMovie["age"] === age)

  return <div className='bg-black'>
    {/*BUTTONS*/}
    <div className='flex flex-row justify-center'>
      {
        categories.map((oneCategory, index) => {
          return <button
            key={index}
            className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
            onClick={() => {
              setTypeOfMovie(oneCategory)
              setState(true)
              setAll(false)
            }}>{oneCategory}</button>
        })
      }
    </div>
    <div className='flex flex-row justify-center'>
      {
        ageCategories.map((oneAge, index) => {
          return <button
            key={index}
            className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
            onClick={() => {
              setAge(oneAge)
              setState(false)
              setAll(false)
            }}>{oneAge}</button>
        })
      }
    </div>
    <div className='flex flex-row justify-center'>
      <button
        className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
        onClick={() => {
          setAll(true)
          setAge("")
          setTypeOfMovie("")
        }}>Vypsat všechny filmy</button>
    </div>

    {/* MOVIES */}
    { 
      all ? 
      <div className='w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto'>
        {
          allMovies.map(oneMovie => <Movie key={oneMovie.id} {...oneMovie} />)
        }
      </div> : <div></div>
    }
    {
      state ? <div className='w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto'>
        {
          filteredCategories.map(oneMovie => <Movie key={oneMovie.id} {...oneMovie} />)
        }
      </div> : <div className='w-[90%] flex flex-row justify-center flex-wrap my-10 mx-auto'>
        { 
          filteredAge.map(oneMovie => <Movie key={oneMovie.id} {...oneMovie} />)
        }
      </div>
    }
  </div>
}

export default App