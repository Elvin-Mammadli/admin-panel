import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import rootReducer from './store/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './store/rootSaga';


const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store} >
        <App/>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);