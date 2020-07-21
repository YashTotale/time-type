//Redux Imports
import { createStore, combineReducers, applyMiddleware } from "redux";
//Redux Persist Imports
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//Redux Thunk Imports
import thunk from "redux-thunk";
//Redux Devtools Imports
import { composeWithDevTools } from "redux-devtools-extension";
//Reducer Imports
import { sidebar, typer } from "./reducers";
//Firebase Imports
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const reducers = {
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sidebar,
  typer,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
