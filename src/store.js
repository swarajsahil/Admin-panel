import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./common/blogSlice";
import gameReducer from "./common/gameSlice";
import casinoReducer from "./common/casinoSlice";
import reviewReducer from "./common/reviewSlice";
const store = configureStore({
  reducer: {
    blogs: blogReducer,
    games: gameReducer,
    casinos: casinoReducer,
    reviews: reviewReducer,
  },
});

export default store;