import { Action, configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../slices/employeeSlice';
import { ThunkAction, thunk } from 'redux-thunk';

const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools:process.env.NODE_ENV !=='production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;


export default store;
