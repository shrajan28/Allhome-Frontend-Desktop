import { createContext, useContext, useState } from "react";
const AppContext = createContext();
const useAppContextProvider = () => {

    const [language , setLanguage]=useState("en")

    const languageHandle = (values) => {
        setLanguage(values);
      };
    
      const getLanguage = () => {
        return language;
      };

    return{
        languageHandle,
        getLanguage
    }
}

function AppContextProvider({ children }) {
    const filter = useAppContextProvider();
    return (
      <AppContext.Provider value={filter}> {children} </AppContext.Provider>
    );
  }
  function useAppContext() {
    return useContext(AppContext);
  }
  export { AppContextProvider, useAppContext };