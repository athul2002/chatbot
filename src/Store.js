import {combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {botReducer} from './redux/Reducer';
import {configureStore} from '@reduxjs/toolkit';
const reducer=combineReducers({
    detail:botReducer
});
 
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
const persistor = persistStore(store);
export { persistor, store };