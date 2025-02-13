import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const trackingId = "G-0EYMEP67W8";  // Replace with your actual Google Analytics Tracking ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <HelmetProvider>
      {/* Google Analytics Script */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </script>
      <App />
    </HelmetProvider>
  
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

