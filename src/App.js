import React, { useState } from 'react'
import allMovies from './data'
import categories from './categories'
import ageCategories from './age'
import Movie from './components/Movie'
import Button from './components/Button'

const App = () => {
  const [state, setState] = useState(true)
  const [all, setAll] = useState(true)
  const [typeOfMovie, setTypeOfMovie] = useState("")
  const [age, setAge] = useState("")

  const filteredCategories = allMovies.filter(oneMovie => oneMovie["category"] === typeOfMovie)
  const filteredAge = allMovies.filter(oneMovie => oneMovie["age"] === age)

  const setCategories = () => {
    setState(true)
    setAll(false)
  }

  const setAges = () => {
    setState(false)
    setAll(false)
  }

  return <div className='bg-black mt-5'>
    {/*BUTTONS*/}

    <Button category={categories} setStates={setCategories} setCategory={setTypeOfMovie} title="Žánr" />
    <Button category={ageCategories} setStates={setAges} setCategory={setAge} title="Věk" />
    <div className='flex flex-row justify-center'>
      <button
        className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer rounded mt-2'
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