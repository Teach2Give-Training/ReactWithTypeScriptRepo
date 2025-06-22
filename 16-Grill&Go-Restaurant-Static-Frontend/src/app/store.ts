import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/api/userApi";
import { persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import authReducer from "../features/auth/authSlice"

//Create a persit config for auth Slice
const authPersistConfig = {
    key:'auth',
    storage,
    whitelist:['user','token','isAuthenticated','userType']  //Specify which parts of the state to persist
}



//Create a persisted reducer for the auth slice
const persistAuthReducer =  persistReducer(authPersistConfig,authReducer)

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        //Use the persiste reducer here
        auth:persistAuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(userApi.middleware)
})

//Export the persisted store
export const persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch