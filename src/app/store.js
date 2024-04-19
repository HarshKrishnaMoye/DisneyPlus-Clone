import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import logger from 'redux-logger';
import movieReducer from '../features/movie/movieSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger), // Concatenating logger middleware
});

export default store;
