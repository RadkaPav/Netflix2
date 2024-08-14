import React, { useState } from 'react';
import "./App.css"
import allMovies from './data';
import categories from './categories';
import age from './age';
import Movie from './components/Movie';


const App = () => {
  const [state, setState] = useState(true)  /*určuje, zda se vypíší filmy filtrované podle kategorie nebo podle věku */
  const [all, setAll] = useState(true)
  //filtrování podle kategorie
  const [typeOfMovie, setTypeOfMovie] = useState("")
  const filteredMovies = allMovies.filter( (oneMovie) => {
    return oneMovie["category"] === typeOfMovie
  })

  //filtrování podle věku
  const [child, setChild] = useState("")
  const ageMovies = allMovies.filter((oneMovie) => {
    return oneMovie["age"] === child
  })

  return <div>
    {/* tlačítka na filtrování podle kategorie */}
    <div className='all-buttons'>
      {
        categories.map( (oneCategory, index) => {
          return  <button key={index} onClick={() => {
            setTypeOfMovie(oneCategory)
            setState(true)
            setAll(false)
            }} className='one-button'>
                      {oneCategory}
                  </button>
        })
      }
    </div>
    
    {/* tlačítka na filtrování podle věku */}
    <div className='all-buttons'>
      {
        age.map((oneAge, index) => {
          return <button key={index} onClick={() => {
            setChild(oneAge)
            setState(false)
            setAll(false)
          }} className='one-button'>{oneAge}</button>
        })
      }
    </div>
    <div className='all-buttons'>
      <button onClick={() => setAll(true)} className='one-button'>Vypsat všechny filmy</button>
    </div>

    
       { /* vypsání všech filmů*/
      all? <div className='all-movies'>
      {
      allMovies.map((oneMovie) => {
        return <Movie key={oneMovie.id} {...oneMovie} />
      })
      }
    </div> : <div></div>
    }
   
       {
      /* vypsání vyfiltrovaných filmů podle kategorie*/
      state?  <div className='all-movies'>
       {
      filteredMovies.map((oneMovie) => {
        return <Movie key={oneMovie.id} {...oneMovie}/>
      })
      }
    </div> : <div className='all-movies'>
      { /* vypsání vyfiltrovaných filmů podle věku*/
       ageMovies.map((oneMovie) => {
        return <Movie key={oneMovie.id} {...oneMovie}/>
      })
      }
   </div>
    }
   
   
       
    </div>
}

export default App