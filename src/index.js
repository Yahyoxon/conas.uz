import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18next.js'
import loader from './assets/loader.png'
import { ContextProvider } from './context/Context';
import { ApiProvider } from './context/api';
import { LangProvider } from './context/language';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const App = lazy(() => import('./App'))

ReactDOM.render(
   <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}><img style={{ width: '100%', maxWidth: '400px' }} src={loader} alt="" /></div>}>
   <ContextProvider>
   <ApiProvider>
   <LangProvider>
   <App />
   </LangProvider>
   </ApiProvider>
   </ContextProvider>
   </Suspense>, document.getElementById('root'));
   