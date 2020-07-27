import { composeWithDevTools } from 'redux-devtools-extension';

import { applyMiddleware, createStore, combineReducers } from 'redux';

import authReducer from 'reducers/auth';
import todoReducer from 'reducers/todo';

// import { reducer as formReducer } from "redux-form";
// import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware()),
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
