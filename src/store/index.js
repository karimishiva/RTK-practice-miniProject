import {configureStore} from '@reduxjs/toolkit'
import { moviesReducer,addMovie,removeMovie } from './slices/moviesSlices';
import { songsReducer,addSong,removeSong } from './slices/songsSlices';
import {reset} from './actions'

const store=configureStore({
    reducer:{
        songs:songsReducer,
        movies:moviesReducer
    }
})

export {store,reset,addMovie,removeMovie,addSong,removeSong}