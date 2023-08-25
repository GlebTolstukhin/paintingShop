import { configureStore} from "@reduxjs/toolkit"
import { itemsApi } from "./itemsApi"
import filterReducer from "./filterSlice"

export const store = configureStore({
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer,
        filter: filterReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware)
})