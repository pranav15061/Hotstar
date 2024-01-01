import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/UserSlice";
import movieReducer from "../features/movie/MovieSlice";

// export default configureStore({
//     reducer: {
//       user: userReducer,
//     //   movie: movieReducer,
//     },
//     middleware: getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   });

export default configureStore({
    reducer: {
     user: userReducer,
     movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({

        serializableCheck: false,
      }),

})

