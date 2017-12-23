
// Saga effects
import { fork } from 'redux-saga/effects'
import { watchFetchMovies, watchAddNewMovie, watchDeleteMovie, watchUpdateMovie } from './movieSagas'

export default function * rootSaga () {
  yield [
    fork(watchFetchMovies),
    fork(watchAddNewMovie),
    fork(watchDeleteMovie),
    fork(watchUpdateMovie)
  ]
}
