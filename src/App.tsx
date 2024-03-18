import React from 'react';
import { useEffect } from 'react';
import Login from './landing-pages/Login';
import Register from './landing-pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import DashboardFull from './Dashboard/DashboardFull';
import AdminDashboard from './Desktop2/AdminDashboard';
import AdminDashboardDark from './Desktop2/AdimnDashboardDark';
import BusinessDetails from './landing-pages/BusinessDetails';
import Sidebar from './Desktop2/Sidebar';
import { IntlProvider } from "react-intl";
import messages_en from "./locales/en.json"
import messages_ar from "./locales/arab.json" 
import { useAppContext } from './utils/Context.js';





type AppProps = {
    title: string;
  };

  const messages :any = {
    en: messages_en,
    ar: messages_ar,
  };
  
  
  const App: React.FC<AppProps> = ({ title }) => {
    
    const {getLanguage} = useAppContext();
      
      const locale = getLanguage();

      useEffect(() => {
        document.documentElement.setAttribute('dir', getLanguage()=="ar" ? 'rtl' : 'ltr');
      }, [getLanguage()]);
    

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
        <BrowserRouter>
            <Routes >
                <Route path="/" >
                <Route index  element={<Login  title=''/>} />
                <Route path="/Register" element={<Register title='' />} />
                <Route path="/Dashboard" element={<Dashboard title='' />} />
                <Route path="/DashboardFull" element={<DashboardFull title='' />} />
                <Route path="/AdminDashboard" element={<AdminDashboard title='' />} />
                <Route path="/AdminDashboardDark" element={<AdminDashboardDark title='' />} />
                <Route path="/BusinessDetails" element={<BusinessDetails title='' />} />
                <Route path="/Sidebar" element={<Sidebar title='' />} />

                </Route>
            </Routes>
        </BrowserRouter>
        \</IntlProvider>
    );
}

export default App;