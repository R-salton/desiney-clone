import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import movieReducer from "../features/movies/moviesSlice"

export default configureStore({
reducer: {
    user: userSlice,
    movie: movieReducer,
},
middleware: getDefaultMiddleware({
    serializableCheck: false,
}),
});
