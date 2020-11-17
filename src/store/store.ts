import { configureStore, createStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
//import counterReducer from '../features/counter/counterSlice';
import allReducers from './reducers';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const store = createStore(
  allReducers,
  composeWithDevTools()
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
