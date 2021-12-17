import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({ userReducer, usersReducer });

const persistConfig = {
  key: "root",
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
