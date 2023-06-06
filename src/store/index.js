import { configureStore } from "@reduxjs/toolkit";
import dataSlice from '../store/dataSlice';
import UserSlice from "../store/UserSlice";
import ReviewSlice from "../store/ReviewSlice";
import wishlistSlice from "./wishlistSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const cardDataReducer = persistReducer(persistConfig, dataSlice);
const userReduce = persistReducer(persistConfig, UserSlice);
const reviewReducer = persistReducer(persistConfig, ReviewSlice);
const wishlistReducer = persistReducer(persistConfig, wishlistSlice);

export default () => {
    let store = configureStore({
        reducer: {
            cartData: cardDataReducer,
            userData: userReduce,
            reviewData: reviewReducer,
            wishListdata: wishlistReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
                immutableCheck: {
                    ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
                },
            }),
    })
    let persistor = persistStore(store)
    return { store, persistor }
}
