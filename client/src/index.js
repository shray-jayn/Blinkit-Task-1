import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthContext';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
