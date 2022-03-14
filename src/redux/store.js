import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(Store);

export default { Store, persistor };
