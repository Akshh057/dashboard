import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider'
ReactDOM.render(
  <React.StrictMode>
    {/* wrapping up the whole app so that any component can access and modify the data using context-api. */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
