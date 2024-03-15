import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx'
import { IntlProvider, FormattedMessage } from "react-intl";
import messages_en from "./locales/en.json"
import messages_ar from "./locales/arab.json" 



const root = ReactDOM.createRoot(document.getElementById('root'));

const messages = {
  en: messages_en,
  ar: messages_ar,
};



const locale = "en";

console.log(messages[locale],"jhij")


root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App/>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

