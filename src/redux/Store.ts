import { configureStore, Action } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import { RootReducer } from './reducers/RootReducer';
import { RootState } from './reducers/RootReducer';

const middleware = [thunk];

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const Store = configureStore({ reducer: RootReducer, middleware });
