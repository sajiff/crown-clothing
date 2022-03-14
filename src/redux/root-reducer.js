import { combineReducers } from 'redux';
import CartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
});

export default persistReducer(persistConfig, rootReducer);
