import { createStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';

import thunkMiddleware  from 'redux-thunk'

const addMiddleware = applyMiddleware(thunkMiddleware);



// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const store = createStore(
  allReducers,
  composeWithDevTools(addMiddleware)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
