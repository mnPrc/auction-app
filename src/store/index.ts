import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./auth/slice"; 
import itemsReducer from "./item/slice";
import rootSaga from "./rootSaga"; 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { auth: userReducer, items: itemsReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;