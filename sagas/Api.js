
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://10.0.2.2:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
// const urlGetMovies = 'http://localhost:3000/movies'
// const urlGetMovies = 'http://10.0.2.2:3000/movies'

function * getMoviesFromApi () {
  const response = yield api.get('/movies')
  console.log(response)
  // const response = yield fetch(urlGetMovies, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // })
  // console.log(response)
  // const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
  var movies = ''
  if (response.ok) {
    movies = response.data
  }
  return movies
}
// send POST request to add new Movie
function * insertNewMovieFromApi (newMovie) {
  const response = yield api.post('/movies',
    { name: newMovie.name, releaseYear: newMovie.releaseYear },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
  // const response = yield fetch(urlPostMovies, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: newMovie.name,
  //     releaseYear: newMovie.releaseYear
  //   })
  // })
  yield console.log(`response = ${JSON.stringify(response)}`)
  return yield (response.status === 200) // true or false
}

function * updateMovieFromApi (currentMovie) {
  const response = yield api.put(`/movies/${currentMovie.id.toString()}`,
    { name: currentMovie.name, releaseYear: currentMovie.releaseYear },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )

  yield console.log(`response = ${JSON.stringify(response)}`)
  return yield (response.status === 200) // true or false
}

// //send PUT request to update existing Movie
// function* updateMovieFromApi(updatedMovie) {
//   const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;
//   const response = yield fetch(urlLink, {
//       method: 'PUT',
//       headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           name: updatedMovie.name,
//           releaseYear: updatedMovie.releaseYear,
//       }),
//   });
//   return yield (response.status === 200);//true or false
// }

function * deleteMovieFromApi (deletedMovieId) {
  console.log('delete')
  const response = yield api.delete(`/movies/${deletedMovieId}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )

  yield console.log(`response = ${JSON.stringify(response)}`)
  return yield (response.status === 200) // true or false
}

export const Api = {
  getMoviesFromApi,
  insertNewMovieFromApi,
  updateMovieFromApi,
  deleteMovieFromApi
}
