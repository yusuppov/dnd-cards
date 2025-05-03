import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GlobalStyle } from './styles/globalStyles.ts';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <GlobalStyle/>
    <App />
    </Provider>
  </StrictMode>,
);
