//React Imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Redux Imports
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
//Firebase Imports
import firebase from "./config/fbConfig";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const store = configureStore();
const persistor = persistStore(store);

const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
