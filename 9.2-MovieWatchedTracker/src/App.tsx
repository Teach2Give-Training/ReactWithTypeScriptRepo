import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

type Movie = {
  title: string
  watched: boolean
}

type FormData = {
  title: string
  watched: boolean
}

function App() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [movies, setMovies] = useState<Movie[]>([])

  // Load movies from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('movies')
    if (saved) setMovies(JSON.parse(saved))
  }, [])

  // Save movies to localStorage whenever movies change
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  const onSubmit = (data: FormData) => {
    setMovies([...movies, data])
    reset()
  }

  const watchedCount = movies.filter(movie => movie.watched).length

  return (
    <>
      <div className="container">
        <h1>Movies Watched Tracker</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 20 }}>
          <input
            {...register('title', { required: true })}
            placeholder="Movie title"
            style={{ marginRight: 10 }}
          />
          <label style={{ marginRight: 10 }}>
            <input type="checkbox" {...register('watched')} />
            Watched
          </label>
          <button type="submit">Add Movie</button>
        </form>
        <h2>Total Movies Watched: {watchedCount}</h2>
        <ul>
          {movies.map((movie, idx) => (
            <li key={idx}>
              {movie.title} {movie.watched ? '✅' : '❌'}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App