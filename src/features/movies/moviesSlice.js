import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    recommend: null,
    newDesiney: null,
    originals: null,
    trending: null,

}
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        setMovies: (state,action)=>{
            state.recommend = action.payload.recommend;
            state.newDesiney = action.payload.newDesiney;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        },
    },
});


export const { setMovies } = moviesSlice.actions
export const selectRecommends = state => state.movie.recommend;
export const selectNewDesiney = state => state.movie.newDesiney;
export const selectOriginals = state => state.movie.originals;
export const selectTrending = state => state.movie.trending;


 export default moviesSlice.reducer;