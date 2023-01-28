import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);
const persisConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  //   blacklist: ["user"],
};
const persistedReducer = persistReducer(persisConfig, rootReducer);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
