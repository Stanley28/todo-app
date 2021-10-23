import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store';
import { NOTES } from './constants/localStorageKeys'; 
import localStorageService from './utils/localStorageService';
import { useDispatch } from 'react-redux';
import { getSetNotesAction } from './store/reducers/notesReducer';

declare global {
  interface Window { todoApp: any; }
}

const todoApp = {
  initialize() {
    const notes: string | null = localStorageService.get(NOTES);
    if (notes) {
      store.dispatch(getSetNotesAction(JSON.parse(notes)));
    }

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  }
};

window.todoApp = todoApp;