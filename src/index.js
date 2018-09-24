import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import t_en from './translate/en/Common.json';
import t_vi from './translate/vi/Common.json';


let locale = "en";

if(localStorage.getItem('locale')){
  locale = localStorage.getItem('locale');
}

i18n.init({
  interpolation: {escapeValue: false},
  lng: locale,
  resources: {
    en: {
      Common: t_en
    },
    vi: {
      Common: t_vi
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n = {i18n}>
  <App />
  </I18nextProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
